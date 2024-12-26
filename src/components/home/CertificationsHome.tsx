import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

// const certificates = [
// 	{
// 		title: "Hadith",
// 		count: "15+",
// 		description:
// 			"Ijazahs in various books of Hadith including Sahih Bukhari and Muslim",
// 		icon: BookOpen,
// 	},
// 	{
// 		title: "Fiqh",
// 		count: "10+",
// 		description:
// 			"Certifications in Islamic jurisprudence from renowned scholars",
// 		icon: Scroll,
// 	},
// 	{
// 		title: "Islamic Studies",
// 		count: "20+",
// 		description:
// 			"Comprehensive certifications in various Islamic disciplines",
// 		icon: GraduationCap,
// 	},
// 	{
// 		title: "Special Ijazahs",
// 		count: "5+",
// 		description: "Unique authorizations in specialized Islamic texts",
// 		icon: Award,
// 	},
// ];

const CertificationsHome = () => {
	return (
		<section className="relative py-16 md:py-24 bg-[#121510]">
			{/* Background Gradient */}
			<div className="absolute inset-0 bg-gradient-to-b from-[#1a1f17] to-[#191a13]" />

			<div className="relative z-10 max-w-7xl mx-auto px-6">
				<motion.h1
					className="text-4xl md:text-7xl font-bold text-[#c3e5a5] md:text-center md:mb-16 w-full mb-8 z-20"
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8 }}
				>
					Certifications and Ijazahs
				</motion.h1>

				<motion.div
					initial={{ opacity: 0, x: -20 }}
					whileInView={{ opacity: 1, x: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8 }}
				>
					<p className="text-md md:text-lg text-gray-400 md:text-center ">
						Explore some of the certifications and achievements of
						Mufti Shamail Nadwi. He completed Alimiyat (Graduation)
						in Islamic Studies in 2017, Fazeelat (Post-Graduation)
						in Tafseer Al-Quran in 2019, and Tadreeb Alal Ifta
						(Mufti) in 2020 from the renowned Islamic university,
						Darul Uloom Nadwatul Ulama, India.
					</p>
				</motion.div>
				{/* <motion.div
					className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8 }}
				>
					{certificates.map((cert, index) => (
						<motion.div
							key={cert.title}
							className="bg-[#191b14] p-8 rounded-lg border border-gray-800 hover:border-[#c3e5a5] transition-colors"
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.8, delay: index * 0.1 }}
						>
							<cert.icon className="w-12 h-12 text-[#c3e5a5] mb-4" />
							<h3 className="text-[#c3e5a5] text-2xl font-bold mb-2">
								{cert.count}
							</h3>
							<h4 className="text-white text-xl mb-4">
								{cert.title}
							</h4>
							<p className="text-gray-400">{cert.description}</p>
						</motion.div>
					))}
				</motion.div> */}

				<motion.div
					className="mt-16 text-center"
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
					transition={{ delay: 0.4 }}
				>
					<Link to="/certifications">
						<motion.button
							className="group flex items-center gap-2 mx-auto px-8 py-4 bg-[#c3e5a5] text-gray-800 rounded-lg font-medium text-lg transition-all duration-300 hover:bg-[#a1c780]"
							whileHover={{ scale: 1.02 }}
							whileTap={{ scale: 0.98 }}
						>
							View All Certificates
							<ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
						</motion.button>
					</Link>
				</motion.div>
			</div>
		</section>
	);
};

export default CertificationsHome;
