import { motion } from "framer-motion";
import { User, Mail, Phone, MessageSquare, Send } from "lucide-react";
import React, { useState } from "react";
import MosqueSilhouette from "../../assets/mosqueSilhouette.svg";

const Contact = () => {
	const [isLoading, setIsLoading] = useState(false);

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setIsLoading(true);
		// Add form submission logic here
		await new Promise((resolve) => setTimeout(resolve, 1000));
		setIsLoading(false);
	};

	return (
		<section className="relative py-24 bg-[#121510] text-white overflow-hidden">
			{/* Background Gradient */}
			{/* <div className="absolute inset-0 bg-gradient-to-b from-[#1a1f17] to-[#191a13]" /> */}

			<motion.h1
				className="text-4xl md:text-7xl font-bold text-[#c3e5a5] md:text-center md:mb-16 w-full px-6 mb-8"
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.8 }}
			>
				Reach out to us
			</motion.h1>
			{/* Content Container */}
			<motion.div
				className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10"
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.8 }}
			>
				{/* Left Column - Quote */}
				<motion.div
					className="space-y-4 md:space-y-8"
					initial={{ opacity: 0, x: -20 }}
					whileInView={{ opacity: 1, x: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8 }}
				>
					<img
						className="w-[100%] h-56 object-cover object-top md:object-center rounded-xl md:rounded-2xl shadow-xl"
						src={MosqueSilhouette}
						alt="Minarets Illustration"
					/>
					<div className="space-y-4 md:space-y-6">
						<blockquote className="text-2xl md:text-3xl font-serif italic text-[#c3e5a5]">
							"And say, 'My Lord, increase me in knowledge.'"
						</blockquote>
						<p className="text-lg text-[#c3e5a5]">
							— Surah Taha, Verse 114
						</p>
					</div>
					<p className="text-gray-400 text-lg mt-1">
						Whether you seek knowledge, guidance, or have questions
						about Islam, Mufti Shamail is here to help. Reach out
						through this form, and In sha Allah, you will receive a
						response soon.
					</p>
				</motion.div>

				{/* Right Column - Form */}
				<motion.div
					initial={{ opacity: 0, x: 20 }}
					whileInView={{ opacity: 1, x: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8 }}
				>
					<form onSubmit={handleSubmit} className="space-y-6">
						<div className="relative">
							<input
								type="text"
								required
								placeholder="Your Name"
								className="w-full bg-[#191b14] border border-gray-700 rounded-lg px-5 py-4 pl-12 outline-none focus:border-[#c3e5a5] transition-colors text-white placeholder:text-gray-400"
							/>
							<User
								className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
								size={18}
							/>
						</div>

						<div className="relative">
							<input
								type="email"
								required
								placeholder="Email Address"
								className="w-full bg-[#191b14] border border-gray-700 rounded-lg px-5 py-4 pl-12 outline-none focus:border-[#c3e5a5] transition-colors text-white placeholder:text-gray-400"
							/>
							<Mail
								className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
								size={18}
							/>
						</div>

						<div className="relative">
							<input
								type="tel"
								placeholder="Phone Number (Optional)"
								className="w-full bg-[#191b14] border border-gray-700 rounded-lg px-5 py-4 pl-12 outline-none focus:border-[#c3e5a5] transition-colors text-white placeholder:text-gray-400"
							/>
							<Phone
								className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
								size={18}
							/>
						</div>

						<div className="relative">
							<textarea
								required
								rows={4}
								placeholder="Your Message"
								className="w-full bg-[#191b14] border border-gray-700 rounded-lg px-5 py-4 pl-12 outline-none focus:border-[#c3e5a5] transition-colors text-white placeholder:text-gray-400 min-h-[12rem] max-h-[15rem]"
							/>
							<MessageSquare
								className="absolute left-4 top-6 text-gray-400"
								size={18}
							/>
						</div>
						<motion.button
							type="submit"
							className="group flex items-center justify-center gap-2 w-full px-8 py-4 bg-[#c3e5a5] text-gray-600 rounded-lg font-medium text-lg transition-all duration-300 hover:bg-[#a1c780] disabled:opacity-50 disabled:cursor-not-allowed"
							whileHover={{ scale: 1.02 }}
							whileTap={{ scale: 0.98 }}
							disabled={isLoading}
						>
							{isLoading ? (
								<Send className="w-5 h-5 animate-spin" />
							) : (
								<>
									Send Message
									<Send className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
								</>
							)}
						</motion.button>
					</form>
				</motion.div>
			</motion.div>
		</section>
	);
};

export default Contact;
