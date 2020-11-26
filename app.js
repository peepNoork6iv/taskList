const taskList = document.querySelector('.collection');

class Task {
  constructor(task) {
    this.task = task;
  }
}

class UI {
  addTaskToList(task) {
    const li = document.createElement('li');
    li.className = 'collection-item';
    li.innerHTML = `${task.task}<a class = 'delete-item secondary-content'><i class = 'fa fa-remove'></i></a>`;
    taskList.appendChild(li);
  }

  static filterTasks(e) {
    const text = e.target.value.toLowerCase();
    document.querySelectorAll('.collection-item').forEach(function(task) {
      const item = task.firstChild.textContent;
      if(item.toLowerCase().indexOf(text) != -1) {
        task.style.display = 'block';
      } else {
        task.style.display = 'none';
      }
    });
  }

  static removeTaskFromList(e) {
    if(e.target.parentElement.classList.contains('delete-item')) {
      e.target.parentElement.parentElement.remove();
    }
  }

  static clearTaskList(e) {
    while(taskList.firstChild) {
      taskList.removeChild(taskList.firstChild);
    }
  }

  clearField() {
    document.querySelector('#task').value = '';
  }
}

// Add task event
document.querySelector('#task-form').addEventListener('submit', function(e) {
  const taskText = document.querySelector('#task').value;
  const task = new Task(taskText);
  const ui = new UI();
  if (taskText === '') {
    alert('add task')
  } else {
    ui.addTaskToList(task);
    ui.clearField();
  }
  
  e.preventDefault();
});

// Remove task event
document.querySelector('.collection').addEventListener('click', function(e) {
  UI.removeTaskFromList(e);
});

// Filter tasks
document.querySelector('#filter').addEventListener('keyup', function(e) {
  UI.filterTasks(e);
});

// Clear tasks
document.querySelector('.clear-tasks').addEventListener('click', function(e) {
  UI.clearTaskList(e);
});