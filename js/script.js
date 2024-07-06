// for (const training of Education.training) {
// 	console.log(training);
// }

// for (const social of data.social) {
// 	console.log(social);
// 	console.log(social.name);
// }

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
    let li = document.createElement('li');
    let a = document.createElement('a');
    a.href = socialLink.link;
    a.title = socialLink.name;
    a.innerHTML = socialLink.ico;
    li.appendChild(a);
    document.querySelector(".autor_socials").appendChild(li);
}