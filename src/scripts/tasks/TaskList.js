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

// Component that tracks progress of completed task vs total tasks
export const CompletedProgress = () => {

  const tasksArray = useTasks();

  const completedTasksArray = tasksArray.filter(singleTask => {
    if ((singleTask.userId === +sessionStorage.activeUser) && singleTask.completed){
      return singleTask
    }
  })

  const totalTasksArray = tasksArray.filter(singleTask => {
    if(singleTask.userId === +sessionStorage.activeUser) {
      return singleTask
    }
  })

  let totalTasks = totalTasksArray.length;
  let completedTasks = completedTasksArray.length;
  let completedProgressPercentage = Math.round((completedTasks/totalTasks) * 100);

  // console.log(`Completed Tasks for user id ${sessionStorage.activeUser}: ${completedTasks}`)
  // console.log(`Total Tasks for user id ${sessionStorage.activeUser}: ${totalTasks}`)
  // console.log(`Percentage completed for user id ${sessionStorage.activeUser}: ${completedProgressPercentage}`)
 
  return `
    <div class="progress-bar progress-bar-striped progress-bar-animated bg-success" role="progressbar" style="width: ${completedProgressPercentage}%; height:100%;" aria-valuenow="${completedProgressPercentage}" aria-valuemin="0" aria-valuemax="100">${completedProgressPercentage}% tasks completed</div>
  `
}

