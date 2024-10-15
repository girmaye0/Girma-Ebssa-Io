const body = document.querySelector('body');
const footer = document.createElement('footer');
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


const messageForm = document.querySelector('form[name="leave_message"]');

messageForm.addEventListener('submit', (event) => {
  event.preventDefault(); 

   const userName = event.target.usersName.value;
  const userEmail = event.target.usersEmail.value;
  const userMessage = event.target.usersMessage.value;

  console.log(`Name: ${userName}`);
  console.log(`Email: ${userEmail}`);
  console.log(`Message: ${userMessage}`);

  // Create a new message section
  const messageSection = document.getElementById('messages');
  const messageList = messageSection.querySelector('ul');
  const newMessage = document.createElement('li');
  newMessage.innerHTML   
 = `<a href="mailto:${userEmail}">${userName}</a><span>${userMessage}</span>`;   

  const removeButton = document.createElement('button');
  removeButton.textContent = 'Remove';
  removeButton.type = 'button';

  removeButton.addEventListener('click', () => {
    const entry = removeButton.parentNode;
    entry.remove();
  });

  newMessage.appendChild(removeButton);

  messageList.appendChild(newMessage);

  const editButton = document.createElement('button');
  editButton.textContent = 'Edit';
  editButton.type = 'button';

    editButton.addEventListener('click', () => {
    const entry = editButton.parentNode;
    const messageSpan = entry.querySelector('span');
    const editInput = document.createElement('input');
    editInput.value = messageSpan.textContent;

    entry.replaceChild(editInput, messageSpan);

    editInput.addEventListener('blur', () => {
      const newMessageText = editInput.value;
      messageSpan.textContent = newMessageText;
      entry.replaceChild(messageSpan, editInput);
    });
  });

  newMessage.appendChild(editButton);

  messageList.appendChild(newMessage);

    // Clear the form
  messageForm.reset();
});

fetch(`https://api.github.com/users/girmaye0/repos`)
  .then(response => response.json())  // Parse response to JSON
  .then(repositories => {
    console.log(repositories);  // Log repositories for verification
   
    const projectSection = document.getElementById('projects');
    const projectList = projectSection.querySelector('ul');
    // Display repositories in a list
    for (const repo of repositories) {
      const project = document.createElement('li');
      project.innerText = repo.name;
      projectList.append(project);
    }
  })
  .catch(error => {
    console.error('Error fetching repositories:', error);
    // Handle errors here, e.g., display an error message to the user
    projectSection.textContent = 'Failed to load projects.';
  });
  
