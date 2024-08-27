import React, { useState, useEffect } from "react";
import {
  collection,
  addDoc,
  getDocs,
  updateDoc,
  doc,
} from "firebase/firestore";
import { firestore } from "../../Config/Firebase";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import toast styles

export default function CountDownBoard() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleSubmitTask = async (e) => {
    e.preventDefault();
    e.target.reset();

    if (!task.trim()) {
      return toast.error("Task cannot be empty");
    }

    try {
      const docRef = await addDoc(collection(firestore, "users"), {
        task: task,
        status: "Todo", // New tasks start with a 'Todo' status
      });
      console.log("Document written with ID: ", docRef.id);
      toast.success("Task Added");

      fetchTasks(); // Refresh the task list after adding a new task
    } catch (e) {
      console.error("Error adding document: ", e);
      toast.error("Error Occurred");
    }
  };

  const fetchTasks = async () => {
    try {
      const querySnapshot = await getDocs(collection(firestore, "users"));
      const fetchedTasks = [];
      querySnapshot.forEach((doc) => {
        fetchedTasks.push({ id: doc.id, ...doc.data() });
      });
      setTasks(fetchedTasks);
    } catch (e) {
      console.error("Error fetching tasks: ", e);
    }
  };

  const updateTaskStatus = async (taskId, newStatus) => {
    try {
      const taskDoc = doc(firestore, "users", taskId);
      await updateDoc(taskDoc, {
        status: newStatus,
      });
      fetchTasks(); // Refresh the task list after updating a task's status
    } catch (e) {
      console.error("Error updating task status: ", e);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h3 className=" text-white mt-4">
            Web & Mobile Application Development
          </h3>
          <h3 className=" text-white mt-4">Hackathone 2024-25</h3>
          <h3 className="text-center text-white mt-4">Countdown Board</h3>
        </div>
        <div className="row">
          <form className="form" onSubmit={handleSubmitTask}>
            <div className="row align-items-center">
              <div className="col-8">
                <input
                  className="form-control form-control-lg"
                  type="text"
                  placeholder="Enter Task"
                  onChange={(e) => setTask(e.target.value)}
                />
              </div>
              <div className="col-4">
                <button className="btn btn-success btn-lg">Add Task</button>
              </div>
              <div className="row mt-5">
                <div className="col-4">
                  <h2 className="text-white">Todo's</h2>
                  <hr className="text-white" />
                  <ul className="list-group d-flex justify-content-center">
                    {tasks
                      .filter((task) => task.status === "Todo")
                      .map((task) => (
                        <li
                          key={task.id}
                          className="list-group-item d-flex justify-content-between bg-transparent text-white"
                        >
                          {task.task}
                          <button
                            className="btn btn-sm btn-danger"
                            onClick={() =>
                              updateTaskStatus(task.id, "In Progress")
                            }
                          >
                            Move to Progress
                          </button>
                        </li>
                      ))}
                  </ul>
                </div>
                <div className="col-4">
                  <h2 className="text-white">In Progress</h2>
                  <hr className="text-white" />
                  <ul className="list-group d-flex justify-content-center">
                    {tasks
                      .filter((task) => task.status === "In Progress")
                      .map((task) => (
                        <li
                          key={task.id}
                          className="list-group-item d-flex justify-content-between bg-transparent text-white"
                        >
                          {task.task}
                          <button
                            className="btn btn-sm btn-danger"
                            onClick={() =>
                              updateTaskStatus(task.id, "Completed")
                            }
                          >
                            Move to Completed
                          </button>
                        </li>
                      ))}
                  </ul>
                </div>
                <div className="col-4">
                  <h2 className="text-white">Completed</h2>
                  <hr className="text-white" />
                  <ul className="list-group d-flex justify-content-center">
                    {tasks
                      .filter((task) => task.status === "Completed")
                      .map((task) => (
                        <li
                          key={task.id}
                          className="list-group-item d-flex justify-content-between bg-transparent text-white"
                        >
                          {task.task}
                          {/* The button below can be removed or replaced based on your needs */}
                          <button className="btn btn-sm btn-success ms-4">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              className="bi bi-check-circle-fill"
                              viewBox="0 0 16 16"
                            >
                              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                            </svg>
                          </button>
                        </li>
                      ))}
                  </ul>
                </div>
              </div>
            </div>
          </form>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
}
