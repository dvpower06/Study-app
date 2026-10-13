import { useState, useRef } from "react";
import './App.css'

function Pomodoro() {
  const [timeLeft, settimeLeft] = useState(1500);
  const intervalRef = useRef(null);
  const [buttonText, changeText] = useState('Start');
  const [isTimerRunning, setIsTimerRunning] = useState(false);


  function resetTimer() {
    settimeLeft(1500);
    changeText('START');

  }

  function startTimer() {
    setIsTimerRunning(true);

    intervalRef.current = setInterval(() => {
      settimeLeft((prevTimeLeft) => {
        if (prevTimeLeft <= 0) {
          clearInterval(intervalRef.current)
          intervalRef.current = null
          return 0
        }
        return prevTimeLeft - 1
      });

    }, 1000);
  }

  function stopTimer() {
    setIsTimerRunning(false);
    clearInterval(intervalRef.current);
    changeText('CONTINUE');
  }

  return (
    <>
      <div className='timer'>
        <h2>{String(Math.floor(timeLeft / 60)).padStart(2, "0")}</h2>
        <h2>:</h2>
        <h2>{String(timeLeft % 60).padStart(2, "0")}</h2>
      </div>
      <div className='buttons'>
        <button className='start' onClick={startTimer}>{buttonText}</button>
        {isTimerRunning && (
          <button className='stop' onClick={stopTimer}>STOP</button>
        )}
        {!isTimerRunning && (
          <button className='stop' onClick={resetTimer}>RESET</button>
        )}
      </div>

    </>
  )
}

function Tasks() {

  const [taskText, setTaskText] = useState('');

  const [tasks, setTasks] = useState([]);

  function createTask() {

    const trimmedText = taskText.trim();
    if (!trimmedText)
      return;

    setTasks([...tasks, trimmedText]);

    setTaskText('');

  }

  function deleteTask(indexToDelete) {
    const updatedTasks = tasks.filter((_, index) => index !== indexToDelete);
    setTasks(updatedTasks);
  }

  return (
    <>
      <ul id="task-list">
        <input type="text"
          id="task-text"
          placeholder="new task..."
          value={taskText}
          onChange={(e) => setTaskText(e.target.value)}
        />

        <button onClick={createTask}>New task</button>

        {tasks.map((task, index) => (
          <li key={index}>
            <input type="checkbox" />
            {task}
            <button onClick={() => deleteTask(index)}>x</button>

          </li>
        ))}

      </ul>

    </>
  )
}


function App() {

  return (
    <>
      <h1>Study Session</h1>
      <div className='app-container'>
        <div className="pomodoro">
          <Pomodoro></Pomodoro>
        </div>
        <div className='tasks'>
          <Tasks></Tasks>
        </div>
      </div>

    </>
  )
}

export default App
