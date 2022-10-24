import React from 'react'
import { RiDeleteBin6Fill } from "react-icons/ri"
import axios from "axios";


const TaskList = ({ task, getTask }) => {
    const deleteTask = async (id) => {
        const url = "https://6354e5a8da523ceadcf5e891.mockapi.io/api/tasks"
        try {
            await axios.delete(`${url}/${id}`)
        } catch (error) {

        }
    }
    getTask();
    return (
        <div>
            {task.map((item) => {
                const { id, task, date } = item;
                return (
                    <div
                        key={id}
                        className='mt-2 d-flex justify-content-between bg-secondary rounded-4 p-2'>
                        <div>
                            <h4>{task}</h4>
                            <p>{date}</p>
                        </div>
                        <div>
                            <RiDeleteBin6Fill
                                onClick={() => { deleteTask(id) }} style={{
                                    curser: "pointer",
                                    marginRight: "20px",
                                    fontSize: "1.5rem",
                                    boxShadow: "2px 2px 2px ##ECAB9E"
                                }} />
                        </div>

                    </div>
                )
            })}
        </div>
    )
}

export default TaskList