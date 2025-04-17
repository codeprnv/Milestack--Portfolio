const navLinks = [
	{
		name: "Work",
		link: "#work",
	},
	{
		name: "Projects",
		link: "#projects",
	},
	{
		name: "Skills",
		link: "#skills",
	},
	// {
	// 	name: "Testimonials",
	// 	link: "#testimonials",
	// },
];

const words = [
	{ text: "Ideas", imgPath: "/images/ideas.svg" },
	{ text: "Concepts", imgPath: "/images/concepts.svg" },
	{ text: "Designs", imgPath: "/images/designs.svg" },
	{ text: "Code", imgPath: "/images/code.svg" },
	{ text: "Ideas", imgPath: "/images/ideas.svg" },
	{ text: "Concepts", imgPath: "/images/concepts.svg" },
	{ text: "Designs", imgPath: "/images/designs.svg" },
	{ text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
	{ value: 5, suffix: "+", label: "Real-World Projects Built" },
	{ value: 25, suffix: "+", label: "LeetCode Problems Solved" },
	{ value: 1, suffix: "", label: "Goal: Learn Something New Daily" },
	{ value: 10, suffix: "+", label: "Cups of Chai While Debugging" },
];

const logoIconsList = [
	{
		imgPath: "/images/logos/company-logo-1.png",
	},
	{
		imgPath: "/images/logos/company-logo-2.png",
	},
	{
		imgPath: "/images/logos/company-logo-3.png",
	},
	{
		imgPath: "/images/logos/company-logo-4.png",
	},
	{
		imgPath: "/images/logos/company-logo-5.png",
	},
	{
		imgPath: "/images/logos/company-logo-6.png",
	},
	{
		imgPath: "/images/logos/company-logo-7.png",
	},
	{
		imgPath: "/images/logos/company-logo-8.png",
	},
	{
		imgPath: "/images/logos/company-logo-9.png",
	},
	{
		imgPath: "/images/logos/company-logo-10.png",
	},
	{
		imgPath: "/images/logos/company-logo-11.png",
	},
];

const abilities = [
	{
		imgPath: "/images/seo.png",
		title: "Quality Focus",
		desc: "Delivering high-quality results while maintaining attention to every detail.",
	},
	{
		imgPath: "/images/chat.png",
		title: "Reliable Communication",
		desc: "Keeping you updated at every step to ensure transparency and clarity.",
	},
	{
		imgPath: "/images/time.png",
		title: "On-Time Delivery",
		desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
	},
];

const techStackImgs = [
	{
		name: "React Developer",
		imgPath: "/images/logos/react.png",
	},
	{
		name: "Python Developer",
		imgPath: "/images/logos/python.svg",
	},
	{
		name: "Backend Developer",
		imgPath: "/images/logos/node.png",
	},
	{
		name: "Interactive Developer",
		imgPath: "/images/logos/three.png",
	},
	{
		name: "Project Manager",
		imgPath: "/images/logos/git.svg",
	},
];

const techStackIcons = [
	{
		name: "React Developer",
		modelPath: "/models/react_logo-transformed.glb",
		scale: 1,
		rotation: [0, 0, 0],
	},
	{
		name: "Python Developer",
		modelPath: "/models/python-transformed.glb",
		scale: 0.8,
		rotation: [0, 0, 0],
	},
	{
		name: "Backend Developer",
		modelPath: "/models/node-transformed.glb",
		scale: 5,
		rotation: [0, -Math.PI / 2, 0],
	},
	{
		name: "Interactive Developer",
		modelPath: "/models/three.js-transformed.glb",
		scale: 0.05,
		rotation: [0, 0, 0],
	},
	{
		name: "Project Manager",
		modelPath: "/models/git-svg-transformed.glb",
		scale: 0.05,
		rotation: [0, -Math.PI / 4, 0],
	},
];

const expCards = [
	{
		lesson:
			"Building Foody taught me how to bridge AI with mobile development using Flutter. I gained hands-on experience integrating Google Gemini AI, working with Firestore for scalable backend storage, and designing intuitive UX for real-world users. ",
		imgPath: "/images/logos/flutter.png",
		logoPath: "/images/logo1.png",
		title: "Foody",
		date: "December 2024 - February 2025",
		learnings: [
			"Designed a cross-platform mobile app using Flutter to suggest recipes based on AI-powered ingredient detection from user-uploaded images.",
			"Integrated Google Gemini AI to detect ingredients directly from images, replacing traditional object detection models for more accurate and scalable performance.",
			"Developed a structured Firestore backend to save user interactions like favorite recipes, bookmarks, and history of scanned ingredients.",
		],
	},
	{
		lesson:
			"Movieflix helped me understand how to build a complete, real-world web app using React and Firebase. I learned how to work with third-party APIs like TMDB, implement secure user authentication, and create a dynamic, user-friendly UI.",
		imgPath: "/images/logos/react-logo.png",
		logoPath: "/images/logo2.png",
		title: "Movieflix",
		date: "August 2024 - October 2024",
		learnings: [
			"Created a movie and TV show streaming platform, featuring curated listings of trending and popular content dynamically fetched from the TMDB API.",
			"Utilized modern front-end technologies, such as ReactJS, to build a responsive and interactive user interface.",
			"Integrated Firebase Authentication for secure user sign-in, enabling personalized watchlists and efficient session management.",
			"Live Demo: https://movieflix-03.web.app",
		],
	},
	{
		lesson:
			"Creating the Linear Search Visualizer deepened my understanding of core algorithms and user-centric design. I learned how to translate abstract logic into interactive visuals using Python and Tkinter, handle edge cases with proper validation, and improve usability through responsive UI and feedback mechanisms.",
		imgPath: "/images/logos/python.png",
		logoPath: "/images/logo3.png",
		title: "Linear Search Visualizer",
		date: "August 2023 - September 2023",
		learnings: [
			"Developed a GUI-based Linear Search Visualizer using Python and Tkinter to educate and engage users and demonstrate the working of the linear search algorithm interactively.",
			"Implemented dynamic input functionality allowing users to create custom lists and visually observe the search process with real-time feedback and color-coded highlights.",
			"Integrated error handling for invalid inputs, ensuring robust user experience, and enhanced UI using PIL for image support and custom styling.",
		],
	},
];

const expLogos = [
	{
		name: "logo1",
		imgPath: "/images/logo1.png",
	},
	{
		name: "logo2",
		imgPath: "/images/logo2.png",
	},
	{
		name: "logo3",
		imgPath: "/images/logo3.png",
	},
];

const testimonials = [
	{
		name: "Esther Howard",
		mentions: "@estherhoward",
		review:
			"I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
		imgPath: "/images/client1.png",
	},
	{
		name: "Wade Warren",
		mentions: "@wadewarren",
		review:
			"Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
		imgPath: "/images/client3.png",
	},
	{
		name: "Guy Hawkins",
		mentions: "@guyhawkins",
		review:
			"Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
		imgPath: "/images/client2.png",
	},
	{
		name: "Marvin McKinney",
		mentions: "@marvinmckinney",
		review:
			"Adrian was a pleasure to work with. He turned our outdated website into a fresh, intuitive platform that’s both modern and easy to navigate. Fantastic work overall.",
		imgPath: "/images/client5.png",
	},
	{
		name: "Floyd Miles",
		mentions: "@floydmiles",
		review:
			"Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional!",
		imgPath: "/images/client4.png",
	},
	{
		name: "Albert Flores",
		mentions: "@albertflores",
		review:
			"Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend and backend dev are top-notch.",
		imgPath: "/images/client6.png",
	},
];

const socialImgs = [
	{
		name: "insta",
		url: "https://www.instagram.com/prnv._03",
		imgPath: "/images/insta.png",
	},
	// {
	// 	name: "fb",
	// 	url: "https://www.facebook.com/",
	// 	imgPath: "/images/fb.png",
	// },
	{
		name: "x",
		url: "https://x.com/codexprnv",
		imgPath: "/images/x.png",
	},
	{
		name: "linkedin",
		url: "https://www.linkedin.com/in/codexprnv",
		imgPath: "/images/linkedin.png",
	},
	{
		name: "github",
		url: 'https://github.com/codeprnv',
		imgPath: "/images/github.png",
	}
];

export {
	words,
	abilities,
	logoIconsList,
	counterItems,
	expCards,
	expLogos,
	testimonials,
	socialImgs,
	techStackIcons,
	techStackImgs,
	navLinks,
};
