import React from "react";
import { Twitter, Facebook, Instagram } from "lucide-react";

const Home2: React.FC = () => {
	return (
		<div className="font-sans text-gray-800 bg-gray-100">
			{/* Hero Section */}
			<header className="bg-[#303633] text-white py-20 px-4 text-center">
				<div className="max-w-4xl mx-auto">
					<h1 className="text-5xl font-bold mb-6">Mufti Shamail</h1>
					<p className="text-lg mb-6">
						An Islamic scholar dedicated to teaching, writing, and
						spreading wisdom.
					</p>
					<img
						src="https://via.placeholder.com/150"
						alt="Mufti Shamail"
						className="rounded-full mx-auto w-40 h-40 border-4 border-[#8BE8CB]"
					/>
				</div>
			</header>

			{/* Book Advert Section */}
			<section className="bg-[#8BE8CB] text-[#303633] py-16 px-4">
				<div className="max-w-5xl mx-auto text-center">
					<h2 className="text-4xl font-semibold mb-6">
						Latest Book: "The Path of Enlightenment"
					</h2>
					<p className="text-lg mb-8">
						Discover profound insights and practical wisdom in Mufti
						Shamail's latest work.
					</p>
					<button className="bg-[#FED766] text-[#303633] font-bold py-3 px-8 rounded hover:bg-[#CA3C25] hover:text-white transition">
						Buy Now
					</button>
				</div>
				<img
					src="https://via.placeholder.com/500"
					alt="Book Cover"
					className="mt-8 mx-auto w-full max-w-md rounded-lg shadow-lg"
				/>
			</section>

			{/* Courses and Certifications Section */}
			<section className="py-16 px-4">
				<div className="max-w-5xl mx-auto text-center">
					<h2 className="text-3xl font-semibold mb-6">
						Courses and Certifications
					</h2>
					<p className="text-lg mb-8">
						Mufti Shamail's qualifications and certifications
						highlight his dedication to Islamic scholarship.
					</p>
					<ul className="grid grid-cols-1 md:grid-cols-3 gap-8">
						<li className="p-6 bg-white shadow rounded">
							Certified Islamic Jurist
						</li>
						<li className="p-6 bg-white shadow rounded">
							Advanced Tafsir Studies
						</li>
						<li className="p-6 bg-white shadow rounded">
							PhD in Hadith Sciences
						</li>
					</ul>
				</div>
			</section>

			{/* Social Media Section */}
			<section className="bg-[#91A6FF] py-16 px-4 text-white">
				<div className="max-w-5xl mx-auto">
					<h2 className="text-3xl font-semibold text-center mb-8">
						Follow Mufti Shamail
					</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						<div className="bg-white text-[#303633] p-6 rounded shadow">
							<h3 className="font-bold mb-2">Recent Tweet</h3>
							<p>
								"Knowledge is a light that guides the soul. Seek
								it with sincerity."
							</p>
						</div>
						<div className="bg-white text-[#303633] p-6 rounded shadow">
							<h3 className="font-bold mb-2">
								Recent Instagram Post
							</h3>
							<p>
								"The Quran remains a timeless guide for
								humanity."
							</p>
						</div>
						<div className="bg-white text-[#303633] p-6 rounded shadow">
							<h3 className="font-bold mb-2">
								Recent Facebook Post
							</h3>
							<p>
								"Join my upcoming lecture series on spirituality
								and ethics."
							</p>
						</div>
					</div>
					<div className="flex justify-center mt-8 space-x-6">
						<Twitter className="text-3xl cursor-pointer hover:text-[#CA3C25] transition-transform transform hover:scale-110" />
						<Facebook className="text-3xl cursor-pointer hover:text-[#CA3C25] transition-transform transform hover:scale-110" />
						<Instagram className="text-3xl cursor-pointer hover:text-[#CA3C25] transition-transform transform hover:scale-110" />
					</div>
				</div>
			</section>

			{/* About Section */}
			<section className="py-16 px-4">
				<div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
					<div>
						<h2 className="text-3xl font-semibold mb-6">
							About Mufti Shamail
						</h2>
						<p className="text-lg mb-6">
							Mufti Shamail is a dedicated scholar committed to
							imparting knowledge and fostering understanding in
							the community. His works reflect a deep connection
							to tradition and a vision for modern applications.
						</p>
						<p className="text-lg">
							He continues to inspire through his books, courses,
							and public engagements.
						</p>
					</div>
					<img
						src="https://via.placeholder.com/400"
						alt="About Mufti Shamail"
						className="rounded-lg shadow-lg"
					/>
				</div>
			</section>
		</div>
	);
};

export default Home2;
