'use client';
import React from 'react';
import { cn, asset } from '@/lib/utils';
import { ZoomParallax } from "@/components/ui/zoom-parallax";

export default function PortfolioPage() {
	// Let's use some cool tech-themed Unsplash images for the portfolio
	const images = [
		{
			src: asset('/assets/portfolio_1.png'),
			alt: 'Portfolio Project 1',
		},
		{
			src: asset('/assets/portfolio_2.png'),
			alt: 'Portfolio Project 2',
		},
		{
			src: asset('/assets/portfolio_3.png'),
			alt: 'Portfolio Project 3',
		},
		{
			src: asset('/assets/portfolio_4.png'),
			alt: 'Portfolio Project 4',
		},
		{
			src: asset('/assets/portfolio_5.png'),
			alt: 'Portfolio Project 5',
		},
		{
			src: asset('/assets/portfolio_6.png'),
			alt: 'Portfolio Project 6',
		},
		{
			src: asset('/assets/portfolio_7.png'),
			alt: 'Portfolio Project 7',
		},
	];

	return (
		<main className="min-h-screen w-full relative z-10">
			{/* Intro Section */}
			<div className="relative flex h-[100vh] items-center justify-center flex-col">
				{/* Radial spotlight */}
				<div
					aria-hidden="true"
					className={cn(
						'pointer-events-none absolute -top-1/2 left-1/2 h-[120vmin] w-[120vmin] -translate-x-1/2 rounded-full',
						'bg-[radial-gradient(ellipse_at_center,rgba(0,229,255,0.1),transparent_50%)]',
						'blur-[30px]',
					)}
				/>
				<h1 className="magic-text font-heading text-center text-5xl md:text-7xl lg:text-8xl mb-6">
					Our Best Work
				</h1>
				<p className="text-xl text-[#00e5ff] font-bold uppercase tracking-widest text-center animate-pulse">
					Scroll Down To Zoom Parallax
				</p>
			</div>
			
			{/* Zoom Parallax Effect */}
			<ZoomParallax images={images} />
			
			{/* 
				Spacer 
				The CinematicFooter is mounted in layout.tsx.
				By ending the main content here, the footer will be seamlessly revealed 
				as the user scrolls past the parallax component.
			*/}
			<div className="h-[20vh]"/>
		</main>
	);
}
