import Logo from "../assets/logoCropped.png";
import { Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
	return (
		<footer className="bg-[#6074ad] text-gray-400 py-8 px-4 sm:px-6 lg:px-8">
			<div className="max-w-7xl md:max-w-[90%] lg:max-w-[80%] xl:max-w-[70%] 2xl:max-w-[65%] mx-auto grid grid-cols-1 sm:grid-cols-4 gap-8">
				{/* Logo Section */}
				<Link to="/">
					<img
						src={Logo}
						alt="Arrive Safe Driving School"
						className="h-28 md:h-52 w-auto object-contain"
					/>
				</Link>

				{/* Contact Section */}
				<div>
					<h3 className="text-2xl font-medium mb-4 text-gray-100">
						Contact
					</h3>
					<Link
						to="tel:0407-369-150"
						className="mb-2 text-white flex items-center gap-2 cursor-pointer flex-wrap hover:text-gray-300"
					>
						<Phone />
						0407-369-150
					</Link>
					<Link
						to="mailto:arrivesafedriving@gmail.com.au"
						className="mb-2 text-white flex items-center gap-2 cursor-pointer hover:text-gray-300 break-all"
					>
						<Mail className="flex-shrink-0" />
						arrivesafedriving@gmail.com.au
					</Link>
					<Link
						to="/contact"
						className="text-white flex items-center gap-2 cursor-pointer hover:text-gray-300"
					>
						<MapPin />
						Para hills west, Adelaide, Australia
					</Link>
				</div>

				{/* Services Section */}
				<div>
					<h3 className="text-2xl font-medium mb-4 text-gray-100">
						Services
					</h3>
					<ul className="space-y-2 text-white">
						<li>
							<Link
								to="/lessons/automatic"
								className="hover:text-gray-300"
							>
								Automatic Driving Lessons
							</Link>
						</li>
						<li>
							<Link
								to="/lessons/manual"
								className="hover:text-gray-300"
							>
								Manual Driving Lessons
							</Link>
						</li>
					</ul>
				</div>

				{/* Support Section */}
				<div>
					<h3 className="text-2xl font-medium mb-4 text-gray-100">
						Support
					</h3>
					<ul className="space-y-2 text-white">
						<li>
							<Link to="/about" className="hover:text-gray-300">
								About Us
							</Link>
						</li>
						<li>
							<Link to="/contact" className="hover:text-gray-300">
								Contact Us
							</Link>
						</li>
						<li>
							<Link
								to="/privacy-policy"
								className="hover:text-gray-300"
							>
								Privacy and Policy
							</Link>
						</li>
						<li>
							<Link
								to="/terms-and-conditions"
								className="hover:text-gray-300"
							>
								Terms and Conditions
							</Link>
						</li>
					</ul>
				</div>
			</div>
			<div className="mt-8 text-center text-sm border-t border-[#7183b9] pt-5">
				<p className="text-white">
					&copy; {new Date().getFullYear()} All Rights Reserved.
				</p>
			</div>
		</footer>
	);
};

export default Footer;
