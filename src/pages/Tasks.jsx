import { useState } from "react"

function Tasks() {
  const [tasks, setTasks] = useState([
    { text: "Finish React notes", done: false },
    { text: "Revise HTML", done: false },
    { text: "Complete college project", done: false },
  ])
  const [newTask, setNewTask] = useState("")

  function addTask() {
    if (newTask === "") {
      return
    }
    setTasks([...tasks, { text: newTask, done: false }])
    setNewTask("")
  }

  function deleteTask(indexToDelete) {
    setTasks(tasks.filter((_, index) => index !== indexToDelete))
  }

  function toggleTask(indexToToggle) {
    setTasks(
      tasks.map((task, index) =>
        index === indexToToggle ? { text: task.text, done: !task.done } : task
      )
    )
  }

  return (
    <div className="page">
      <h2>My Tasks</h2>

      <input
        type="text"
        placeholder="Enter a task"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <button onClick={addTask}>Add</button>

      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            <span
              className={task.done ? "done" : ""}
              onClick={() => toggleTask(index)}
            >
              {task.text}
            </span>
            <button onClick={() => deleteTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Tasks



// import { useState } from "react"

// function Tasks() {
//   const [tasks, setTasks] = useState(["Finish React notes", "Revise HTML", "Complete college project"])
//   const [newTask, setNewTask] = useState("")

//   function addTask() {
//     if (newTask === "") {
//       return
//     }
//     setTasks([...tasks, newTask])
//     setNewTask("")
//   }

//   function deleteTask(indexToDelete) {
//     const newList = tasks.filter((_, index) => index !== indexToDelete)
//     setTasks(newList)
//   }

//   return (
//     <div>
//       <h2>My Tasks</h2>

//       <input
//         type="text"
//         placeholder="Enter a task"
//         value={newTask}
//         onChange={(e) => setNewTask(e.target.value)}
//       />
//       <button onClick={addTask}>Add</button>

//       <ul>
//         {tasks.map((task, index) => (
//           <li key={index}>
//             {task}
//             <button onClick={() => deleteTask(index)}>Delete</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   )
// }

// export default Tasks






// import { useState } from "react"

// function Tasks() {
//   const [tasks, setTasks] = useState(["Finish React notes", "Revise HTML", "Complete college project"])
//   const [newTask, setNewTask] = useState("")

//   function addTask() {
//     if (newTask === "") {
//       return
//     }
//     setTasks([...tasks, newTask])
//     setNewTask("")
//   }

//   return (
//     <div>
//       <h2>My Tasks</h2>

//       <input
//         type="text"
//         placeholder="Enter a task"
//         value={newTask}
//         onChange={(e) => setNewTask(e.target.value)}
//       />
//       <button onClick={addTask}>Add</button>

//       <ul>
//         {tasks.map((task, index) => (
//           <li key={index}>{task}</li>
//         ))}
//       </ul>
//     </div>
//   )
// }

// export default Tasks



// function Tasks() {
//   const tasks = ["Finish React notes", "Revise HTML", "Complete college project", "Go for a walk"]
// import { useState } from "react"


// function Tasks() {
//   const [newTask, setNewTask] = useState(["Finish React notes", "Revise HTML", "Complete college project"])
//    return (
//     <div>
//         <h2>My Tasks</h2>

        // {/* <input type="text" placeholder="Enter a task" /> */}
        // <input
        // type="text"
        // placeholder="Enter a task"
        // value={newTask}
        // onChange={(e) => setNewTask(e.target.value)}
        //  />
        // <button>Add</button>

        // <ul>
            // {/* {tasks.map(function (task, index) {
            // return <li key={index}>{task}</li>
            // })} */}
//             {tasks.map((task, index) => (
//                 <li key={index}>{task}</li>
//             ))}
//         </ul>
//     </div>
//    )
// }
// export default Tasks

// import { useState } from "react"

// function Tasks() {
//   const [tasks, setTasks] = useState(["Finish React notes", "Revise HTML", "Complete college project"])
//   const [newTask, setNewTask] = useState("")

//   return (
//     <div>
//       <h2>My Tasks</h2>

//       <input
//         type="text"
//         placeholder="Enter a task"
//         value={newTask}
//         onChange={(e) => setNewTask(e.target.value)}
//       />
//       <button>Add</button>

//       <p>You typed: {newTask}</p>

//       <ul>
//         {tasks.map((task, index) => (
//           <li key={index}>{task}</li>
//         ))}
//       </ul>
//     </div>
//   )
// }

// export default Tasks

