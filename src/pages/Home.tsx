import BookMockupCompact from "../assets/bookMockupCompact.png";
import HeroSection from "../components/home/HeroSection";
import LatestBook from "../components/home/LatestBook";
import About from "../components/home/About";
import LatestUpdates from "../components/home/LatestUpdates";
import CertificationsHome from "../components/home/CertificationsHome";

const Home = () => {
	return (
		<div className="min-h-screen bg-[#F8F9FA] overflow-x-hidden">
			{/* Hero Section */}
			<HeroSection />

			{/* Latest Book Section */}

			<LatestBook
				bookCover={BookMockupCompact}
				title="The Issue of Slavery & Islam"
				description="Islam, emerging in 7th-century Arabia, reformed but did not abolish slavery, encouraging humane treatment, manumission, and freedom through piety. Enslaved people often rose to prominence, like the Mamluk rulers of Egypt. The Arab slave trade spanned regions, with slavery persisting until modern abolition efforts. Today, Islam universally condemns slavery, aligning its end with principles of dignity and justice."
			/>
			<About />
			{/* <div className="w-full h-5 md:h-10 bg-gradient-to-b from-[#121510] to-[#191b14]"></div> */}
			<LatestUpdates />
			<CertificationsHome />
		</div>
	);
};

export default Home;
