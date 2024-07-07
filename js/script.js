// ### HEADER
// ==================
document.querySelector(".autor_name").textContent = Data.autor.name + " " + Data.autor.surname;
document.querySelector(".autor_spec").textContent = Data.autor.spec;

for (let socialLink of Data.social) {
	let li = document.createElement("li");
	let a = document.createElement("a");
	a.href = socialLink.link;
	a.title = socialLink.name;
	a.innerHTML = socialLink.ico;
	li.appendChild(a);
	document.querySelector(".autor_socials").appendChild(li);
}

// ## nav bar
const NavBar = document.getElementById("navBar"),
	Sections = document.querySelectorAll(".section_headers");

Sections.forEach((section) => {
	NavBar.innerHTML += `
		<li class="navBar_item">
			<a class="item_link" href="#${section.id}">${section.textContent}</a>
		</li>
	`;
});

// ### MAIN
// ==================
document.querySelector(".autor_skills").innerHTML = `
    <img src="${Data.autor.skills}" alt="autor_skills">
    `;

// ##### EDUCATION
const EduTableUniversity = document.getElementById("tableUniversity");

for (let item of Education.school) {
	EduTableUniversity.innerHTML += `
		<tr class="table_row">
			<td><img class="table_ico" src="${Education.icoSchool}" alt="edu_ico"></td>
			<td>${item.name}</td>
			<td>${item.faculta}</td>
			<td>${item.specialization}</td>
			<td>${item.date}</td>
		</tr>
	`;
}
const EduTableCourses = document.getElementById("tableCourses");

for (let item of Education.training) {
	EduTableCourses.innerHTML += `
		<tr class="table_row">
			<td><img class="table_ico" src="${Education.icoTraining}" alt="edu_ico"></td>
			<td>${item}</td>
		</tr>
	`;
}

// ##### SOME STATS
const statsBlock = document.querySelector(".stats_content");

for (let img of Education.stats) {
	statsBlock.innerHTML += `
		<img class="stats_item" src="${img}" alt="statistics">
	`;
}

// ##### WORK EXPERIENCE
const WorkTable = document.getElementById("tableWork");

for (let item of Work.jobs) {
	WorkTable.innerHTML += `
		<tr class="table_row">
			<td><img class="table_ico" src="${Work.icoBag}" alt="work_ico"></td>
			<td>${item.name}</td>
			<td>${item.specializacion}</td>
			<td>${item.date}</td>
		</tr>
	`;
}

// ##### PORTFOLIO


// ### ASIDE
// ==================
const Contacts = document.querySelector(".contacts_content");

for (let item of Data.contact) {
	Contacts.innerHTML += `
		<li class="contacts_item">
			${item.ico}
			<span>${item.name}: 
			<a class="item_link" href="${item.link}">${item.content}</a>
			</span>
		</li>
	`;
}

for (let item of Data.social) {
	Contacts.innerHTML += `
		<li class="contacts_item">
			${item.ico}
			<span>
			<a class="item_link" href="${item.link}">${item.name}</a>
			</span>
		</li>
	`;
}

const SkillsBlock = document.getElementById("prog");
for (let item of Skills.icons) {
	SkillsBlock.innerHTML += `
		<object class="skills_item" type="${Skills.type}" data="${item.data}" title="${item.title}"></object>
	`;
}
const ToolsBlock = document.getElementById("tools");
for (let item of Skills.tools) {
	ToolsBlock.innerHTML += `
		<object class="skills_item" type="${Skills.type}" data="${item.data}" title="${item.title}"></object>
	`;
}
const OsBlock = document.getElementById("os");
for (let item of Skills.os) {
	OsBlock.innerHTML += `
		<object class="skills_item" type="${Skills.type}" data="${item.data}" title="${item.title}"></object>
	`;
}

const LangBlock = document.querySelector(".lang_content");
for (let item in Data.languages) {
	LangBlock.innerHTML += `
		<li class="lang_item">
			>> ${item}: ${Data.languages[item]}
		</li>
	`;
}