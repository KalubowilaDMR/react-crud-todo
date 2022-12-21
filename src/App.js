import './App.css';
import {useState} from 'react';
import { Task } from './Task';

function App() {

  const [newTask , setNewTask] = useState([]);
  const [todoList , setTodoList] = useState("");

  const handleChange = (event) => {
    setTodoList(event.target.value)
  }

  const addTask = () => {
    // const addNewTask = [...todoList, newTask];
    // setNewTask(addNewTask)
    const task = {
      id : newTask.length === 0 ? 1 : newTask[newTask.length - 1].id + 1,
      taskName : todoList,
      completed : false,
    }
    setNewTask(task.taskName !== "" ? [...newTask, task] : newTask)
  }

  const deleteTask = (id) => {
    // const newTodoArray = newTask.filter((task) => {
    //     return task.id !== id
    // })

    setNewTask(newTask.filter((task) => task.id !== id));
  }

  const completedTask = (id) => {
    setNewTask(
      newTask.map((task) => {
        if(task.id === id){
          return { ...task, completed:true};
        }else{
          return task;
        }
      })
    );
  };

  return (
    <div className="App">
      <div className="addTask">
        <input type="text" onChange={handleChange}/>
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className="list">
        {newTask.map((task) => {
          return (
            <Task 
            taskName={task.taskName} 
            id={task.id} 
            completed={task.completed}
            deleteTask={deleteTask} 
            completedTask={completedTask}/>
          );
        })}
      </div>
    </div>
  );
}

export default App;
