import React from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

interface LatestBookProps {
	bookCover: string;
	title: string;
	description: string;
}

const LatestBook: React.FC<LatestBookProps> = ({
	bookCover,
	title,
	description,
}) => {
	return (
		<section className="relative py-24 h-full grid place-items-center bg-gray-900">
			<h1 className="text-4xl md:text-7xl font-bold text-[#c3e5a5] md:text-center md:mb-16 w-full px-6 mb-8 z-20">
				Upcoming Books
			</h1>
			{/* Background Gradient */}
			<div className="absolute inset-0 bg-gradient-to-b from-[#1a1f17] to-[#191a13]" />

			{/* Decorative SVG Shapes */}
			<svg
				className="absolute bottom-0 left-0 w-full pointer-events-none"
				viewBox="0 0 1440 320"
			>
				<path
					fill="#121510"
					d="M0,128L30,133.3C60,139,120,149,180,160C240,171,300,181,360,186.7C420,192,480,192,540,186.7C600,181,660,171,720,160C780,149,840,139,900,133.3C960,128,1020,128,1080,144C1140,160,1200,192,1260,202.7C1320,213,1380,171,1410,149.3L1440,128L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320H0Z"
				/>
			</svg>

			<motion.div
				className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-16 items-center relative z-10"
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.8 }}
			>
				{/* Book Image */}
				<motion.div
					className="order-2 md:order-1"
					whileHover={{ scale: 1.02 }}
					transition={{ duration: 0.3 }}
				>
					<div className="relative aspect-square w-full max-w-[500px] mx-auto">
						{/* Decorative Elements */}
						<div className="absolute inset-0 bg-[#191b14] rounded-2xl transform rotate-3" />
						<div className="absolute inset-0 bg-[#191b14] rounded-2xl -rotate-3" />

						{/* Main Image Container */}
						<div className="relative aspect-square rounded-2xl overflow-hidden shadow-xl">
							<img
								src={bookCover}
								alt={`${title} - Book Cover`}
								className="w-full h-full object-cover"
							/>
						</div>
					</div>
				</motion.div>

				{/* Content */}
				<div className="order-1 lg:order-2 space-y-8">
					<motion.div
						initial={{ opacity: 0, x: -20 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.8 }}
						className="space-y-6"
					>
						<h2 className="text-4xl md:text-5xl xl:text-6xl font-bold text-white leading-tight">
							{title}
						</h2>
						<p className="text-lg md:text-xl text-gray-400 max-w-xl">
							{description}
						</p>
					</motion.div>

					<motion.button
						className="group flex items-center gap-2 px-8 py-4 bg-[#c3e5a5] 
              text-gray-600 rounded-full font-medium text-lg 
              transition-all duration-300 hover:shadow-lg
              hover:bg-[#a1c780] transform hover:-translate-y-0.5"
						whileHover={{ scale: 1.02 }}
						whileTap={{ scale: 0.98 }}
					>
						Pre-order Now
						<ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
					</motion.button>
				</div>
			</motion.div>

			{/* Testimonials Section */}
			{/* <section className="relative mt-20 py-10 border border-white/50 rounded-xl bg-[#191b14]">
				<div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-12">
					<h3 className="text-3xl md:text-4xl font-bold text-white text-center">
						Endorsed by Scholars
					</h3>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						{[1, 2, 3].map((testimonial, index) => (
							<motion.div
								key={index}
								className="p-6 bg-gray-700 rounded-xl shadow-lg space-y-4"
								whileHover={{ scale: 1.02 }}
								transition={{ duration: 0.3 }}
							>
								<img
									src={`https://via.placeholder.com/150`}
									alt={`Scholar ${index + 1}`}
									className="w-16 h-16 rounded-full mx-auto border-2 border-gray-500"
								/>
								<h4 className="text-lg font-medium text-white text-center">
									Scholar {index + 1}
								</h4>
								<p className="text-gray-300 text-center text-sm">
									"This book is a groundbreaking work that
									every individual must read."
								</p>
							</motion.div>
						))}
					</div>
				</div>
			</section> */}
		</section>
	);
};

export default LatestBook;
