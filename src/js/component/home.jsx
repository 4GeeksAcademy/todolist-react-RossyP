import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';
// import "../../styles/index.css"


const Home = () => {

	const [newInput, setNewInput] = useState("");
	const [tasks, setTasks] = useState(["Lavar los servicios", "Bañar al perro", "Practicar mi logica"]);
	const [isHoverRed, setIsHoverRed] = useState(false)

	function addTask(e){
		if(e.key === 'Enter'){
			// setTasks([...tasks, newInput])
			setTasks(currentTasks => currentTasks.concat(newInput))
			// setTasks(tasks.concat(newInput))
			e.target.value = "";
		}
	}

	function deleteButton(index) {
		setTasks(currentTasks => currentTasks.filter((task, i) => i !== index));
	}

	
	return (
		<div className="d-flex justify-content-center align-items-center min-vh-100">
			<div className="mx-auto w-100 bg-transparent d-flex flex-column p-5 justify-content-center align-items-center ">
				<div>
					<h1 className="fw-lighter fst-italic" style={{ fontSize:"100px", color: "#8038b1"}}>ToDo</h1>
				</div>
				<div className="w-50 bg-white rounded-3" style={{boxShadow: "5px 10px 10px gray"}}>
					<div className="w-100 p-2 px-5 py-3">
						<input className="w-100 border-0 fw-lighter fs-3 fst-italic" style={{outline:"none", color:"#bc7bed"}} type="text" name="" id="" placeholder="Ingresa nueva tarea" onChange={(e)=>setNewInput(e.target.value)} onKeyDown={addTask}/>
					</div>
					<div className="w-100 border m-0 p-0">
						<ul className="list-unstyled w-100 m-0 p-0">
						{tasks.length === 0 ? (
      						<li className="text-center w-100 fw-lighter fs-3 fst-italic " style={{color:"purple"}}>No hay tareas, añadir tareas</li>
    					) : (
      						tasks.map((task, index) => (task !== "" && (
								<li key={index} className="border-bottom p-2 px-5 py-3 text-start d-flex justify-content-between align-items-center fw-lighter fs-3 fst-italic">
									<span>{task}</span>
									<FontAwesomeIcon className="delete-btn" icon={faX} onClick={() => deleteButton(index)}/>
								</li>
								)
							))
							)}
						</ul>
					</div>
					<div className="w-100 p-3  pb-1">
						<p className="fw-light fst-italic" style={{fontFamily: 'Arial', fontSize:"12px"}}>{tasks.length} {tasks.length === 1 ? "Item" : "Items"} </p>
					</div>
				</div>
				
			</div>
		</div>
	);
};

export default Home;
