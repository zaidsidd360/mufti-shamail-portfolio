import { useEffect } from "react";

const InstagramEmbed = () => {
	useEffect(() => {
		// Dynamically load Instagram's embed script
		const script = document.createElement("script");
		script.src = "https://www.instagram.com/embed.js";
		script.async = true;
		script.defer = true;
		document.body.appendChild(script);

		// Cleanup script on component unmount
		return () => {
			document.body.removeChild(script);
		};
	}, []);

	return (
		<div>
			<blockquote
				className="instagram-media"
				// data-instgrm-captioned
				data-instgrm-permalink="https://www.instagram.com/reel/Cx4hQk1Pdhm/?utm_source=ig_embed&amp;utm_campaign=loading"
				data-instgrm-version="14"
				style={{
					background: "#FFF",
					border: "0",
					borderRadius: "3px",
					boxShadow:
						"0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)",
					margin: "1px",
					maxWidth: "540px",
					minWidth: "326px",
					padding: "0",
					width: "calc(100% - 2px)",
				}}
			>
				{/* <a
					href="https://www.instagram.com/reel/Cx4hQk1Pdhm/?utm_source=ig_embed&amp;utm_campaign=loading"
					target="_blank"
					rel="noreferrer"
				>
					View this post on Instagram
				</a> */}
			</blockquote>
		</div>
	);
};

export default InstagramEmbed;
