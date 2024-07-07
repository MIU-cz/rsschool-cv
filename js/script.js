
// for (const lang in data.languages) {
// 	console.log(lang);
// 	console.log(data.languages[lang]);
// }

// for (const work of Work) {
//     console.log(work.name);
// }

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
			<a href="#${section.id}" class="item_link">${section.textContent}</a>
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