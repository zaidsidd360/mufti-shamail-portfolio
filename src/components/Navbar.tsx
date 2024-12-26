import { useState, useEffect } from "react";
import { X, Menu } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { motion, useScroll } from "framer-motion";

const Navbar = () => {
	const location = useLocation();
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const [hasScrolled, setHasScrolled] = useState(false);
	const { scrollY, scrollYProgress } = useScroll();

	useEffect(() => {
		return scrollY.on("change", (latest) => {
			const scrollPercentage =
				latest /
				(document.documentElement.scrollHeight - window.innerHeight);
			setHasScrolled(scrollPercentage > 0.05);
		});
	}, [scrollY]);

	const toggleMobileMenu = () => {
		setIsMobileMenuOpen(!isMobileMenuOpen);
	};

	const isActiveRoute = (href: string) => {
		if (href === "/") {
			return location.pathname === "/";
		}
		return location.pathname.startsWith(href);
	};

	const menuItems = [
		{ label: "Home", href: "/" },
		{ label: "Books", href: "/books" },
		{ label: "Certifications", href: "/certifications" },
	];

	const letterAnimation = {
		initial: { y: 20, opacity: 0 },
		animate: (i: number) => ({
			y: 0,
			opacity: 1,
			transition: {
				duration: 0.8,
				delay: i * 0.1,
				ease: [0.43, 0.13, 0.23, 0.96],
			},
		}),
	};

	return (
		<motion.nav
			className="fixed top-0 left-0 w-full z-[999]"
			initial={{ backgroundColor: "rgba(21, 22, 21, 0)" }}
			animate={{
				backgroundColor: hasScrolled
					? "rgba(21, 22, 21, 0.65)"
					: "rgba(21, 22, 21, 0)",
				backdropFilter: hasScrolled ? "blur(10px)" : "none",
				boxShadow: hasScrolled
					? "0 1px 3px 0 rgba(0, 0, 0, 0.1)"
					: "none",
			}}
			transition={{ duration: 0.4 }}
		>
			<div className="mx-auto md:px-4 flex justify-between items-center h-20 md:h-24 max-w-[92.5%] md:max-w-[100%] lg:max-w-[90%] xl:max-w-[75%]">
				{/* Animated Text Logo */}
				<Link to="/" className="flex items-center">
					<motion.div
						initial="initial"
						animate="animate"
						className="flex items-center"
					>
						{Array.from("Mufti Shamail").map((letter, i) => (
							<motion.span
								key={i}
								custom={i}
								variants={letterAnimation}
								className={`text-2xl md:text-3xl font-semibold ${
									letter === " " ? "mr-2" : ""
								} ${
									hasScrolled
										? i < 5
											? "text-white/70"
											: "text-white"
										: "text-white"
								}`}
							>
								{letter}
							</motion.span>
						))}
					</motion.div>
				</Link>

				{/* Desktop Navigation */}
				<div className="hidden md:flex md:space-x-8 items-center">
					{menuItems.map((item, index) => (
						<Link
							key={index}
							to={item.href}
							className={`
                text-base
                px-2 py-1
                transition-all
                duration-300
                font-medium
                border-b-2
                ${
					hasScrolled
						? isActiveRoute(item.href)
							? "text-white border-white"
							: "text-gray-300 border-transparent hover:text-gray-400 hover:border-gray-400"
						: isActiveRoute(item.href)
						? "text-white border-white"
						: "text-gray-300 border-transparent hover:text-white hover:border-white/70"
				}
              `}
						>
							{item.label}
						</Link>
					))}
				</div>

				{/* Mobile Hamburger Icon */}
				<div className="md:hidden">
					<button
						onClick={toggleMobileMenu}
						className={`focus:outline-none transition-colors duration-300 ${
							hasScrolled ? "text-gray-300" : "text-white"
						}`}
					>
						<Menu size={24} />
					</button>
				</div>

				{/* Mobile Menu Overlay */}
				{isMobileMenuOpen && (
					<div
						className="fixed inset-0 min-h-screen bg-black bg-opacity-50 z-40"
						onClick={toggleMobileMenu}
					/>
				)}

				{/* Mobile Menu */}
				<motion.div
					className={`
            fixed top-0 right-0 min-h-screen w-3/5 shadow-lg z-50
            transform transition-transform duration-300 ease-in-out
            ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"}
          `}
					animate={{
						backgroundColor: "rgba(255, 255, 255, 0.95)",
						backdropFilter: "blur(10px)",
					}}
				>
					<div className="p-6">
						<button
							onClick={toggleMobileMenu}
							className="absolute top-4 right-4 text-gray-700 focus:outline-none"
						>
							<X size={24} />
						</button>

						<div className="flex flex-col space-y-6 mt-12">
							{menuItems.map((item, index) => (
								<Link
									key={index}
									onClick={() => setIsMobileMenuOpen(false)}
									to={item.href}
									className={`text-lg font-medium transition-colors duration-200
                    ${
						isActiveRoute(item.href)
							? "text-gray-800"
							: "text-gray-600 hover:text-gray-800"
					}
                  `}
								>
									{item.label}
								</Link>
							))}
						</div>
					</div>
				</motion.div>
			</div>
			<motion.div
				id="scroll-indicator"
				style={{
					scaleX: scrollYProgress,
					position: "fixed",
					bottom: 0,
					left: 0,
					right: 0,
					height: 1,
					originX: 0,
					backgroundColor: "#c3e5a5",
				}}
			/>
		</motion.nav>
	);
};

export default Navbar;
