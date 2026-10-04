import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Brain, 
  Zap, 
  Timer, 
  RotateCcw, 
  Trophy, 
  CheckCircle2, 
  XCircle, 
  Flame, 
  Play, 
  Sparkles, 
  Target, 
  ArrowRight,
  ShieldAlert,
  Award,
  ChevronRight,
  Volume2,
  VolumeX,
  Infinity as InfinityIcon,
  Activity,
  BarChart3,
  Compass,
  Cpu,
  RefreshCw
} from 'lucide-react';

// Geometric Shapes for Switch Challenge
const SHAPES = [
  { id: 'tri', symbol: '▲', name: 'Triangle', color: 'text-amber-400 border-amber-400/50 bg-amber-500/15 shadow-[0_0_12px_rgba(251,191,36,0.3)]' },
  { id: 'hex', symbol: '⬢', name: 'Hexagon', color: 'text-cyan-400 border-cyan-400/50 bg-cyan-500/15 shadow-[0_0_12px_rgba(34,211,238,0.3)]' },
  { id: 'sqr', symbol: '■', name: 'Square', color: 'text-emerald-400 border-emerald-400/50 bg-emerald-500/15 shadow-[0_0_12px_rgba(52,211,153,0.3)]' },
  { id: 'str', symbol: '★', name: 'Star', color: 'text-purple-400 border-purple-400/50 bg-purple-500/15 shadow-[0_0_12px_rgba(192,132,252,0.3)]' },
];

// Company Benchmark Data
const COMPANY_PRESETS = {
  capgemini: {
    name: 'Capgemini',
    title: 'Game-Based Aptitude',
    badge: 'Capgemini Calibrated',
    focus: 'Spatial Memory & Deductive Transposition',
    cutoff: '85% Accuracy',
    timePerQ: '1.8s avg',
    skills: [
      { label: 'Grid Spatial Memory', val: 92, color: 'from-blue-500 to-cyan-400' },
      { label: 'Switch Deductive Logic', val: 88, color: 'from-indigo-500 to-purple-400' },
      { label: 'Speed Mental Math', val: 95, color: 'from-cyan-500 to-emerald-400' },
    ],
    proTip: 'In Capgemini Round 1, accuracy on the Switch Challenge & Grid Memory counts 3x higher than raw MCQ attempts.'
  },
  tcs: {
    name: 'TCS NQT',
    title: 'Cognitive & Time-Attack',
    badge: 'TCS NQT Calibrated',
    focus: 'Numerical Shortcuts & Pattern Analysis',
    cutoff: '80% Accuracy',
    timePerQ: '2.2s avg',
    skills: [
      { label: 'Numerical Speed Math', val: 96, color: 'from-cyan-500 to-blue-400' },
      { label: 'Logical Deductions', val: 85, color: 'from-purple-500 to-pink-400' },
      { label: 'Pattern Accuracy', val: 90, color: 'from-emerald-500 to-teal-400' },
    ],
    proTip: 'TCS NQT tests zero-calculator speed. Candidates who master mental squares and % shortcuts clear cutoff in under 12 mins.'
  },
  accenture: {
    name: 'Accenture',
    title: 'Cognitive Assessment',
    badge: 'Accenture Calibrated',
    focus: 'Working Memory & Critical Reasoning',
    cutoff: '82% Accuracy',
    timePerQ: '2.0s avg',
    skills: [
      { label: 'Working Memory Load', val: 91, color: 'from-indigo-500 to-blue-400' },
      { label: 'Rule-Based Switching', val: 89, color: 'from-purple-500 to-indigo-400' },
      { label: 'Speed Quantitative', val: 93, color: 'from-blue-500 to-emerald-400' },
    ],
    proTip: 'Accenture evaluates cognitive flexibility across rapid alternating difficulty levels.'
  }
};

// Web Audio API Sound Generator (Zero external assets needed)
const playSound = (type, isMuted) => {
  if (isMuted || typeof window === 'undefined') return;
  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;
    const ctx = new AudioContext();

    if (type === 'click') {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(520, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(780, ctx.currentTime + 0.06);
      gain.gain.setValueAtTime(0.1, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.06);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.06);
    } else if (type === 'correct') {
      [523.25, 659.25, 783.99].forEach((freq, i) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, ctx.currentTime + i * 0.05);
        gain.gain.setValueAtTime(0.12, ctx.currentTime + i * 0.05);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + i * 0.05 + 0.12);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(ctx.currentTime + i * 0.05);
        osc.stop(ctx.currentTime + i * 0.05 + 0.13);
      });
    } else if (type === 'levelClear') {
      [523.25, 659.25, 783.99, 1046.50].forEach((freq, i) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, ctx.currentTime + i * 0.04);
        gain.gain.setValueAtTime(0.15, ctx.currentTime + i * 0.04);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + i * 0.04 + 0.25);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(ctx.currentTime + i * 0.04);
        osc.stop(ctx.currentTime + i * 0.04 + 0.26);
      });
    } else if (type === 'wrong') {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(190, ctx.currentTime);
      osc.frequency.linearRampToValueAtTime(120, ctx.currentTime + 0.12);
      gain.gain.setValueAtTime(0.08, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.12);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.12);
    }
  } catch (e) {
    // Ignore audio restriction / fallback
  }
};

export default function CompanyMockGameArena() {
  const [activeTab, setActiveTab] = useState('grid'); // 'grid' | 'switch' | 'math'
  const [gameMode, setGameMode] = useState('sprint'); // 'sprint' (30s) | 'zen' (untimed practice) | 'blitz' (sudden death 3 lives)
  const [gameState, setGameState] = useState('idle'); // 'idle' | 'playing' | 'gameover'
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [lives, setLives] = useState(3);
  const [timeLeft, setTimeLeft] = useState(30);
  const [solvedCount, setSolvedCount] = useState(0);
  const [attempts, setAttempts] = useState(0);
  const [feedback, setFeedback] = useState(null); // { type: 'success'|'error', text: string }
  const [isMuted, setIsMuted] = useState(false);
  const [selectedCompany, setSelectedCompany] = useState('capgemini');

  // Idle Preview Animation State
  const [idleDotPattern, setIdleDotPattern] = useState([1, 4, 7]);

  const timerRef = useRef(null);

  // -------------------------------------------------------------
  // GAME 1: GRID MEMORY STATE
  // -------------------------------------------------------------
  const [gridLevel, setGridLevel] = useState(1);
  const [gridPhase, setGridPhase] = useState('memorize'); // 'memorize' | 'recall'
  const [gridActiveCells, setGridActiveCells] = useState([]);
  const [gridSelectedCells, setGridSelectedCells] = useState([]);
  const [gridSize, setGridSize] = useState(3); // 3 for 3x3, 4 for 4x4
  const memorizeTimeoutRef = useRef(null);

  // -------------------------------------------------------------
  // GAME 2: SWITCH CHALLENGE STATE
  // -------------------------------------------------------------
  const [switchProblem, setSwitchProblem] = useState(null);

  // -------------------------------------------------------------
  // GAME 3: SPEED MATH STATE
  // -------------------------------------------------------------
  const [mathProblem, setMathProblem] = useState(null);

  // Trigger sound + visual feedback popup
  const triggerFeedback = (type, text) => {
    playSound(type === 'success' ? 'correct' : 'wrong', isMuted);
    setFeedback({ type, text });
    setTimeout(() => setFeedback(null), 1000);
  };

  // Idle dot pulse ticker
  useEffect(() => {
    if (gameState === 'idle') {
      const interval = setInterval(() => {
        const count = 3 + Math.floor(Math.random() * 2);
        const rand = [];
        while (rand.length < count) {
          const r = Math.floor(Math.random() * 9);
          if (!rand.includes(r)) rand.push(r);
        }
        setIdleDotPattern(rand);
      }, 2000);
      return () => clearInterval(interval);
    }
  }, [gameState]);

  // -------------------------------------------------------------
  // GENERATORS
  // -------------------------------------------------------------
  const startGridRound = useCallback((level = 1) => {
    const size = level >= 3 ? 4 : 3;
    setGridSize(size);
    const totalCells = size * size;
    const dotCount = Math.min(3 + level - 1, size === 3 ? 5 : 7);

    const cellIndices = [];
    while (cellIndices.length < dotCount) {
      const r = Math.floor(Math.random() * totalCells);
      if (!cellIndices.includes(r)) cellIndices.push(r);
    }

    setGridActiveCells(cellIndices);
    setGridSelectedCells([]);
    setGridPhase('memorize');

    if (memorizeTimeoutRef.current) clearTimeout(memorizeTimeoutRef.current);
    const displayTime = Math.max(1600 - level * 100, 1100);
    memorizeTimeoutRef.current = setTimeout(() => {
      setGridPhase('recall');
    }, displayTime);
  }, []);

  const generateSwitchProblem = useCallback(() => {
    const baseIndices = [0, 1, 2, 3];
    const rule = [...baseIndices].sort(() => Math.random() - 0.5);
    if (rule.every((v, idx) => v === baseIndices[idx])) {
      rule.reverse();
    }
    const targetOrder = rule.map(pos => baseIndices[pos]);

    const candidates = [targetOrder];
    while (candidates.length < 4) {
      const perm = [...baseIndices].sort(() => Math.random() - 0.5);
      const exists = candidates.some(c => c.every((v, i) => v === perm[i]));
      if (!exists) candidates.push(perm);
    }
    const shuffledChoices = candidates.sort(() => Math.random() - 0.5);

    setSwitchProblem({
      baseOrder: baseIndices,
      rule: rule.map(r => r + 1),
      correctOrder: targetOrder,
      choices: shuffledChoices,
    });
  }, []);

  const generateMathProblem = useCallback(() => {
    const types = ['add', 'sub', 'mul', 'missing', 'percent', 'square'];
    const type = types[Math.floor(Math.random() * types.length)];
    let question = '';
    let answer = 0;

    if (type === 'add') {
      const a = Math.floor(Math.random() * 80) + 15;
      const b = Math.floor(Math.random() * 70) + 12;
      question = `${a} + ${b} = ?`;
      answer = a + b;
    } else if (type === 'sub') {
      const a = Math.floor(Math.random() * 90) + 40;
      const b = Math.floor(Math.random() * 35) + 10;
      question = `${a} - ${b} = ?`;
      answer = a - b;
    } else if (type === 'mul') {
      const a = Math.floor(Math.random() * 14) + 6;
      const b = Math.floor(Math.random() * 12) + 4;
      question = `${a} × ${b} = ?`;
      answer = a * b;
    } else if (type === 'missing') {
      const a = Math.floor(Math.random() * 9) + 4;
      const b = Math.floor(Math.random() * 8) + 3;
      const prod = a * b;
      question = `? × ${b} = ${prod}`;
      answer = a;
    } else if (type === 'square') {
      const roots = [12, 13, 14, 15, 16, 18, 19, 21, 25];
      const r = roots[Math.floor(Math.random() * roots.length)];
      question = `${r}² = ?`;
      answer = r * r;
    } else {
      const percents = [15, 20, 25, 40, 50, 75];
      const p = percents[Math.floor(Math.random() * percents.length)];
      const base = (Math.floor(Math.random() * 12) + 2) * (100 / (p === 75 || p === 25 ? 25 : p === 15 ? 5 : 20));
      question = `${p}% of ${base} = ?`;
      answer = Math.round((p / 100) * base);
    }

    const options = [answer];
    while (options.length < 4) {
      const delta = (Math.floor(Math.random() * 6) + 1) * (Math.random() > 0.5 ? 1 : -1);
      const fake = answer + delta;
      if (fake > 0 && !options.includes(fake)) {
        options.push(fake);
      }
    }
    const shuffledOptions = options.sort(() => Math.random() - 0.5);

    setMathProblem({
      question,
      answer,
      options: shuffledOptions
    });
  }, []);

  // -------------------------------------------------------------
  // START GAME
  // -------------------------------------------------------------
  const startGame = (tab = activeTab, mode = gameMode) => {
    playSound('click', isMuted);
    setScore(0);
    setStreak(0);
    setLives(3);
    setTimeLeft(mode === 'blitz' ? 15 : 30);
    setSolvedCount(0);
    setAttempts(0);
    setGameState('playing');
    setGridLevel(1);

    if (tab === 'grid') {
      startGridRound(1);
    } else if (tab === 'switch') {
      generateSwitchProblem();
    } else if (tab === 'math') {
      generateMathProblem();
    }
  };

  // Timer loop
  useEffect(() => {
    if (gameState === 'playing' && gameMode !== 'zen') {
      timerRef.current = setInterval(() => {
        setTimeLeft(prev => {
          if (prev <= 1) {
            clearInterval(timerRef.current);
            playSound('levelClear', isMuted);
            setGameState('gameover');
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timerRef.current);
  }, [gameState, gameMode, isMuted]);

  // Tab change
  const handleTabChange = (newTab) => {
    playSound('click', isMuted);
    setActiveTab(newTab);
    if (gameState === 'playing') {
      clearInterval(timerRef.current);
      if (memorizeTimeoutRef.current) clearTimeout(memorizeTimeoutRef.current);
      startGame(newTab, gameMode);
    }
  };

  // -------------------------------------------------------------
  // GAMEPLAY ACTIONS
  // -------------------------------------------------------------
  // 1. Grid Cell Click
  const handleGridCellClick = (index) => {
    if (gridPhase !== 'recall' || gameState !== 'playing') return;
    if (gridSelectedCells.includes(index)) return;

    setAttempts(prev => prev + 1);

    if (gridActiveCells.includes(index)) {
      const newSelected = [...gridSelectedCells, index];
      setGridSelectedCells(newSelected);
      const points = 60 * (1 + Math.min(streak, 5) * 0.4);
      setScore(prev => prev + Math.round(points));
      setStreak(prev => prev + 1);
      triggerFeedback('success', `+${Math.round(points)} pts`);

      if (newSelected.length === gridActiveCells.length) {
        setSolvedCount(prev => prev + 1);
        const nextLvl = gridLevel + 1;
        setGridLevel(nextLvl);
        playSound('levelClear', isMuted);
        triggerFeedback('success', `🎉 Level ${gridLevel} Clear!`);
        setTimeout(() => {
          if (gameState === 'playing') {
            startGridRound(nextLvl);
          }
        }, 500);
      }
    } else {
      setStreak(0);
      triggerFeedback('error', 'Wrong cell!');
      if (gameMode === 'blitz') {
        const newLives = lives - 1;
        setLives(newLives);
        if (newLives <= 0) {
          setGameState('gameover');
          return;
        }
      }
      setTimeout(() => {
        if (gameState === 'playing') {
          startGridRound(gridLevel);
        }
      }, 400);
    }
  };

  // 2. Switch Choice Click
  const handleSwitchChoice = (choice) => {
    if (gameState !== 'playing' || !switchProblem) return;
    setAttempts(prev => prev + 1);

    const isCorrect = choice.every((val, idx) => val === switchProblem.correctOrder[idx]);
    if (isCorrect) {
      const points = 120 * (1 + Math.min(streak, 5) * 0.4);
      setScore(prev => prev + Math.round(points));
      setStreak(prev => prev + 1);
      setSolvedCount(prev => prev + 1);
      triggerFeedback('success', `+${Math.round(points)} pts! ⚡`);
      generateSwitchProblem();
    } else {
      setStreak(0);
      triggerFeedback('error', 'Incorrect Switch!');
      if (gameMode === 'blitz') {
        const newLives = lives - 1;
        setLives(newLives);
        if (newLives <= 0) {
          setGameState('gameover');
          return;
        }
      }
      generateSwitchProblem();
    }
  };

  // 3. Speed Math Choice Click
  const handleMathChoice = (chosen) => {
    if (gameState !== 'playing' || !mathProblem) return;
    setAttempts(prev => prev + 1);

    if (chosen === mathProblem.answer) {
      const points = 100 * (1 + Math.min(streak, 5) * 0.4);
      setScore(prev => prev + Math.round(points));
      setStreak(prev => prev + 1);
      setSolvedCount(prev => prev + 1);
      triggerFeedback('success', `+${Math.round(points)} pts! 🎯`);
      generateMathProblem();
    } else {
      setStreak(0);
      triggerFeedback('error', `Wrong! Ans: ${mathProblem.answer}`);
      if (gameMode === 'blitz') {
        const newLives = lives - 1;
        setLives(newLives);
        if (newLives <= 0) {
          setGameState('gameover');
          return;
        }
      }
      generateMathProblem();
    }
  };

  const accuracy = attempts > 0 ? Math.round((solvedCount / attempts) * 100) : 100;
  const currentCompany = COMPANY_PRESETS[selectedCompany];

  return (
    <section className="w-full py-16 px-4 md:px-8 font-sans relative" id="game-aptitude-section">
      {/* Background glow mesh */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[550px] bg-gradient-to-r from-blue-600/15 via-indigo-600/10 to-purple-600/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/25 text-blue-400 text-xs font-bold uppercase tracking-wider mb-4 backdrop-blur-md shadow-sm">
            <Sparkles size={14} className="animate-spin text-cyan-400" style={{ animationDuration: '6s' }} />
            Interactive Company Mock Tests & Game Aptitude
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight mb-4">
            Company Mock Tests. <br className="hidden md:block" />
            <span className="bg-gradient-to-r from-white via-blue-100 to-indigo-300 bg-clip-text text-transparent">
              Real patterns, real time.
            </span>
          </h2>
          <p className="text-white/60 text-sm md:text-base max-w-2xl leading-relaxed">
            Practice calibrated game drills for Capgemini Game Aptitude, TCS NQT, Accenture Cognitive, Infosys, and Wipro.
          </p>
        </div>

        {/* Main Grid: Interactive Game Arena + Live Benchmark Stats */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* LEFT 8 COLS: PLAYABLE GAME ARENA */}
          <div className="lg:col-span-8 flex flex-col">
            <div className="relative flex-1 bg-[#141418]/95 border border-white/10 rounded-[2.5rem] p-6 md:p-8 flex flex-col justify-between backdrop-blur-2xl shadow-[0_20px_60px_rgba(0,0,0,0.5)] overflow-hidden min-h-[540px]">
              
              {/* Dynamic top gradient line */}
              <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-blue-500/0 via-cyan-400/70 to-indigo-500/0" />

              {/* TOP BAR: Game Tabs + Mode & Audio Controls */}
              <div className="flex flex-wrap items-center justify-between gap-3 pb-5 border-b border-white/10">
                {/* 3 Game Mode Tabs */}
                <div className="flex items-center gap-1.5 p-1 bg-black/50 rounded-2xl border border-white/10 shadow-inner">
                  <button
                    onClick={() => handleTabChange('grid')}
                    className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold transition-all duration-200 cursor-pointer ${
                      activeTab === 'grid'
                        ? 'bg-blue-600 text-white shadow-[0_0_18px_rgba(37,99,235,0.5)]'
                        : 'text-white/60 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <Brain size={14} className={activeTab === 'grid' ? 'animate-pulse' : ''} />
                    <span>Grid Memory</span>
                    <span className="hidden sm:inline-block px-1.5 py-0.5 rounded bg-white/20 text-[10px] font-extrabold uppercase">Capgemini</span>
                  </button>

                  <button
                    onClick={() => handleTabChange('switch')}
                    className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold transition-all duration-200 cursor-pointer ${
                      activeTab === 'switch'
                        ? 'bg-indigo-600 text-white shadow-[0_0_18px_rgba(79,70,229,0.5)]'
                        : 'text-white/60 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <Zap size={14} className={activeTab === 'switch' ? 'animate-bounce' : ''} />
                    <span>Switch Logic</span>
                    <span className="hidden sm:inline-block px-1.5 py-0.5 rounded bg-white/20 text-[10px] font-extrabold uppercase">Deductive</span>
                  </button>

                  <button
                    onClick={() => handleTabChange('math')}
                    className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold transition-all duration-200 cursor-pointer ${
                      activeTab === 'math'
                        ? 'bg-cyan-600 text-white shadow-[0_0_18px_rgba(6,182,212,0.5)]'
                        : 'text-white/60 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <Target size={14} className={activeTab === 'math' ? 'animate-spin' : ''} style={{ animationDuration: '4s' }} />
                    <span>Speed Math</span>
                    <span className="hidden sm:inline-block px-1.5 py-0.5 rounded bg-white/20 text-[10px] font-extrabold uppercase">TCS NQT</span>
                  </button>
                </div>

                {/* Right controls: Sound Toggle + Live Status */}
                <div className="flex items-center gap-2.5">
                  {/* Audio Mute/Unmute */}
                  <button
                    onClick={() => {
                      playSound('click', !isMuted);
                      setIsMuted(!isMuted);
                    }}
                    title={isMuted ? 'Unmute SFX' : 'Mute SFX'}
                    className="p-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white/70 hover:text-white transition-colors cursor-pointer"
                  >
                    {isMuted ? <VolumeX size={15} /> : <Volume2 size={15} className="text-cyan-400" />}
                  </button>

                  {/* HUD Status when playing */}
                  {gameState === 'playing' && (
                    <div className="flex items-center gap-2">
                      {gameMode !== 'zen' && (
                        <div className="flex items-center gap-1 px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 text-white text-xs font-mono font-bold">
                          <Timer size={13} className={timeLeft <= 5 ? 'text-red-400 animate-ping' : 'text-blue-400'} />
                          <span className={timeLeft <= 5 ? 'text-red-400 font-black' : ''}>{timeLeft}s</span>
                        </div>
                      )}

                      <div className="flex items-center gap-1 px-3 py-1.5 rounded-xl bg-amber-500/10 border border-amber-500/25 text-amber-400 text-xs font-bold">
                        <Trophy size={13} />
                        <span>{score}</span>
                      </div>

                      {streak > 1 && (
                        <motion.div 
                          initial={{ scale: 0.8, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          className="flex items-center gap-1 px-2.5 py-1 rounded-xl bg-gradient-to-r from-orange-500/20 to-red-500/20 border border-orange-500/30 text-orange-400 text-xs font-black shadow-[0_0_12px_rgba(249,115,22,0.3)]"
                        >
                          <Flame size={13} className="fill-orange-400 animate-pulse" />
                          <span>x{streak}</span>
                        </motion.div>
                      )}
                    </div>
                  )}
                </div>
              </div>

              {/* Feedback Pop Toast */}
              <AnimatePresence>
                {feedback && (
                  <motion.div
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className={`absolute top-20 right-8 z-30 px-4 py-2 rounded-xl text-xs font-black shadow-2xl border backdrop-blur-xl flex items-center gap-2 ${
                      feedback.type === 'success' 
                        ? 'bg-emerald-500/25 text-emerald-300 border-emerald-500/40 shadow-[0_0_20px_rgba(16,185,129,0.3)]' 
                        : 'bg-red-500/25 text-red-300 border-red-500/40 shadow-[0_0_20px_rgba(239,68,68,0.3)]'
                    }`}
                  >
                    {feedback.type === 'success' ? <CheckCircle2 size={14} className="text-emerald-400" /> : <XCircle size={14} className="text-red-400" />}
                    {feedback.text}
                  </motion.div>
                )}
              </AnimatePresence>

              {/* GAME VIEWPORT */}
              <div className="my-auto py-4 flex flex-col items-center justify-center min-h-[340px]">
                
                {/* 1. IDLE STATE: INTERACTIVE LIVE PREVIEW HERO */}
                {gameState === 'idle' && (
                  <motion.div 
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex flex-col items-center text-center max-w-xl w-full"
                  >
                    {/* Interactive Animated Visual Teaser */}
                    <div className="relative mb-6">
                      {activeTab === 'grid' && (
                        <div className="p-3.5 rounded-2xl bg-black/60 border border-blue-500/30 shadow-[0_0_30px_rgba(59,130,246,0.2)]">
                          <div className="grid grid-cols-3 gap-2 w-44">
                            {Array.from({ length: 9 }).map((_, i) => (
                              <motion.button
                                key={i}
                                whileHover={{ scale: 1.1 }}
                                onClick={() => {
                                  playSound('click', isMuted);
                                  setIdleDotPattern(prev => prev.includes(i) ? prev.filter(x => x !== i) : [...prev, i]);
                                }}
                                className={`h-11 rounded-xl border transition-all duration-300 flex items-center justify-center cursor-pointer ${
                                  idleDotPattern.includes(i)
                                    ? 'bg-gradient-to-br from-cyan-400 to-blue-600 border-cyan-300 shadow-[0_0_15px_rgba(56,189,248,0.8)]'
                                    : 'bg-white/5 border-white/10 hover:border-blue-400/40'
                                }`}
                              >
                                {idleDotPattern.includes(i) && <span className="w-2 h-2 rounded-full bg-white shadow-sm" />}
                              </motion.button>
                            ))}
                          </div>
                          <span className="text-[10px] font-mono text-cyan-400/70 mt-2 block">
                            💡 Live Preview • Tap tiles to test
                          </span>
                        </div>
                      )}

                      {activeTab === 'switch' && (
                        <div className="p-4 rounded-2xl bg-black/60 border border-indigo-500/30 shadow-[0_0_30px_rgba(99,102,241,0.2)]">
                          <div className="flex items-center gap-2 mb-2 justify-center">
                            {SHAPES.map((s, i) => (
                              <div key={i} className={`w-10 h-10 rounded-xl border flex items-center justify-center text-base font-bold ${s.color}`}>
                                {s.symbol}
                              </div>
                            ))}
                          </div>
                          <div className="px-3 py-1 rounded-lg bg-indigo-500/20 border border-indigo-400/30 text-[11px] font-mono font-bold text-indigo-300">
                            Rule: [ 3 - 1 - 4 - 2 ] ➔ Transpose Shapes
                          </div>
                        </div>
                      )}

                      {activeTab === 'math' && (
                        <div className="p-4 rounded-2xl bg-black/60 border border-cyan-500/30 shadow-[0_0_30px_rgba(6,182,212,0.2)]">
                          <div className="text-2xl font-black font-mono text-white mb-2">
                            16 × 8 = <span className="text-cyan-400 underline decoration-wavy">128</span>
                          </div>
                          <div className="flex gap-2 justify-center">
                            {['118', '128', '136', '124'].map((n, i) => (
                              <span key={i} className={`px-2.5 py-1 rounded-lg text-xs font-mono font-bold ${n === '128' ? 'bg-cyan-500 text-black shadow-md' : 'bg-white/5 text-white/50'}`}>
                                {n}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>

                    <h3 className="text-2xl font-black text-white mb-2 tracking-tight">
                      {activeTab === 'grid' && 'Capgemini Grid Memory Challenge'}
                      {activeTab === 'switch' && 'Capgemini Deductive Switch Logic'}
                      {activeTab === 'math' && 'Placement Speed Math Sprint'}
                    </h3>

                    <p className="text-white/60 text-xs md:text-sm leading-relaxed mb-6 max-w-md">
                      {activeTab === 'grid' && 'Memorize the flashing pattern in 1.5 seconds, then recall all exact cell locations before time runs out. Practice difficulty scales dynamically!'}
                      {activeTab === 'switch' && 'Deduce the algorithmic transformation code (e.g. 3-1-4-2) and identify the matching sequence in under 3 seconds.'}
                      {activeTab === 'math' && 'Rapid arithmetic drills, missing factor puzzles, and percentage shortcuts calibrated for TCS NQT & Capgemini rounds.'}
                    </p>

                    {/* Mode Selector Radio Pills */}
                    <div className="flex items-center gap-2 p-1 bg-black/40 rounded-2xl border border-white/10 mb-6">
                      <button
                        onClick={() => setGameMode('sprint')}
                        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                          gameMode === 'sprint' ? 'bg-blue-600 text-white shadow-sm' : 'text-white/50 hover:text-white'
                        }`}
                      >
                        <Timer size={12} />
                        <span>30s Sprint</span>
                      </button>

                      <button
                        onClick={() => setGameMode('zen')}
                        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                          gameMode === 'zen' ? 'bg-indigo-600 text-white shadow-sm' : 'text-white/50 hover:text-white'
                        }`}
                      >
                        <InfinityIcon size={12} />
                        <span>Zen Practice</span>
                      </button>

                      <button
                        onClick={() => setGameMode('blitz')}
                        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                          gameMode === 'blitz' ? 'bg-amber-600 text-white shadow-sm' : 'text-white/50 hover:text-white'
                        }`}
                      >
                        <Flame size={12} />
                        <span>3-Life Blitz</span>
                      </button>
                    </div>

                    {/* Start Button */}
                    <button
                      onClick={() => startGame(activeTab, gameMode)}
                      className="group relative px-8 py-3.5 rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600 text-white font-black text-sm shadow-[0_0_30px_rgba(37,99,235,0.5)] hover:shadow-[0_0_40px_rgba(37,99,235,0.8)] hover:scale-105 active:scale-95 transition-all duration-200 flex items-center gap-2 cursor-pointer"
                    >
                      <Play size={16} className="fill-white" />
                      <span>Start {gameMode === 'zen' ? 'Practice Drill' : gameMode === 'blitz' ? 'Blitz Challenge' : '30s Practice Test'}</span>
                      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                  </motion.div>
                )}

                {/* 2. PLAYING STATE: GRID MEMORY */}
                {gameState === 'playing' && activeTab === 'grid' && (
                  <div className="flex flex-col items-center w-full">
                    <div className="mb-4 text-center">
                      <span className={`text-xs font-bold px-3.5 py-1.5 rounded-full border backdrop-blur-md shadow-sm transition-all ${
                        gridPhase === 'memorize' 
                          ? 'bg-cyan-500/20 text-cyan-300 border-cyan-400/40 shadow-[0_0_15px_rgba(6,182,212,0.3)]' 
                          : 'bg-emerald-500/20 text-emerald-300 border-emerald-400/40'
                      }`}>
                        {gridPhase === 'memorize' ? '🧠 Memorize the pattern now!' : '🎯 Recall & tap all highlighted cells!'}
                      </span>
                    </div>

                    <div 
                      className="grid gap-2.5 p-3 rounded-2xl bg-black/50 border border-white/10 shadow-2xl"
                      style={{ 
                        gridTemplateColumns: `repeat(${gridSize}, minmax(0, 1fr))`,
                        width: gridSize === 3 ? '250px' : '300px'
                      }}
                    >
                      {Array.from({ length: gridSize * gridSize }).map((_, idx) => {
                        const isTarget = gridActiveCells.includes(idx);
                        const isSelected = gridSelectedCells.includes(idx);
                        const showMemorize = gridPhase === 'memorize' && isTarget;

                        return (
                          <motion.button
                            key={idx}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => handleGridCellClick(idx)}
                            disabled={gridPhase === 'memorize' || isSelected}
                            className={`aspect-square rounded-xl border transition-all duration-200 flex items-center justify-center cursor-pointer ${
                              showMemorize
                                ? 'bg-gradient-to-br from-cyan-400 to-blue-600 border-cyan-300 shadow-[0_0_22px_rgba(56,189,248,0.85)] scale-105'
                                : isSelected
                                ? 'bg-emerald-500 border-emerald-300 shadow-[0_0_18px_rgba(16,185,129,0.7)] text-white'
                                : 'bg-white/5 border-white/10 hover:border-white/40 hover:bg-white/10'
                            }`}
                          >
                            {isSelected && <CheckCircle2 size={22} className="stroke-[3]" />}
                          </motion.button>
                        );
                      })}
                    </div>

                    <div className="mt-4 flex items-center gap-3 text-xs text-white/50">
                      <span className="font-bold text-white/70">Level {gridLevel}</span>
                      <span>•</span>
                      <span>Target: {gridActiveCells.length} cells</span>
                      <span>•</span>
                      <span>Found: {gridSelectedCells.length} / {gridActiveCells.length}</span>
                      {gameMode === 'blitz' && (
                        <>
                          <span>•</span>
                          <span className="text-red-400 font-bold">❤️ {lives} Lives</span>
                        </>
                      )}
                    </div>
                  </div>
                )}

                {/* 2. PLAYING STATE: SWITCH CHALLENGE */}
                {gameState === 'playing' && activeTab === 'switch' && switchProblem && (
                  <div className="flex flex-col items-center w-full max-w-lg">
                    {/* Top Row: Base Shapes */}
                    <div className="w-full bg-black/50 border border-white/10 rounded-2xl p-4 mb-4 shadow-inner">
                      <div className="text-[11px] font-extrabold text-white/50 uppercase text-center mb-2 tracking-wider">
                        Initial Shape Positions [1, 2, 3, 4]
                      </div>
                      <div className="grid grid-cols-4 gap-2 text-center">
                        {switchProblem.baseOrder.map((shapeIdx, i) => {
                          const item = SHAPES[shapeIdx];
                          return (
                            <div key={i} className="flex flex-col items-center">
                              <div className={`w-12 h-12 rounded-xl border flex items-center justify-center text-xl font-black ${item.color}`}>
                                {item.symbol}
                              </div>
                              <span className="text-[10px] text-white/40 mt-1 font-mono font-bold">Pos #{i + 1}</span>
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    {/* Switch Rule Box */}
                    <div className="flex items-center justify-center gap-3 px-5 py-2 rounded-2xl bg-indigo-500/15 border border-indigo-500/35 text-indigo-300 mb-6 shadow-md">
                      <span className="text-xs font-black uppercase tracking-wider">Switch Code:</span>
                      <div className="flex gap-2 font-mono font-black text-sm text-white">
                        {switchProblem.rule.map((r, idx) => (
                          <span key={idx} className="px-2.5 py-0.5 rounded-lg bg-indigo-600/50 border border-indigo-400/40 shadow-sm">
                            {r}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Candidate Choice Cards */}
                    <div className="grid grid-cols-2 gap-3 w-full">
                      {switchProblem.choices.map((choice, cIdx) => (
                        <motion.button
                          key={cIdx}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => handleSwitchChoice(choice)}
                          className="p-3.5 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-indigo-400/50 flex items-center justify-center gap-2.5 transition-all duration-150 cursor-pointer shadow-sm"
                        >
                          <span className="text-xs font-bold text-white/40">
                            {String.fromCharCode(65 + cIdx)}.
                          </span>
                          <div className="flex gap-1.5">
                            {choice.map((sIdx, i) => (
                              <span key={i} className={`w-7 h-7 rounded-lg border flex items-center justify-center text-xs font-black ${SHAPES[sIdx].color}`}>
                                {SHAPES[sIdx].symbol}
                              </span>
                            ))}
                          </div>
                        </motion.button>
                      ))}
                    </div>
                  </div>
                )}

                {/* 2. PLAYING STATE: SPEED MATH */}
                {gameState === 'playing' && activeTab === 'math' && mathProblem && (
                  <div className="flex flex-col items-center w-full max-w-md text-center">
                    <div className="text-xs font-extrabold uppercase tracking-widest text-cyan-400/90 mb-2">
                      Mental Arithmetic • Quick Reflex
                    </div>

                    <div className="text-4xl md:text-5xl font-black text-white font-mono tracking-wider mb-6 p-6 rounded-3xl bg-black/50 border border-white/10 w-full shadow-inner">
                      {mathProblem.question}
                    </div>

                    {/* 4 Multi-Choice Option Buttons */}
                    <div className="grid grid-cols-2 gap-3 w-full">
                      {mathProblem.options.map((opt, oIdx) => (
                        <motion.button
                          key={oIdx}
                          whileHover={{ scale: 1.03 }}
                          whileTap={{ scale: 0.97 }}
                          onClick={() => handleMathChoice(opt)}
                          className="py-4 px-6 rounded-2xl bg-white/5 hover:bg-cyan-500/20 border border-white/10 hover:border-cyan-400/40 text-2xl font-black font-mono text-white transition-all duration-150 shadow-sm cursor-pointer"
                        >
                          {opt}
                        </motion.button>
                      ))}
                    </div>
                  </div>
                )}

                {/* 3. GAME OVER / RESULT SCORECARD */}
                {gameState === 'gameover' && (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center text-center max-w-md w-full"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-400 flex items-center justify-center mb-3 shadow-[0_0_20px_rgba(245,158,11,0.2)]">
                      <Award size={32} />
                    </div>

                    <h3 className="text-2xl font-black text-white mb-1">Round Completed!</h3>
                    <p className="text-xs text-white/60 mb-5">Here is your live aptitude performance score</p>

                    {/* Scorecard stats card */}
                    <div className="grid grid-cols-3 gap-2 w-full p-4 rounded-2xl bg-black/60 border border-white/10 mb-6 text-left">
                      <div className="p-2">
                        <div className="text-[11px] text-white/50 font-medium">Final Score</div>
                        <div className="text-xl font-black text-white">{score}</div>
                      </div>
                      <div className="p-2 border-l border-white/10">
                        <div className="text-[11px] text-white/50 font-medium">Accuracy</div>
                        <div className="text-xl font-black text-emerald-400">{accuracy}%</div>
                      </div>
                      <div className="p-2 border-l border-white/10">
                        <div className="text-[11px] text-white/50 font-medium">Puzzles Cleared</div>
                        <div className="text-xl font-black text-blue-400">{solvedCount}</div>
                      </div>
                    </div>

                    {/* Benchmark Callout */}
                    <div className="w-full p-3.5 rounded-xl bg-blue-500/10 border border-blue-500/25 text-blue-300 text-xs font-semibold mb-6 flex items-center gap-2.5 text-left">
                      <Trophy size={18} className="text-blue-400 shrink-0" />
                      <span>
                        {score >= 800 
                          ? '🎉 Top 5% National Benchmark! You meet the qualifying cutoff for Capgemini & Accenture.' 
                          : '📈 Solid practice run! With 2 more drills, you will easily hit the 90th percentile.'}
                      </span>
                    </div>

                    <div className="flex items-center gap-3 w-full">
                      <button
                        onClick={() => startGame(activeTab, gameMode)}
                        className="flex-1 py-3 px-4 rounded-xl bg-blue-600 text-white font-bold text-xs flex items-center justify-center gap-2 hover:bg-blue-500 transition-colors shadow-lg cursor-pointer"
                      >
                        <RotateCcw size={14} />
                        <span>Play Again</span>
                      </button>
                      <button
                        onClick={() => {
                          const tabs = ['grid', 'switch', 'math'];
                          const next = tabs[(tabs.indexOf(activeTab) + 1) % tabs.length];
                          handleTabChange(next);
                        }}
                        className="flex-1 py-3 px-4 rounded-xl bg-white/10 text-white font-bold text-xs flex items-center justify-center gap-2 hover:bg-white/20 transition-colors border border-white/10 cursor-pointer"
                      >
                        <span>Next Game</span>
                        <ArrowRight size={14} />
                      </button>
                    </div>
                  </motion.div>
                )}
              </div>

              {/* Bottom footer bar inside arena */}
              <div className="pt-4 border-t border-white/5 flex flex-wrap items-center justify-between gap-3 text-xs text-white/40">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Real Placement Paper Patterns • Zero Calculators</span>
                </div>
                <div className="flex items-center gap-1 text-white/60">
                  <Activity size={13} className="text-cyan-400" />
                  <span>Interactive Engine v2.4</span>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT 4 COLS: INTERACTIVE COMPANY BENCHMARK DASHBOARD */}
          <div className="lg:col-span-4 flex flex-col justify-between p-6 md:p-8 rounded-[2.5rem] bg-[#141418]/95 border border-white/10 backdrop-blur-2xl shadow-xl">
            <div>
              {/* Header Badge */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2 text-cyan-400 text-xs font-bold uppercase tracking-wider">
                  <Cpu size={14} />
                  <span>Live Test Calibrations</span>
                </div>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-400/20 text-cyan-300 font-extrabold uppercase">
                  2025/2026 Hiring
                </span>
              </div>

              {/* Company Selector Pills */}
              <div className="grid grid-cols-3 gap-1.5 p-1 bg-black/50 rounded-2xl border border-white/10 mb-6">
                {Object.entries(COMPANY_PRESETS).map(([key, comp]) => (
                  <button
                    key={key}
                    onClick={() => {
                      playSound('click', isMuted);
                      setSelectedCompany(key);
                    }}
                    className={`py-2 px-2 rounded-xl text-xs font-bold transition-all text-center cursor-pointer ${
                      selectedCompany === key
                        ? 'bg-blue-600 text-white shadow-md'
                        : 'text-white/50 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {comp.name}
                  </button>
                ))}
              </div>

              {/* Company Title & Focus */}
              <div className="mb-6">
                <div className="text-xs text-white/40 font-mono mb-1">SELECTED PATTERN</div>
                <h4 className="text-xl font-black text-white">{currentCompany.name} - {currentCompany.title}</h4>
                <p className="text-xs text-white/60 mt-1">{currentCompany.focus}</p>
              </div>

              {/* Cognitive Metric Bars */}
              <div className="space-y-4 mb-6">
                <div className="text-[11px] font-bold text-white/50 uppercase tracking-wider mb-2">
                  Target Cognitive Weightage
                </div>
                {currentCompany.skills.map((skill, i) => (
                  <div key={i} className="space-y-1.5">
                    <div className="flex justify-between text-xs font-medium text-white/80">
                      <span>{skill.label}</span>
                      <span className="font-mono text-cyan-400 font-bold">{skill.val}%</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-white/5 overflow-hidden border border-white/5">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.val}%` }}
                        transition={{ duration: 0.8, delay: i * 0.1 }}
                        className={`h-full rounded-full bg-gradient-to-r ${skill.color}`}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Pro Tip Box */}
              <div className="p-3.5 rounded-2xl bg-blue-500/10 border border-blue-400/20 text-xs text-blue-200/90 leading-relaxed mb-6">
                <div className="flex items-center gap-1.5 font-bold text-blue-300 mb-1">
                  <Compass size={14} />
                  <span>Recruiter Strategy Tip</span>
                </div>
                {currentCompany.proTip}
              </div>
            </div>

            {/* Bottom CTA Button */}
            <div className="pt-4 border-t border-white/10">
              <a
                href="https://www.phoneticedu.com/auth/login"
                className="w-full py-3.5 px-4 rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:opacity-95 text-white text-xs font-extrabold flex items-center justify-center gap-2 transition-all duration-200 shadow-[0_0_25px_rgba(79,70,229,0.4)] hover:shadow-[0_0_35px_rgba(79,70,229,0.7)] hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
              >
                <span>Unlock 50+ Full Mock Tests</span>
                <ChevronRight size={14} />
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
