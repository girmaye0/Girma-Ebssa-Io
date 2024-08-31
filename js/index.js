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


const messageForm = document.querySelector('form[name="leave_message"]');

messageForm.addEventListener('submit', (event) => {
  event.preventDefault(); 

 
  // Get form field values
  const userName = event.target.usersName.value;
  const userEmail = event.target.usersEmail.value;
  const userMessage = event.target.usersMessage.value;

  // Log the values to the console
  console.log(`Name: ${userName}`);
  console.log(`Email: ${userEmail}`);
  console.log(`Message: ${userMessage}`);

  // Create a new message section
  const messageSection = document.getElementById('messages');
  const messageList = messageSection.querySelector('ul');
  const newMessage = document.createElement('li');
  newMessage.innerHTML   
 = `<a href="mailto:${userEmail}">${userName}</a><span>${userMessage}</span>`;   


  // Create a remove button
  const removeButton = document.createElement('button');
  removeButton.textContent = 'Remove';
  removeButton.type = 'button';


  // Add a click event listener to the remove button
  removeButton.addEventListener('click', () => {
    const entry = removeButton.parentNode;
    entry.remove();
  });

  // Append the remove button to the new message
  newMessage.appendChild(removeButton);

  // Append the new message to the message list
  messageList.appendChild(newMessage);


  // Create an edit button
  const editButton = document.createElement('button');
  editButton.textContent = 'Edit';
  editButton.type = 'button';

  // Add a click event listener to the edit button
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

  // Append the edit button to the new message
  newMessage.appendChild(editButton);

  // Append the new message to the message list
  messageList.appendChild(newMessage);

  // Hide the message section if the list is empty
  messageSection.style.display = messageList.children.length === 0 ? 'none' : 'block';

  // Clear the form
  messageForm.reset();
});

 