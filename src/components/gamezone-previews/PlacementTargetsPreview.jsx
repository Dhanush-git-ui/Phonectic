import React, { useState, useEffect } from 'react'

export default function PlacementTargetsPreview({ className = '' }) {
	const [animated, setAnimated] = useState(false)

	useEffect(() => {
		const timer = setTimeout(() => setAnimated(true), 120)
		return () => clearTimeout(timer)
	}, [])

	const targets = [
		{
			id: 1,
			title: 'Coding Drills',
			count: '184 of 200',
			pct: 92,
			barColor: 'linear-gradient(90deg, #f59e0b 0%, #ea580c 100%)',
			icon: '💻',
			iconBg: '#fff7ed',
			iconColor: '#ea580c',
		},
		{
			id: 2,
			title: 'Speed Aptitude',
			count: '420 of 500',
			pct: 84,
			barColor: 'linear-gradient(90deg, #10b981 0%, #059669 100%)',
			icon: '⚡',
			iconBg: '#ecfdf5',
			iconColor: '#059669',
		},
		{
			id: 3,
			title: 'AI Mock HR',
			count: '9 of 10',
			pct: 90,
			barColor: 'linear-gradient(90deg, #3b82f6 0%, #2563eb 100%)',
			icon: '🗣️',
			iconBg: '#eff6ff',
			iconColor: '#2563eb',
		},
		{
			id: 4,
			title: 'Target Benchmarks',
			count: '14 of 15',
			pct: 93,
			barColor: 'linear-gradient(90deg, #8b5cf6 0%, #7c3aed 100%)',
			icon: '🏢',
			iconBg: '#f5f3ff',
			iconColor: '#7c3aed',
		},
	]

	return (
		<div
			className={`relative w-full h-full min-h-[460px] lg:min-h-[520px] rounded-[40px] md:rounded-[48px] flex flex-col items-center justify-center p-6 md:p-8 select-none overflow-hidden ${className}`}
			style={{
				backgroundColor: '#dbeafe',
				fontFamily: "'Plus Jakarta Sans', sans-serif",
			}}
		>
			{/* Ambient glows */}
			<div
				className="absolute -top-16 -right-16 w-72 h-72 rounded-full pointer-events-none opacity-50"
				style={{
					background: 'radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, rgba(219, 234, 254, 0) 70%)',
				}}
			/>
			<div
				className="absolute -bottom-16 -left-16 w-72 h-72 rounded-full pointer-events-none opacity-50"
				style={{
					background: 'radial-gradient(circle, rgba(96, 165, 250, 0.35) 0%, rgba(219, 234, 254, 0) 70%)',
				}}
			/>

			{/* Floating 3D Target Notification Pill at Top */}
			<div className="relative z-10 mb-6 transition-transform duration-300 hover:scale-105 cursor-pointer">
				<div
					className="w-14 h-14 rounded-2xl bg-[#0f172a] flex items-center justify-center text-white shadow-[0_12px_28px_rgba(15,23,42,0.35)] border border-blue-500/20 relative"
				>
					{/* Glowing indicator dot */}
					<span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-blue-400 border-2 border-[#dbeafe] animate-ping" />
					<span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-blue-500 border-2 border-[#dbeafe]" />
					<span className="text-2xl animate-bounce">🔔</span>
				</div>
			</div>

			{/* 2x2 Grid of Clean White Target Cards */}
			<div className="relative z-10 w-full max-w-[420px] grid grid-cols-2 gap-3.5">
				{targets.map((item) => (
					<div
						key={item.id}
						className="bg-white rounded-3xl p-4 md:p-5 flex flex-col justify-between shadow-[0_10px_28px_rgba(30,20,80,0.07)] border border-white/80 transition-all duration-300 hover:shadow-[0_16px_36px_rgba(30,20,80,0.12)] hover:-translate-y-1 cursor-pointer"
					>
						{/* Top: Icon & Title */}
						<div className="flex items-center gap-2.5 mb-3">
							<div
								className="w-9 h-9 rounded-xl flex items-center justify-center text-sm shadow-sm"
								style={{ backgroundColor: item.iconBg }}
							>
								{item.icon}
							</div>
							<span className="text-xs font-bold text-slate-800 tracking-tight leading-tight">
								{item.title}
							</span>
						</div>

						{/* Middle: Progress Number */}
						<div className="mb-2">
							<span className="text-sm md:text-base font-extrabold text-slate-900 block leading-tight">
								{item.count}
							</span>
							<span className="text-[10px] font-semibold text-slate-400">
								{item.pct}% Completed
							</span>
						</div>

						{/* Bottom: Progress Bar */}
						<div className="w-full h-2 rounded-full bg-slate-100 overflow-hidden">
							<div
								className="h-full rounded-full transition-all duration-1000 ease-out"
								style={{
									width: animated ? `${item.pct}%` : '0%',
									background: item.barColor,
								}}
							/>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}
