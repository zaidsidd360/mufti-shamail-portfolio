import { ArrowDown } from "lucide-react";
import { motion } from "framer-motion";
import MuftiHeroVideo from "../../assets/muftiHeroVideo.mp4";

const HeroSection = () => {
	return (
		<section className="relative h-screen md:h-screen overflow-hidden">
			{/* Video Background */}
			<video
				className="absolute top-0 left-0 w-full h-full object-cover object-top pointer-events-none"
				autoPlay
				loop
				muted
				playsInline
			>
				<source src={MuftiHeroVideo} type="video/mp4" />
				Your browser does not support the video tag.
			</video>

			{/* Gradient Overlay */}
			<div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-[#c3e5a5]/20" />

			{/* Content Container */}
			<div className="relative z-10 flex flex-col items-center justify-center h-full max-w-[90%] mx-auto">
				{/* Main Title */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					className="text-center"
				>
					<h1 className="text-5xl md:text-7xl lg:text-8xl xl:text-[10rem] font-bold text-[#c3e5a5] tracking-tight leading-none">
						Mufti Shamail Nadwi
						<br />
					</h1>
				</motion.div>

				{/* Quranic Quote */}
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.8, delay: 0.4 }}
					className="mt-8 max-w-3xl text-center"
				>
					<p className="text-lg md:text-xl lg:text-2xl text-[#c3e5a5] font-serif italic">
						"And whoever puts their trust in Allah, then He ˹alone˺
						is sufficient for them."
					</p>
					<p className="text-sm md:text-base text-[#c3e5a5] mt-2 font-serif">
						— Surah At-Talaq, Verse 2
					</p>
				</motion.div>
			</div>

			{/* Scroll Indicator */}
			<motion.div
				className="absolute bottom-10 left-1/2 transform -translate-x-1/2 p-5"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 1 }}
			>
				<motion.div
					className="flex flex-col items-center"
					initial={{ y: 0 }}
					animate={{ y: [0, 10, 0] }}
					transition={{ duration: 1.5, repeat: Infinity }}
				>
					<ArrowDown className="w-8 h-8 text-black border border-black rounded-full p-1.5 backdrop-blur-sm bg-white/10" />
				</motion.div>
			</motion.div>
		</section>
	);
};

export default HeroSection;
