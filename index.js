class TodoList {
  constructor() {
    this.tasks = [];
    this.completeAllTasksBtn = document.querySelector(".complete_all_tasks_btn");
    this.taskList = document.querySelector(".task_list");
    this.newTaskInput = document.querySelector(".new_task_input");
    this.statusBtns = document.querySelector(".status_btns");
    this.countTask = document.querySelector(".count_task");
    this.tabs = document.querySelectorAll(".tab");
    this.activeTab = "all";
    this.clearCompletedBtn = document.querySelector(".clear_completed_btn");
    this.render();
  }

  renderTasks() {
    this.completeAllTasksBtn.classList.toggle("hidden", this.tasks.length === 0);
    this.statusBtns.classList.toggle("hidden", this.tasks.length === 0);

    if (this.tasks.some((task) => task.completed)) {
      this.clearCompletedBtn.classList.remove("visible");
    } else {
      this.clearCompletedBtn.classList.add("visible");
    }

    this.taskList.innerHTML = "";

    const filteredTasks = this.tasks.filter((task) => {
      if (this.activeTab === "all") {
        return true;
      } else if (this.activeTab === "active") {
        return !task.completed;
      } else if (this.activeTab === "completed") {
        return task.completed;
      }
    });

    filteredTasks.forEach((task) => {
      const taskBlock = document.createElement("div");
      taskBlock.classList.add("task_block");
      const taskDoneBtn = document.createElement("button");
      taskDoneBtn.classList.add("complete_task_btn");
      taskDoneBtn.addEventListener("click", () => {
        task.completed = !task.completed;
        this.renderTasks();
      });
      const taskLabel = document.createElement("label");
      taskLabel.classList.add("task_label");
      taskLabel.textContent = task.value;
      taskLabel.addEventListener("dblclick", () => {
        let originalTaskText = task.value;
        taskDoneBtn.style.visibility = "hidden";
        taskDeleteBtn.style.display = "none";
        const editTaskInput = document.createElement("input");
        editTaskInput.classList.add("edit_input");
        editTaskInput.style.border = "1px solid black";
        editTaskInput.value = taskLabel.textContent;
        taskLabel.replaceWith(editTaskInput);
        editTaskInput.focus();

        editTaskInput.onchange = editTaskInput.onkeyup = (e) => {
          if (e.key == "Enter" || e.type == "change") {
            taskDoneBtn.style.visibility = "visible";
            taskDeleteBtn.style.display = "block";
            editTaskInput.replaceWith(taskLabel);
            task.value = editTaskInput.value;
            taskLabel.textContent = task.value;

            if (taskLabel.textContent.length === 0) {
              this.tasks = this.tasks.filter((item) => item.id !== task.id);
              taskBlock.remove();
              this.activeTasksCounter();
            }
          }
          if (e.key == "Escape") {
            taskDoneBtn.style.visibility = "visible";
            taskDeleteBtn.style.display = "block";
            editTaskInput.value = originalTaskText;
            taskLabel.textContent = editTaskInput.value;
            editTaskInput.replaceWith(taskLabel);
          }
          localStorage.setItem("tasks", JSON.stringify(this.tasks));
        };
      });

      const taskDeleteBtn = document.createElement("button");
      taskDeleteBtn.classList.add("delete_task_btn");
      taskDeleteBtn.addEventListener("click", () => {
        this.tasks = this.tasks.filter((t) => t.id !== task.id);
        localStorage.setItem("tasks", JSON.stringify(this.tasks));
        this.renderTasks();
      });
      if (task.completed) {
        taskLabel.classList.toggle("done");
        taskDoneBtn.classList.toggle("complete_task_btn");
        taskDoneBtn.classList.toggle("complete_task_btn_done");
        localStorage.setItem("tasks", JSON.stringify(this.tasks));
      }
      taskBlock.appendChild(taskDoneBtn);
      taskBlock.appendChild(taskLabel);
      taskBlock.appendChild(taskDeleteBtn);
      this.taskList.appendChild(taskBlock);
    });
    this.activeTasksCounter();
  }
  allTasksDone() {
    let allTasksCompletedState = false;
    this.completeAllTasksBtn.addEventListener("click", () => {
      this.tasks.forEach((task) => (task.completed = !allTasksCompletedState));
      allTasksCompletedState = !allTasksCompletedState;
      this.completeAllTasksBtn.classList.toggle("active_all_tasks_btn");
      localStorage.setItem("tasks", JSON.stringify(this.tasks));
      this.renderTasks();
    });
  }
  selectTab() {
    this.tabs.forEach((tab) => {
      tab.addEventListener("click", () => {
        this.activeTab = tab.dataset.tab;
        this.renderTasks();
      });
    });
  }
  addNewTask() {
    this.newTaskInput.onblur = this.newTaskInput.onkeyup = (e) => {
      if (e.key == "Enter" || e.type == "blur") {
        if (this.newTaskInput.value.trim()) {
          const uniqueId = Math.random().toString(36).substr(2, 9);
          const task = {
            id: uniqueId,
            value: this.newTaskInput.value.trim(),
            completed: false,
          };
          this.tasks.unshift(task);
          localStorage.setItem("tasks", JSON.stringify(this.tasks));
          this.renderTasks();
          this.newTaskInput.value = "";
        }
      }
    };
  }
  delDonedTasks() {
    this.clearCompletedBtn.addEventListener("click", () => {
      this.tasks = this.tasks.filter((task) => !task.completed);
      localStorage.setItem("tasks", JSON.stringify(this.tasks));
      this.renderTasks();
    });
  }
  activeTasksCounter() {
    this.countTask.innerText = `${this.tasks.filter((task) => !task.completed).length} items left`;
  }
  render() {
    this.tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    this.renderTasks();
    this.allTasksDone();
    this.selectTab();
    this.addNewTask();
    this.delDonedTasks();
  }
}

const todoList = new TodoList();
