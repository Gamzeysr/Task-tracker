import React, { useEffect, useState } from "react";
import TaskList from "../components/taskList/TaskList";
import AddTask from "../components/addTask/AddTask"
import Button from "react-bootstrap/Button"
import axios from "axios";

const Home = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [text, setText] = useState("Show Task Bar")
    const [task, setTask] = useState([]);
    const url = "https://6354e5a8da523ceadcf5e891.mockapi.io/api/tasks"

    const toggle = (e) => {
        setIsOpen(!isOpen);
        const buttonText = isOpen ? "Show Task Bar" : "Hide Task Bar"
        setText(buttonText);
    }

    // CRUD -READ--
    const getTask = async () => {
        const { data } = await axios(url)
        setTask(data);
        console.log(data)
    }
    useEffect(() => {
        getTask()
    }, [])

    return (
        <div className="mt-4 d-flex justify-content-center flex-column">
            <Button
                onClick={() => { toggle() }}
                variant="danger" size="lg">{text}Show Task Bar</Button>
            {isOpen && <AddTask />}
            <TaskList task={task} getTask={getTask} />
        </div>
    );
};

export default Home;
