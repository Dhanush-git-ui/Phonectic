import os
import subprocess
from PIL import Image

chrome_path = r"C:\Program Files\Google\Chrome\Application\chrome.exe"
out_dir = os.path.abspath("public/assets")
scratch_dir = os.path.abspath("scratch_cards")
os.makedirs(scratch_dir, exist_ok=True)

# 1. Percentile Card (568 x 538)
html_percentile = """<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=JetBrains+Mono:wght@600;700;800&display=swap" rel="stylesheet">
<style>
  * { box-sizing: border-box; margin: 0; padding: 0; }
  html, body {
    width: 568px;
    height: 538px;
    background: transparent;
    overflow: hidden;
    font-family: 'Plus Jakarta Sans', -apple-system, sans-serif;
    -webkit-font-smoothing: antialiased;
    padding: 16px 18px 20px 18px;
    display: flex;
  }
  .card {
    width: 100%;
    height: 100%;
    background: linear-gradient(155deg, #ffffff 0%, #f8faff 50%, #eef4ff 100%);
    border-radius: 36px;
    border: 1.5px solid rgba(219, 234, 254, 0.95);
    box-shadow: 
      0 26px 50px -12px rgba(15, 23, 42, 0.16),
      0 12px 28px -6px rgba(37, 99, 235, 0.14),
      inset 0 1px 2px #ffffff;
    padding: 24px 26px 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    overflow: hidden;
  }
  .card::before {
    content: '';
    position: absolute;
    top: -50px;
    right: -50px;
    width: 250px;
    height: 250px;
    background: radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, rgba(59, 130, 246, 0) 70%);
    border-radius: 50%;
    pointer-events: none;
  }
  .top-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .badge-benchmark {
    display: inline-flex;
    align-items: center;
    gap: 7px;
    background: #eff6ff;
    border: 1px solid #bfdbfe;
    padding: 6px 13px;
    border-radius: 20px;
    font-size: 11.5px;
    font-weight: 700;
    color: #1d4ed8;
    letter-spacing: 0.04em;
    text-transform: uppercase;
  }
  .live-dot {
    width: 7px;
    height: 7px;
    background: #2563eb;
    border-radius: 50%;
    box-shadow: 0 0 8px #2563eb;
  }
  .badge-air {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    background: #0f172a;
    color: #ffffff;
    padding: 6px 14px;
    border-radius: 20px;
    font-size: 12.5px;
    font-weight: 800;
    letter-spacing: 0.02em;
    box-shadow: 0 4px 12px rgba(15, 23, 42, 0.2);
  }
  .badge-air .star {
    color: #f59e0b;
    font-size: 13px;
  }
  .metric-section {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    margin-top: 1px;
  }
  .big-score {
    font-size: 58px;
    font-weight: 800;
    color: #0b132b;
    letter-spacing: -0.04em;
    line-height: 1;
  }
  .big-score span {
    font-size: 30px;
    font-weight: 700;
    color: #2563eb;
    letter-spacing: -0.02em;
  }
  .gain-stack {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 3px;
  }
  .gain-pill {
    display: inline-flex;
    align-items: center;
    gap: 5px;
    background: #ecfdf5;
    border: 1px solid #a7f3d0;
    padding: 5px 12px;
    border-radius: 12px;
    font-size: 13.5px;
    font-weight: 800;
    color: #059669;
  }
  .gain-sub {
    font-size: 11.5px;
    font-weight: 600;
    color: #64748b;
  }
  .shortlist-box {
    background: linear-gradient(135deg, #1e3a8a 0%, #1d4ed8 50%, #2563eb 100%);
    border-radius: 20px;
    padding: 14px 18px;
    color: #ffffff;
    box-shadow: 0 8px 24px rgba(29, 78, 216, 0.25);
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
  .shortlist-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .shortlist-title {
    font-size: 13px;
    font-weight: 700;
    display: flex;
    align-items: center;
    gap: 7px;
    letter-spacing: -0.01em;
  }
  .shortlist-tag {
    background: rgba(255, 255, 255, 0.22);
    border: 1px solid rgba(255, 255, 255, 0.4);
    padding: 3px 9px;
    border-radius: 12px;
    font-size: 10px;
    font-weight: 800;
    letter-spacing: 0.05em;
    text-transform: uppercase;
  }
  .company-tags {
    display: flex;
    align-items: center;
    gap: 7px;
    flex-wrap: wrap;
  }
  .company-tag {
    background: rgba(255, 255, 255, 0.16);
    border: 1px solid rgba(255, 255, 255, 0.28);
    padding: 4px 10px;
    border-radius: 10px;
    font-size: 11px;
    font-weight: 700;
    display: flex;
    align-items: center;
    gap: 5px;
  }
  .company-tag .dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #4ade80;
    box-shadow: 0 0 6px #4ade80;
  }
  .diagnostic-bars {
    display: flex;
    flex-direction: column;
    gap: 9px;
    background: #ffffff;
    border: 1px solid #e2e8f0;
    border-radius: 20px;
    padding: 13px 15px;
    box-shadow: 0 2px 8px rgba(15, 23, 42, 0.04);
  }
  .bar-row {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }
  .bar-info {
    display: flex;
    justify-content: space-between;
    font-size: 11px;
  }
  .bar-title {
    font-weight: 700;
    color: #1e293b;
  }
  .bar-val {
    font-weight: 700;
    color: #2563eb;
    font-family: 'JetBrains Mono', monospace;
  }
  .bar-track {
    width: 100%;
    height: 7px;
    background: #f1f5f9;
    border-radius: 4px;
    overflow: hidden;
  }
  .bar-fill {
    height: 100%;
    border-radius: 4px;
  }
  .bar-fill.blue {
    width: 98.9%;
    background: linear-gradient(90deg, #3b82f6, #1d4ed8);
  }
  .bar-fill.green {
    width: 96.4%;
    background: linear-gradient(90deg, #10b981, #059669);
  }
  .bar-fill.purple {
    width: 97.2%;
    background: linear-gradient(90deg, #8b5cf6, #6d28d9);
  }
  .card-footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 11px;
    font-weight: 600;
    color: #64748b;
    padding: 0 2px;
  }
  .verified-icon {
    color: #2563eb;
    font-size: 13px;
    font-weight: 800;
  }
</style>
</head>
<body>
<div class="card">
  <div class="top-row">
    <div class="badge-benchmark">
      <div class="live-dot"></div>
      Placement Benchmark
    </div>
    <div class="badge-air">
      <span class="star">★</span> AIR #42
    </div>
  </div>

  <div class="metric-section">
    <div class="big-score">99.4<span>%ile</span></div>
    <div class="gain-stack">
      <div class="gain-pill">▲ +24.8%</div>
      <div class="gain-sub">Top 0.6% Pan-India</div>
    </div>
  </div>

  <div class="shortlist-box">
    <div class="shortlist-header">
      <div class="shortlist-title">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
        Placement Shortlist Guarantee: 98.6%
      </div>
      <div class="shortlist-tag">Tier 1 Track</div>
    </div>
    <div class="company-tags">
      <div class="company-tag"><span class="dot"></span> Google SDE</div>
      <div class="company-tag"><span class="dot"></span> Amazon WOW</div>
      <div class="company-tag"><span class="dot"></span> TCS Digital 9 LPA</div>
      <div class="company-tag"><span class="dot"></span> Infosys SP</div>
    </div>
  </div>

  <div class="diagnostic-bars">
    <div class="bar-row">
      <div class="bar-info">
        <span class="bar-title">Quant &amp; Speed Math</span>
        <span class="bar-val">98.9% (34s/q)</span>
      </div>
      <div class="bar-track"><div class="bar-fill blue"></div></div>
    </div>
    <div class="bar-row">
      <div class="bar-info">
        <span class="bar-title">Technical Coding &amp; DSA</span>
        <span class="bar-val">96.4% (24/25 Tests)</span>
      </div>
      <div class="bar-track"><div class="bar-fill green"></div></div>
    </div>
    <div class="bar-row">
      <div class="bar-info">
        <span class="bar-title">Logical &amp; Verbal Reasoning</span>
        <span class="bar-val">97.2% (Top Tier)</span>
      </div>
      <div class="bar-track"><div class="bar-fill purple"></div></div>
    </div>
  </div>

  <div class="card-footer">
    <div><span class="verified-icon">✔</span> TCS NQT &amp; AMCAT Benchmark Aligned</div>
    <div style="font-weight: 700; color: #059669;">Verified Score</div>
  </div>
</div>
</body>
</html>
"""

# 2. Speed Card (452 x 76)
html_speed = """<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@500;700;800&family=JetBrains+Mono:wght@700;800&display=swap" rel="stylesheet">
<style>
  * { box-sizing: border-box; margin: 0; padding: 0; }
  html, body {
    width: 452px;
    height: 76px;
    background: transparent;
    overflow: hidden;
    font-family: 'Plus Jakarta Sans', -apple-system, sans-serif;
    -webkit-font-smoothing: antialiased;
    padding: 6px 10px;
    display: flex;
  }
  .capsule {
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.96);
    backdrop-filter: blur(20px);
    border-radius: 34px;
    border: 1.5px solid rgba(59, 130, 246, 0.45);
    box-shadow: 
      0 16px 32px -6px rgba(15, 23, 42, 0.16),
      0 0 20px rgba(37, 99, 235, 0.22),
      inset 0 1px 1px #ffffff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 6px 12px 6px 12px;
  }
  .left-side {
    display: flex;
    align-items: center;
    gap: 12px;
  }
  .icon-disc {
    width: 44px;
    height: 44px;
    border-radius: 50%;
    background: linear-gradient(135deg, #2563eb, #1d4ed8);
    box-shadow: 0 4px 14px rgba(37, 99, 235, 0.4);
    display: flex;
    align-items: center;
    justify-content: center;
    color: #ffffff;
    flex-shrink: 0;
  }
  .info-stack {
    display: flex;
    flex-direction: column;
    gap: 1px;
  }
  .badge-label {
    font-size: 10px;
    font-weight: 800;
    color: #2563eb;
    letter-spacing: 0.06em;
    text-transform: uppercase;
  }
  .stat-line {
    display: flex;
    align-items: baseline;
    gap: 8px;
  }
  .stat-val {
    font-size: 20px;
    font-weight: 800;
    color: #0f172a;
    letter-spacing: -0.02em;
    font-family: 'JetBrains Mono', monospace;
    line-height: 1;
  }
  .stat-sub {
    font-size: 12px;
    font-weight: 700;
    color: #059669;
  }
  .solve-btn {
    display: inline-flex;
    align-items: center;
    gap: 7px;
    background: #0f172a;
    color: #ffffff;
    padding: 9px 16px;
    border-radius: 20px;
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 0.01em;
    box-shadow: 0 4px 12px rgba(15, 23, 42, 0.25);
    flex-shrink: 0;
  }
  .pulse-dot {
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: #10b981;
    box-shadow: 0 0 8px #10b981;
  }
</style>
</head>
<body>
<div class="capsule">
  <div class="left-side">
    <div class="icon-disc">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
    </div>
    <div class="info-stack">
      <div class="badge-label">⚡ Live Speed Math Drill</div>
      <div class="stat-line">
        <span class="stat-val">1.2s</span>
        <span class="stat-sub">99.8% Accuracy</span>
      </div>
    </div>
  </div>
  <div class="solve-btn">
    <span class="pulse-dot"></span>
    Solve Drill ➔
  </div>
</div>
</body>
</html>
"""

# 3. Aptitude Streak Card (525 x 456)
html_aptitude = """<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=JetBrains+Mono:wght@500;700;800&display=swap" rel="stylesheet">
<style>
  * { box-sizing: border-box; margin: 0; padding: 0; }
  html, body {
    width: 525px;
    height: 456px;
    background: transparent;
    overflow: hidden;
    font-family: 'Plus Jakarta Sans', -apple-system, sans-serif;
    -webkit-font-smoothing: antialiased;
    padding: 16px 18px 20px 18px;
    display: flex;
  }
  .card {
    width: 100%;
    height: 100%;
    background: linear-gradient(155deg, #ffffff 0%, #fffefa 55%, #fff7eb 100%);
    border-radius: 36px;
    border: 1.5px solid rgba(254, 243, 199, 0.95);
    box-shadow: 
      0 26px 50px -12px rgba(15, 23, 42, 0.16),
      0 12px 26px -6px rgba(245, 158, 11, 0.14),
      inset 0 1px 2px #ffffff;
    padding: 24px 26px 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    overflow: hidden;
  }
  .card::before {
    content: '';
    position: absolute;
    top: -50px;
    right: -50px;
    width: 240px;
    height: 240px;
    background: radial-gradient(circle, rgba(245, 158, 11, 0.16) 0%, rgba(245, 158, 11, 0) 70%);
    border-radius: 50%;
    pointer-events: none;
  }
  .top-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .streak-badge {
    display: inline-flex;
    align-items: center;
    gap: 7px;
    background: #fffbeb;
    border: 1px solid #fde68a;
    padding: 6px 14px;
    border-radius: 20px;
    font-size: 12.5px;
    font-weight: 700;
    color: #b45309;
    letter-spacing: 0.02em;
  }
  .tier-badge {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    background: #0f172a;
    color: #ffffff;
    padding: 6px 14px;
    border-radius: 20px;
    font-size: 12px;
    font-weight: 700;
  }
  .metric-header {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    margin-top: 1px;
  }
  .big-metric {
    font-size: 52px;
    font-weight: 800;
    color: #0f172a;
    letter-spacing: -0.03em;
    line-height: 1;
    display: flex;
    align-items: center;
    gap: 8px;
  }
  .fire-icon {
    font-size: 40px;
  }
  .growth-pill {
    display: inline-flex;
    align-items: center;
    gap: 5px;
    background: #ecfdf5;
    border: 1px solid #a7f3d0;
    padding: 5px 12px;
    border-radius: 12px;
    font-size: 13px;
    font-weight: 800;
    color: #059669;
  }
  .chart-box {
    background: #ffffff;
    border: 1px solid #f1f5f9;
    border-radius: 20px;
    padding: 12px 16px 10px;
    box-shadow: 0 4px 12px rgba(15, 23, 42, 0.03);
    display: flex;
    flex-direction: column;
    gap: 6px;
  }
  .chart-title-row {
    display: flex;
    justify-content: space-between;
    font-size: 11px;
    font-weight: 700;
    color: #64748b;
  }
  .chart-bars {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    height: 74px;
    padding: 0 4px;
  }
  .bar-col {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
    height: 100%;
    justify-content: flex-end;
  }
  .bar-stem {
    width: 24px;
    border-radius: 12px;
    background: #e2e8f0;
  }
  .bar-stem.active {
    background: linear-gradient(180deg, #3b82f6 0%, #1d4ed8 100%);
    box-shadow: 0 4px 14px rgba(37, 99, 235, 0.35);
    position: relative;
  }
  .bar-stem.active::after {
    content: '';
    position: absolute;
    top: 4px;
    left: 50%;
    transform: translateX(-50%);
    width: 6px;
    height: 6px;
    background: #ffffff;
    border-radius: 50%;
  }
  .bar-day {
    font-size: 10.5px;
    font-weight: 600;
    color: #94a3b8;
  }
  .bar-day.active {
    color: #2563eb;
    font-weight: 800;
  }
  .stat-pair {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
  }
  .mini-stat-card {
    background: #ffffff;
    border: 1px solid #e2e8f0;
    border-radius: 16px;
    padding: 9px 12px;
    display: flex;
    flex-direction: column;
    gap: 2px;
  }
  .mini-stat-val {
    font-size: 19px;
    font-weight: 800;
    color: #0f172a;
    font-family: 'JetBrains Mono', monospace;
    line-height: 1;
  }
  .mini-stat-label {
    font-size: 10.5px;
    font-weight: 600;
    color: #64748b;
  }
  .recruiter-strip {
    background: linear-gradient(90deg, #f0fdf4 0%, #ecfdf5 100%);
    border: 1px solid #bbf7d0;
    border-radius: 16px;
    padding: 8px 12px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 11.5px;
    font-weight: 700;
    color: #166534;
  }
  .recruiter-pills {
    display: flex;
    gap: 6px;
  }
  .recruiter-tag {
    background: #ffffff;
    border: 1px solid #86efac;
    padding: 2px 8px;
    border-radius: 8px;
    font-size: 10.5px;
    font-weight: 700;
    color: #15803d;
  }
</style>
</head>
<body>
<div class="card">
  <div class="top-row">
    <div class="streak-badge">
      🔥 Aptitude &amp; Coding Streak
    </div>
    <div class="tier-badge">
      👑 Diamond Tier
    </div>
  </div>

  <div class="metric-header">
    <div class="big-metric">48 Days <span class="fire-icon">🔥</span></div>
    <div class="growth-pill">▲ Top 0.4% Velocity</div>
  </div>

  <div class="chart-box">
    <div class="chart-title-row">
      <span>Placement Practice Velocity</span>
      <span style="color: #2563eb;">+38 Today</span>
    </div>
    <div class="chart-bars">
      <div class="bar-col">
        <div class="bar-stem" style="height: 36px;"></div>
        <span class="bar-day">M</span>
      </div>
      <div class="bar-col">
        <div class="bar-stem" style="height: 44px;"></div>
        <span class="bar-day">T</span>
      </div>
      <div class="bar-col">
        <div class="bar-stem" style="height: 40px;"></div>
        <span class="bar-day">W</span>
      </div>
      <div class="bar-col">
        <div class="bar-stem" style="height: 56px;"></div>
        <span class="bar-day">T</span>
      </div>
      <div class="bar-col">
        <div class="bar-stem" style="height: 48px;"></div>
        <span class="bar-day">F</span>
      </div>
      <div class="bar-col">
        <div class="bar-stem" style="height: 64px;"></div>
        <span class="bar-day">S</span>
      </div>
      <div class="bar-col">
        <div class="bar-stem" style="height: 54px;"></div>
        <span class="bar-day">S</span>
      </div>
      <div class="bar-col">
        <div class="bar-stem active" style="height: 72px;"></div>
        <span class="bar-day active">Today</span>
      </div>
    </div>
  </div>

  <div class="stat-pair">
    <div class="mini-stat-card">
      <div class="mini-stat-val">1,280+</div>
      <div class="mini-stat-label">Questions Solved (Quant &amp; DSA)</div>
    </div>
    <div class="mini-stat-card">
      <div class="mini-stat-val">9.6 / 10</div>
      <div class="mini-stat-label">Technical Mock Rating</div>
    </div>
  </div>

  <div class="recruiter-strip">
    <span>✔ Dream CTC Shortlist</span>
    <div class="recruiter-pills">
      <span class="recruiter-tag">Google SDE</span>
      <span class="recruiter-tag">Microsoft</span>
      <span class="recruiter-tag">Goldman</span>
    </div>
  </div>
</div>
</body>
</html>
"""

# 4. Streak Ribbon Card (618 x 111)
html_streak = """<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@500;700;800&family=JetBrains+Mono:wght@700;800&display=swap" rel="stylesheet">
<style>
  * { box-sizing: border-box; margin: 0; padding: 0; }
  html, body {
    width: 618px;
    height: 111px;
    background: transparent;
    overflow: hidden;
    font-family: 'Plus Jakarta Sans', -apple-system, sans-serif;
    -webkit-font-smoothing: antialiased;
    padding: 8px 12px;
    display: flex;
  }
  .ribbon {
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.96);
    backdrop-filter: blur(20px);
    border-radius: 30px;
    border: 1.5px solid rgba(226, 232, 240, 0.95);
    box-shadow: 
      0 18px 36px -8px rgba(15, 23, 42, 0.15),
      0 0 20px rgba(16, 185, 129, 0.12),
      inset 0 1px 1px #ffffff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 18px;
  }
  .left-group {
    display: flex;
    align-items: center;
    gap: 14px;
  }
  .trophy-disc {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background: linear-gradient(135deg, #fef3c7, #fde68a);
    border: 1.5px solid #f59e0b;
    box-shadow: 0 4px 14px rgba(245, 158, 11, 0.25);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    flex-shrink: 0;
  }
  .text-stack {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }
  .title {
    font-size: 15.5px;
    font-weight: 800;
    color: #0f172a;
    letter-spacing: -0.01em;
  }
  .sub {
    font-size: 12px;
    font-weight: 600;
    color: #64748b;
    display: flex;
    align-items: center;
    gap: 7px;
  }
  .tag {
    background: #f1f5f9;
    padding: 2px 7px;
    border-radius: 6px;
    font-size: 10.5px;
    color: #334155;
    font-weight: 700;
  }
  .right-metric {
    display: flex;
    align-items: center;
    gap: 10px;
    background: #ecfdf5;
    border: 1.5px solid #a7f3d0;
    padding: 8px 16px;
    border-radius: 18px;
    color: #059669;
    flex-shrink: 0;
  }
  .metric-stack {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  .metric-num {
    font-size: 17px;
    font-weight: 800;
    font-family: 'JetBrains Mono', monospace;
    line-height: 1.1;
  }
  .metric-label {
    font-size: 9.5px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.04em;
    line-height: 1;
    color: #047857;
  }
</style>
</head>
<body>
<div class="ribbon">
  <div class="left-group">
    <div class="trophy-disc">🏆</div>
    <div class="text-stack">
      <div class="title">Campus Placement Offers Verified</div>
      <div class="sub">
        <span class="tag">Amazon</span>
        <span class="tag">Google</span>
        <span class="tag">Deloitte</span>
        <span class="tag">TCS Digital</span>
        • 24.5 LPA CTC
      </div>
    </div>
  </div>
  <div class="right-metric">
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M23 6l-9.5 9.5-5-5L1 18"/><path d="M17 6h6v6"/></svg>
    <div class="metric-stack">
      <div class="metric-num">4 Offers</div>
      <div class="metric-label">100% Conversion</div>
    </div>
  </div>
</div>
</body>
</html>
"""

items = [
    ("c_percentile.html", html_percentile, 568, 538, "hero-percentile-card.png"),
    ("c_speed.html", html_speed, 452, 76, "hero-speed-card.png"),
    ("c_aptitude.html", html_aptitude, 525, 456, "hero-aptitude-card.png"),
    ("c_streak.html", html_streak, 618, 111, "hero-streak-card.png"),
]

for filename, content, w, h, out_name in items:
    fpath = os.path.join(scratch_dir, filename)
    with open(fpath, "w", encoding="utf-8") as f:
        f.write(content)
    
    url = f"file:///{fpath.replace(os.sep, '/')}"
    out_png = os.path.join(out_dir, out_name)
    
    cmd = [
        chrome_path,
        "--headless=new",
        "--disable-gpu",
        "--no-sandbox",
        "--default-background-color=00000000",
        f"--window-size={w},{h}",
        "--force-device-scale-factor=2",
        "--hide-scrollbars",
        f"--screenshot={out_png}",
        url
    ]
    subprocess.run(cmd, capture_output=True)
    print(f"Rendered {out_name} with window {w}x{h}")

print("All hero cards re-rendered perfectly!")
