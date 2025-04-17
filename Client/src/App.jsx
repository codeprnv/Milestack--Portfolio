import React from "react";
import Hero from "./sections/Hero";
import ShowcaseSection from "./sections/ShowcaseSection";
import Navbar from "./components/Navbar";
import LogoSection from "./sections/LogoSection";
import FeatureCards from "./sections/FeatureCards";
import ProjectSection from "./sections/ProjectSection";
import TechStack from "./sections/TechStack";
import ContactSection from "./sections/ContactSection";
import FooterSection from "./sections/FooterSection";

const App = () => {
	return (
		<>
			<Navbar />
			<Hero />
			<ShowcaseSection />
			{/* <LogoSection /> */}
			<FeatureCards />
			<ProjectSection />
      <TechStack />
      <ContactSection />
      <FooterSection/>
		</>
	);
};

export default App;
