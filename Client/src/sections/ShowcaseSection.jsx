import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ShowcaseSection = () => {
	const sectionRef = useRef(null);
	const project1Ref = useRef(null);
	const project2Ref = useRef(null);
	const project3Ref = useRef(null);

	useGSAP(() => {
		const projects = [
			project1Ref.current,
			project2Ref.current,
			project3Ref.current,
		];
		projects.forEach((card, index) => {
			gsap.fromTo(
				card,
				{
					y: 50,
					opacity: 0,
				},
				{
					y: 0,
					opacity: 1,
					duration: 1,
					delay: 0.3 * (index + 1),
					scrollTrigger: {
						trigger: card,
						start: 'top bottom-=100',
					},
				}
			);
		});
		gsap.fromTo(
			sectionRef.current,
			{
				opacity: 0,
			},
			{ opacity: 1, duration: 1.5 }
		);
	}, []);

	return (
		<section id="work" ref={sectionRef} className="app-showcase">
			<div className="w-full">
				<div className="showcaseLayout">
					{/* Left */}

					<div className="first-project-wrapper" ref={project1Ref}>
						<div className="image-wrapper">
							<img src="/images/foody.gif" alt="Ride" />
						</div>
						<div className="text-content">
							<h2>🧠 AI-Powered Cooking Assistant Right in Your Pocket</h2>
							<p className="text-white-50 md:text-xl">
								Foody helps you cook smarter by detecting ingredients from
								images and suggesting recipes instantly. No more wondering what
								to make—just scan and cook!
							</p>
						</div>
					</div>

					{/* Right */}

					<div className="project-list-wrapper overflow-hidden">
						<div className="project" ref={project2Ref}>
							<div className="image-wrapper bg-[#f37558]">
								<img
									src="/images/movieflix-tablet.png"
									alt="Streaming Platform"
								/>
							</div>
							<h2>🎬 MovieFlix – A Full-Stack Movie Browsing Web App</h2>
						</div>
						<div className="project" ref={project3Ref}>
							<div className="image-wrapper bg-[#ffe7eb]">
								<img src="/images/shopping-app.png" alt="YC Directory" />
							</div>
							<h2>
								🛍️ Shopping App – A Modern Flutter E-commerce UI Practice
								Project
							</h2>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ShowcaseSection;
