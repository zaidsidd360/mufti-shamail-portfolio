import { motion } from "framer-motion";
import InstagramEmbed from "../InstagramEmbed";

const LatestUpdates = () => {
	return (
		<section className="relative py-24 bg-[#121510]">
			{/* Background Gradient */}
			<div className="absolute inset-0 bg-gradient-to-b from-[#191b14] to-[#121510]" />

			{/* Content Container */}
			<div className="relative z-10 max-w-7xl mx-auto ">
				<motion.h1
					className="text-4xl md:text-7xl font-bold text-[#c3e5a5] md:text-center md:mb-16 w-full px-6 mb-8 z-20"
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8 }}
				>
					Latest Updates
				</motion.h1>
				{/* <motion.h1
					className="text-4xl md:text-7xl font-bold text-[#c3e5a5] text-center mb-16"
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8 }}
				>
					Latest Updates
				</motion.h1> */}

				{/* Instagram Grid */}
				<motion.div
					className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start"
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8, delay: 0.2 }}
				>
					{[1, 2, 3].map((index) => (
						<motion.div
							key={index}
							className="w-full flex justify-center"
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.8, delay: 0.1 * index }}
						>
							<InstagramEmbed />
						</motion.div>
					))}
				</motion.div>

				{/* Follow Button */}
				<motion.div
					className="mt-12 text-center"
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
					transition={{ delay: 0.6 }}
				>
					<a
						href="https://www.instagram.com/muftishamail"
						target="_blank"
						rel="noopener noreferrer"
						className="inline-block px-8 py-3 bg-[#c3e5a5] text-[#121510] rounded-lg font-semibold 
                     hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105"
					>
						Follow on Instagram
					</a>
				</motion.div>
			</div>
		</section>
	);
};

export default LatestUpdates;
