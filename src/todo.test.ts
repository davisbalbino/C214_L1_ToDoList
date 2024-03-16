/* eslint-disable @typescript-eslint/no-explicit-any */
import { ToDoList } from "./ToDoList";

const anyTask = {
  title: "any_title",
  description: "any_description",
  targetDate: "01/01/2025",
  type: "any_type",
  priority: "1",
  subTasks: [],
};

const new_anyTask = {
  title: "new_any_title",
  description: "new_any_description",
  targetDate: "02/02/2026",
  type: "new_any_type",
  priority: "2",
  subTasks: [],
};

describe("ToDoList", () => {
  describe("Testing add", () => {
    test("should add a new task to the list", () => {
      const todoInstance = new ToDoList();
      todoInstance.add(anyTask);
      const tasks = todoInstance.getTasks();
      expect(tasks).toEqual([anyTask]);
    });

    test("should add a valid tasks", () => {
      const todoInstance = new ToDoList();
      const invalidValue: any = {
        invalidField: "invalidValue",
      };
      todoInstance.add(invalidValue);
      const tasks = todoInstance.getTasks();
      expect(tasks).toEqual([]);
    });

    test("should add a valid task and uptade por a new", () => {
      const todoInstance = new ToDoList();
      todoInstance.add(anyTask);
      todoInstance.updateTask(0, new_anyTask);
      const tasks = todoInstance.getTasks();
      expect(tasks).toEqual([new_anyTask]);
    });

    test("should add a task and delete", () => {
        const todoInstance = new ToDoList();
        todoInstance.add(anyTask);
        todoInstance.removeTask(0)
        const tasks = todoInstance.getTasks();
        expect(tasks).toEqual([]);
      });

  });
});
