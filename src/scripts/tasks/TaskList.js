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

// Component that tracks progress of completed task vs total tasks
export const CompletedProgress = () => {
  // const progressBar= document.querySelector('.progress-bar')

  const tasksArray = useTasks();
  let totalTasks = tasksArray.length;

  const completedTasksArray = tasksArray.filter(singleTask => {
    if ((singleTask.userId === +sessionStorage.activeUser) && singleTask.completed){
      return singleTask
    }
  })

  let completedTasks = completedTasksArray.length;
  let completedProgressPercentage = Math.round((completedTasks/totalTasks) * 100);
  console.log(`Completed Tasks for user id ${sessionStorage.activeUser}: ${completedTasks}`)
  console.log(`Total Tasks for user id ${sessionStorage.activeUser}: ${totalTasks}`)
  console.log(`Percentage completed for user id ${sessionStorage.activeUser}: ${completedProgressPercentage}`)
 
  return `
    <div class="progress-bar progress-bar-striped bg-success" role="progressbar" style="width: ${completedProgressPercentage}%; height:100%;" aria-valuenow="${completedProgressPercentage}" aria-valuemin="0" aria-valuemax="100">${completedProgressPercentage}%</div>
  `
}