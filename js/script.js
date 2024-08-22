// alert('test')
//alert('\u00A9')

const body = document.querySelector('body');
const footer = document.createElement('footer');
footer.textContent = 'Copyright';
body.appendChild(footer);

const today = new Date();
const thisYear = today.getFullYear();
const copyright = document.createElement('p');
copyright.innerText = `\u00A9 ${thisYear} Girma Ebssa`;
footer.appendChild(copyright);


const skills = ["Git", "GitHub", "Git Bash", "HTML", "CSS", "JavaScript", "React", "Node.js"];
const skillsSection = document.getElementById("skills");
const skillsList = skillsSection.querySelector("ul");

for (let i = 0; i < skills.length; i++) {
  const skill = skills[i];
  const listItem = document.createElement("li");
  listItem.textContent = skill; // Add the skill text to the list item
  skillsList.appendChild(listItem);
}