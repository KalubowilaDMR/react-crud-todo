
export const Task = (props) => {
    return(
        <div 
        className="task" 
        style={{ 
            backgroundColor: props.completed ? "green" : "white",
            color: props.completed ? "white" : "black"
         }}
        >
            <h3>{props.taskName}</h3>
            <button 
                className="completeBtn" 
                style={{
                    backgroundColor: props.completed ? "greenyellow" : "white",
                    color: props.completed ? "black" : "black"
                }} 
                onClick={() => props.completedTask(props.id)}
                >{props.completed ? "completed" : "click to complete"}</button>
            <button className="delBtn" onClick={() => props.deleteTask(props.id)}>X</button>
        </div>
    );
};
