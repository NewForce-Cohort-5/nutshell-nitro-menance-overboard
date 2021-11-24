import { useTasks } from "./TaskDataProvider.js";
import { Task } from "./Task.js";



export const TaskList = () => {

  const tasksArray = useTasks();
  return tasksArray.map(singleTask => {
    if (!singleTask.completed && singleTask.userId === +sessionStorage.activeUser){
      return Task(singleTask);
    }
  }).join('');
    
};

export const CompletedTaskList = () => {

  const tasksArray = useTasks();
  return tasksArray.map(singleTask => {
    if (singleTask.completed === true && singleTask.userId === +sessionStorage.activeUser){
      return Task(singleTask);
    }
  }).join('');
    
};