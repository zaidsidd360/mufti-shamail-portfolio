import { motion } from "framer-motion";
import React from "react";
import MuftiPortrait from "../../assets/muftiportrait.jpg";

const About: React.FC = () => {
	return (
		<section className="bg-[#121510] text-white py-12 md:py-20 grid place-items-center relative overflow-hidden">
			<h1 className="text-4xl md:text-7xl font-bold text-[#c3e5a5] md:text-center md:mb-16 w-full px-5 mb-8">
				About Mufti Shamail
			</h1>
			<motion.div
				className="max-w-7xl mx-auto px-5 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.8 }}
			>
				{/* Scholar Image */}
				<div className="order-2 lg:order-1 relative">
					<div className="relative aspect-square w-full max-w-[650px] mx-auto">
						{/* Glow Effect */}
						{/* <img
							src={MuftiPortrait}
							className="absolute inset-0 rounded-2xl h-full blur-2xl scale-95 md:scale-95 -z-21"
						/> */}

						{/* Decorative Elements */}
						{/* <div className="absolute inset-0 bg-[#191b14] rounded-2xl transform rotate-3 -z-20" />
						<div className="absolute inset-0 bg-[#191b14] rounded-2xl -rotate-3 -z-20" /> */}

						{/* Main Image */}
						<div className="relative aspect-square rounded-2xl overflow-hidden shadow-xl">
							<img
								src={MuftiPortrait}
								alt={`Mufti Shamail`}
								className="w-full h-full object-cover"
							/>
						</div>
					</div>
				</div>

				{/* Content */}
				<div className="order-1 lg:order-2 space-y-8">
					<motion.div
						initial={{ opacity: 0, x: -20 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.8 }}
						className="space-y-6"
					>
						<div className="text-md md:text-lg text-gray-400 max-w-2xl space-y-5">
							<p className="">
								<span className="text-[#c3e5a5]">
									Mufti Shamail Ahmad Abdullah Nadwi
								</span>{" "}
								is a distinguished graduate of Darul Uloom
								Nadwatul Ulama, a renowned Islamic university,
								where he specialized in Islamic studies. After
								graduation, he pursued post-graduate studies in
								Tafseer and Uloomul Quran, further deepening his
								understanding of Quranic exegesis and the
								sciences of the Quran. His commitment to Islamic
								scholarship led him to specialize in Tadreeb
								Alal Ifta (Mufti) at the same institution.
							</p>
							<p className="">
								He is the{" "}
								<span className="text-[#c3e5a5]">
									founder of Markaz Al-Wahyain
								</span>
								, an online Islamic institution established in
								2021, offering quality education to students
								globally. He also founded Wahyain Foundation, a
								charitable Islamic trust established in 2024,
								providing educational and welfare services.
							</p>
							<p className="">
								Beyond his institution, Mufti Shamail Nadwi has
								made a significant impact in the digital realm,
								emerging as a{" "}
								<span className="text-[#c3e5a5]">
									prominent scholar on social media
								</span>
								. His efforts focus on countering Western
								ideologies and presenting Islam as the true way
								of life. He strives to foster unity within the
								Ummah and works to bring cohesion among Muslims
								worldwide.
							</p>
							<p className="">
								Additionally, Mufti Shamail serves as the{" "}
								<span className="text-[#c3e5a5]">
									Khateeb and Mufassir-e-Quran
								</span>{" "}
								at Kobi Bagan Masjid, Kolkata, where he combines
								his academic expertise with spiritual leadership
								to benefit the Ummah.
							</p>
						</div>
					</motion.div>
				</div>
			</motion.div>
		</section>
	);
};

export default About;
