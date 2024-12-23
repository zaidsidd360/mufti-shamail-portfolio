import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
// import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ScrollToTopButton from "./components/ScrollToTopButton";
import ScrollToTop from "./components/ScrollToTop";
import Home2 from "./pages/Home2";
import Navbar from "./components/Navbar";

const AppContent = () => {
	const location = useLocation();
	const isErrorPage =
		location.pathname !== "/" &&
		!location.pathname.match(/^\/(?:books|fatwah)$/);

	return (
		<>
			<ScrollToTop />
			<ScrollToTopButton />
			{!isErrorPage && <Navbar />}
			<Routes>
				<Route path="/" element={<Home />} />
			</Routes>
		</>
	);
};

function App() {
	return (
		<BrowserRouter>
			<AppContent />
		</BrowserRouter>
	);
}

export default App;
