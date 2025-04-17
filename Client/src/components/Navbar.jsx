import React, { useEffect, useState } from "react";
import { navLinks } from "../constants/index";

const Navbar = () => {
	const [scrolled, setScrolled] = useState(false);
	useEffect(() => {
		const handleScroll = () => {
			const isScrolled = window.scrollY > 10;
            if (isScrolled) {
				setScrolled(true);
			}
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, [scrolled]);

	return (
		<header className={`navbar ${scrolled ? "scrolled" : "not-scrolled"}`}>
			<div className="inner">
				<a href="#hero" className="logo">
					Milestack | @codeprnv
				</a>
				<nav className="desktop">
					<ul>
						{navLinks.map(({ link, name }) => (
							<li key={name} className="group">
								<a href={link}>
									<span>{name}</span>
									<span className="underline" />
								</a>
							</li>
						))}
					</ul>
				</nav>
				<a href="#contact" className="contact-btn group">
					<div className="inner">
						<span>Contact Me</span>
					</div>
				</a>
			</div>
		</header>
	);
};

export default Navbar;
