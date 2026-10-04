function Task() {
    return <h1>My Tasks</h1>
}
export default Task



function Tasks() {
  const tasks = ["Finish React notes", "Revise HTML", "Complete college project"]

  return (
    <div>
      <h1>My Tasks</h1>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </div>
  )
}

export default Tasks