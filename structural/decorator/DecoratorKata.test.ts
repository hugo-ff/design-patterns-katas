import { BaseTask, PriorityDecorator, TaskManager } from "./DecoratorKata";

describe("Task Manager", () => {
  it("should display a list of tasks", () => {
    const toPlayMortalKombatTask = new BaseTask(
      "00001",
      "Play Mortal Kombat to get ready for the tournament",
      "In Progress"
    );
    const toPlayMortalKombatWithPriority = new PriorityDecorator(
      toPlayMortalKombatTask,
      "Low"
    );

    const toLearnEnglishTask = new BaseTask(
      "00002",
      "Learn English to become B2",
      "In Progress"
    );
    const toLearnEnglishWithPriority = new PriorityDecorator(
      toLearnEnglishTask,
      "High"
    );

    const taskManager = new TaskManager();
    taskManager.addTask(toPlayMortalKombatWithPriority);
    taskManager.addTask(toLearnEnglishWithPriority);

    const taskManagerListOfTasks = taskManager.displayTasks();

    expect(taskManagerListOfTasks).toMatchInlineSnapshot(`
    "The task 00001 - Play Mortal Kombat to get ready for the tournament is: In Progress.
    Task priority: Low
    The task 00002 - Learn English to become B2 is: In Progress.
    Task priority: High"
    `);
  });
});
