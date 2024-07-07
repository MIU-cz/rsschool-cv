const Data = {
	autor: {
		name: "Igor",
		surname: "Mykhailenko",
		spec: "Frontend developer",
		skills: "https://skillicons.dev/icons?i=vscode,github,md,js,html,css,scss,php,mysql,bootstrap,figma,xd",
	},
	social: [
		{
			name: "Git-Hub",
			ico: '<i class="bi bi-github">',
			bage: "https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white",
			link: "https://github.com/MIU-cz",
		},
		{
			name: "LinkedIn",
			ico: '<i class="bi bi-linkedin">',
			bage: "https://img.shields.io/badge/linkedin-%230077B6.svg?style=for-the-badge&logo=linkedin&logoColor=white",
			link: "https://www.linkedin.com/in/miu-cz",
		},
		{
			name: "FaceBook",
			ico: '<i class="bi bi-facebook">',
			bage: "https://img.shields.io/badge/Facebook-%231877F2.svg?style=for-the-badge&logo=Facebook&logoColor=white",
			link: "https://www.facebook.com/mehaligor.cz",
		},
	],
	contact: [
		{
			name: "Location",
			ico: '<i class="bi bi-geo-alt-fill"></i>',
			content: "Czech republic",
			link: "https://goo.gl/maps/eUBJPAfkTcdHUghJ9",
		},
		{
			name: "Whatsapp",
			ico: '<i class="bi bi-whatsapp"></i>',
			content: "+420 723 854 208",
			link: "tel:+420723854208",
		},
		{
			name: "E-mail",
			ico: '<i class="bi bi-envelope-at-fill"></i>',
			content: "mehal.cz@gmail.com",
			link: "mailto:mehal.cz@gmail.com",
		},
	],
	languages: {
		English: "A2, reading technical literature, communication",
		Czech: "B1, currently studying",
		Russian: "freely",
		Ukrainian: "freely",
		ppc: "and a single language for all the inhabitants of the planet earth -> programming languages",
	},
};

const Skills = {
	type: "image/svg+xml",
	icons: [
		{ data: "assets/svg/code/code-html.svg", title: "html" },
		{ data: "assets/svg/code/code-css3.svg", title: "css" },
		{ data: "assets/svg/code/code-js.svg", title: "js" },
		{ data: "assets/svg/code/code-scss.svg", title: "scss" },
		{ data: "assets/svg/code/code-php.svg", title: "php" },
		{ data: "assets/svg/code/code-c-sharp.svg", title: "c#" },
		{ data: "assets/svg/code/tool/tool-bootstrap.svg", title: "Bootstrap" },
		{ data: "assets/svg/code/tool/tool-bem.svg", title: "Bem" },
	],
	tools: [
		{ data: "assets/svg/tools/tools-vs-code.svg", title: "VS-Code" },
		{ data: "assets/svg/tools/tool-adobe-xd.svg", title: "Adobe" },
		{ data: "assets/svg/tools/tool-figma.svg", title: "Figma" },
		{ data: "assets/svg/tools/tool-gimp.svg", title: "Gimp" },
		{ data: "assets/svg/tools/tool-wix.svg", title: "Wix" },
		{ data: "assets/svg/tools/tool-wordpress.svg", title: "Wordpress" },
		{ data: "assets/svg/tools/tool-google.svg", title: "Google" },
		{ data: "assets/svg/tools/tool-microsoft.svg", title: "MS Office" },
	],
	os: [
		{ data: "assets/svg/os/os-android.svg", title: "Android" },
		{ data: "assets/svg/os/os-linux-ubuntu.svg", title: "Linux" },
		{ data: "assets/svg/os/os-mac.svg", title: "Mac" },
		{ data: "assets/svg/os/os-windows.svg", title: "Windows" },
	],
};

const Education = {
	icoSchool: "assets/svg/edu/education-hight.svg",
	icoTraining: "assets/svg/edu/education-cert.svg",
	icoStudent: "assets/svg/edu/education-student.svg",
	school: [
		{
			name: "VSB - Technical University of Ostrava",
			faculta: "Faculty of Electrical Engineering and Computer Science",
			specialization: "Master of Computer Science",
			date: "Sep. 2023 - July 2026",
		},
		{
			name: "National Mining University",
			faculta: "Faculty of Computer Systems Software",
			specialization: "Software Engineer. Bachelor. Junior engineer",
			date: "2005",
		},
		{
			name: "RANEPA",
			faculta: "Project management",
			specialization: "Business analyst",
			date: "2022",
		},
		{
			name: "State University of Management",
			faculta: "Faculty of Entrepreneurship in the Social Sphere",
			specialization: "Event-management. Fundraising as part of management",
			date: "2008",
		},
		{
			name: "National Mining University",
			faculta: "Faculty of Economics",
			specialization: "Bachelor of Foreign Trade. Management",
			date: "2006",
		},
		{
			name: 'ANO DPO "City Business School"',
			faculta: "MBA General",
			specialization: "Master of Business Administration",
			date: "2022 - not finished",
		},
	],
	training: [
		"RS School EPAM - JS/Front-end",
		"IT STEP - Computer graphics and Internet technologies",
		"Yandex - Project Manager",
		"Stepik - Project Manager",
		"Stepik -PHP, MySQL - basics",
		"Stepik- WEB Technology. FE",
		"Nettology - Front-end/JS",
		"Stepik -C# - Basics",
		"CBS - Management skills. Effective Solutions",
		"CBS - Time management. Delegation of powers",
		"CBS - Effective communications. media technologies. GR",
		"CBS - Social Psychology and Behavioral Analysis",
		"CBS - Stress management. Conflict Management",
		"CBS - Business Etiquette. Business meeting",
	],
	stats: [
		"https://github-readme-stats.vercel.app/api/top-langs/?username=MIU-cz&theme=dark&layout=compact",
		"https://github-profile-summary-cards.vercel.app/api/cards/repos-per-language?username=MIU-cz&theme=solarized_dark",
		"https://github-profile-summary-cards.vercel.app/api/cards/most-commit-language?username=MIU-cz&theme=solarized_dark",
	],
};

const Work = {
	icoBag: "assets/svg/edu/business-bag.svg",
	icoMan: "assets/svg/edu/business-man.svg",
	summary: "more then 20 years of management & bizdev experience ...",
	jobs: [
		{
			name: "BDO - MILITON",
			date: "2022",
			specializacion:
				"Construction. Engineering technology. Projection, production, sale and installation of water supply, sewage, heating, ventilation and air conditioning systems, high current and low current systems",
		},
		{
			name: "CBDO - LPK",
			date: "2020 - 2022",
			specializacion:
				"Production of house kits using the Massive Holz Mauer technology, Glued laminated timber, molded wood products, additionally - sale of woodworking waste",
		},
		{
			name: "CBDO - EBR-Group",
			date: "2019 - 2020",
			specializacion:
				"Organization of congress and exhibition events. Rental of exhibition space, organization of events, design, engineering and construction of exhibition space, catering",
		},
		{
			name: "CBDO - TEHPROM",
			date: "2018 - 2019",
			specializacion: "Production, sale and maintenance of cash registers",
		},
		{
			name: "CBDO - SPETSTORGSNAB",
			date: "2008 - 2018",
			specializacion:
				"Construction. Engineering equipment. Design, manufacture, sale and installation of water supply systems, sewerage, heating, ventilation and air conditioning, power supply and low-voltage systems, Smart-Home",
		},
		{
			name: "Project Manager - TECHNOENGINEERING",
			date: "2006 - 2008",
			specializacion:
				"Control systems. Audio, video, conference calls. Design, wholesale and integration of a/c signal switching systems, smart home control systems, production process control systems",
		},
		{
			name: "Sales Manager - Pridneprovsky Metallurgical Alliance",
			date: "2004 - 2006",
			specializacion:
				"Ferrous and non-ferrous metal rolling. Collection, sorting and processing of ferrous and non-ferrous scrap metal",
		},
		{
			name: "Sales Manager - NEFTEK",
			date: "2003 - 2004",
			specializacion: "Wholesale of light petroleum products - gasoline grade 92/95, diesel fuel",
		},
	],
};
