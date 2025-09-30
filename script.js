document.addEventListener('DOMContentLoaded', function() {
  const taskInput = document.getElementById('task-input');
  const addBtn = document.getElementById('add-btn');
  const taskList = document.getElementById('task-list');

  // Function to add a task
  function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
      const li = document.createElement('li');
      li.className = 'task-item';
      li.innerHTML = `
        <span>${taskText}</span>
        <button class="remove-btn">🗑️</button>
      `;
      taskList.appendChild(li);
      taskInput.value = '';
      taskInput.placeholder = 'Add another text';
    }
  }

  // Set placeholder to 'Add your text' on first focus
  let firstFocus = true;
  taskInput.addEventListener('focus', function() {
    if (firstFocus) {
      taskInput.placeholder = 'Add your text';
      firstFocus = false;
    }
  });

  addBtn.addEventListener('click', addTask);

  // Add task on Enter key
  taskInput.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
      addTask();
    }
  });

  // Mark task complete or remove task
  taskList.addEventListener('click', function(e) {
    if (e.target.tagName === 'SPAN') {
      e.target.classList.toggle('completed');
    } else if (e.target.classList.contains('remove-btn')) {
      e.target.parentNode.remove();
    }
  });
});
