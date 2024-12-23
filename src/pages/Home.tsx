import {
	GraduationCap,
	Twitter,
	Youtube,
	Facebook,
	ExternalLink,
} from "lucide-react";
import BookMockupCompact from "../assets/bookMockupCompact.png";
import HeroSection from "../components/home/HeroSection";
import InstagramEmbed from "../components/InstagramEmbed";
import LatestBook from "../components/home/LatestBook";
import About from "../components/home/About";

// Define types for our components
interface SocialPost {
	platform: "twitter" | "youtube" | "facebook";
	content: string;
	date: string;
	link: string;
}

interface Course {
	title: string;
	institution: string;
	year: string;
	description: string;
}

const Home = () => {
	// Sample social posts data
	const socialPosts: SocialPost[] = [
		{
			platform: "twitter",
			content:
				"Just finished recording a new lecture series on Islamic jurisprudence...",
			date: "2024-12-20",
			link: "#",
		},
		{
			platform: "youtube",
			content: "New video: Understanding the principles of Fiqh...",
			date: "2024-12-19",
			link: "#",
		},
	];

	// Sample courses data
	const courses: Course[] = [
		{
			title: "Islamic Jurisprudence",
			institution: "Al-Azhar University",
			year: "2010",
			description: "Specialized study in Islamic law and its principles",
		},
		{
			title: "Hadith Sciences",
			institution: "Islamic University of Madinah",
			year: "2008",
			description:
				"Advanced study in Hadith authentication and interpretation",
		},
	];

	return (
		<div className="min-h-screen bg-[#F8F9FA]">
			{/* Hero Section */}
			<HeroSection />

			{/* Latest Book Section */}

			<LatestBook
				bookCover={BookMockupCompact}
				title="The Issue of Slavery & Islam"
				description="Islam, emerging in 7th-century Arabia, reformed but did not abolish slavery, encouraging humane treatment, manumission, and freedom through piety. Enslaved people often rose to prominence, like the Mamluk rulers of Egypt. The Arab slave trade spanned regions, with slavery persisting until modern abolition efforts. Today, Islam universally condemns slavery, aligning its end with principles of dignity and justice."
			/>
			<About />

			{/* Social Media Feed */}
			<section className="px-4 py-20">
				<div className="max-w-7xl mx-auto">
					<h2 className="text-3xl md:text-4xl font-bold text-[#303633] mb-12">
						Latest Updates
					</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
						<InstagramEmbed />
						{socialPosts.map((post, index) => (
							<div
								key={index}
								className="p-6 bg-white rounded-lg border-2 border-[#303633] 
                shadow-[4px_4px_0px_0px_rgba(48,54,51,1)] transform hover:-translate-y-1 
                transition-transform duration-200"
							>
								<div className="flex items-center gap-2 mb-4">
									{post.platform === "twitter" && (
										<Twitter className="text-[#91A6FF]" />
									)}
									{post.platform === "youtube" && (
										<Youtube className="text-[#CA3C25]" />
									)}
									{post.platform === "facebook" && (
										<Facebook className="text-[#91A6FF]" />
									)}
									<span className="font-semibold capitalize">
										{post.platform}
									</span>
								</div>
								<p className="text-gray-700 mb-4">
									{post.content}
								</p>
								<a
									href={post.link}
									className="text-sm text-[#303633] font-medium 
                  flex items-center gap-1 hover:underline"
								>
									Read More <ExternalLink size={14} />
								</a>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Qualifications Section */}
			<section className="px-4 py-20 bg-[#8BE8CB]/10">
				<div className="max-w-7xl mx-auto">
					<h2 className="text-3xl md:text-4xl font-bold text-[#303633] mb-12">
						Education & Certifications
					</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
						{courses.map((course, index) => (
							<div
								key={index}
								className="p-6 bg-white rounded-lg border-2 
                border-[#303633] shadow-[4px_4px_0px_0px_rgba(48,54,51,1)]"
							>
								<div className="flex items-start gap-4">
									<div className="p-3 bg-[#FED766] rounded-lg">
										<GraduationCap className="text-[#303633]" />
									</div>
									<div>
										<h3 className="text-xl font-semibold text-[#303633] mb-2">
											{course.title}
										</h3>
										<p className="text-gray-600 mb-1">
											{course.institution}
										</p>
										<p className="text-sm text-gray-500">
											{course.year}
										</p>
										<p className="mt-2 text-gray-700">
											{course.description}
										</p>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>
		</div>
	);
};

export default Home;
