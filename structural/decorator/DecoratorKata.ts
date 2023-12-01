type Status = "Not Started" | "In Progress" | "Completed";

interface Task {
  displayDetails(): string;
}

export class BaseTask implements Task {
  private id: string;
  private description: string;
  private status: Status;

  constructor(id: string, description: string, status: Status) {
    this.id = id;
    this.description = description;
    this.status = status;
  }

  displayDetails(): string {
    return `The task ${this.id} - ${this.description} is: ${this.status}.`;
  }
}

abstract class TaskDecorator implements Task {
  protected task: Task;

  constructor(task: Task) {
    this.task = task;
  }

  abstract displayDetails(): string;
}

type PriorityLevel = "Low" | "Medium" | "High";

export class PriorityDecorator extends TaskDecorator {
  private priority: PriorityLevel;

  constructor(task: Task, priority: PriorityLevel) {
    super(task);
    this.priority = priority;
  }

  displayDetails(): string {
    return `${this.task.displayDetails()}\nTask priority: ${this.priority}`;
  }
}

export class TaskManager {
  private listOfTasks: Task[] = [];

  addTask(task: Task): void {
    this.listOfTasks.push(task);
  }

  displayTasks(): string {
    return this.listOfTasks.map((task) => task.displayDetails()).join("\n");
  }
}

const toWriteABookTask = new BaseTask(
  "00001",
  "Write a book about a new way to learn design pattenrs",
  "Not Started"
);
const toWriteABookTaskWithPriority = new PriorityDecorator(
  toWriteABookTask,
  "Low"
);

const toReadCleanArchitectureBookTask = new BaseTask(
  "00002",
  "Read Clean Architecture by Uncle bob",
  "Not Started"
);
const toReadCleanArchitectureBookTaskWithPriority = new PriorityDecorator(
  toReadCleanArchitectureBookTask,
  "High"
);

const taskManager = new TaskManager();
taskManager.addTask(toReadCleanArchitectureBookTaskWithPriority);
taskManager.addTask(toWriteABookTaskWithPriority);

taskManager.displayTasks();
/* 
  Output:
    "The task 00001 - Play Mortal Kombat to get ready for the tournament is: In Progress.
    Task priority: Low
    The task 00002 - Learn English to become B2 is: In Progress.
    Task priority: High"
*/
