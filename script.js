function addTask() {
  let taskInput = document.getElementById('taskInput');
  let tasksList = document.getElementById('tasksList');

  if (taskInput.value.trim() !== '') {
      let newLi = document.createElement('li');
      let removeBtn = document.createElement('button');

      // Configure the remove button
      removeBtn.textContent = 'Remove';
      removeBtn.className = 'removeBtn'; // Add a class for styling
      removeBtn.onclick = function() {
          tasksList.removeChild(newLi);
      };

      // Add task text and remove button to the list item
      newLi.textContent = taskInput.value;
      newLi.appendChild(removeBtn);

      tasksList.appendChild(newLi);
      taskInput.value = ''; // Clear input field after adding
  } else {
      alert("Please enter a task!");
  }
}

// Enables task submission by pressing "Enter"
document.getElementById('taskInput').addEventListener('keypress', function(e) {
  if (e.key === 'Enter') {
      addTask();
  }
});

