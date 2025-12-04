import React from "react";

const TodoItems = ({ task, deleteTask, toggleTask }) => {
  return (
    <div
      style={{display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: '50px', marginBottom: "10px", padding: "8px", border: "1px solid #ccc", borderRadius: "5px",
      }}
    >
      <span
        style={{textDecoration: "none"}}   // ✅ 1-line styling change (no strikethrough)
      >
        {task.text}
      </span>

      {/* {
        task.completed && (<button onClick={() => deleteTask(task.id)}
        style={{background: "red", color: "white", border: "none", padding: "4px 8px", borderRadius: "4px", cursor: "pointer"}}
      >
        Delete
      </button> )
      } */}

      {/* ✅ New toggle button */}
      <button onClick={() => toggleTask(task.id)}
        style={{marginRight: "6px", padding: "4px 8px", border: 'none', borderRadius: '5px', background: '#f3e76bff', cursor: "pointer"}}
      >
        {task.completed ? "Completed" : "Incomplete"}
      </button>

      <button onClick={() => deleteTask(task.id)}
        style={{background: "red", color: "white", border: "none", padding: "4px 8px", borderRadius: "4px", cursor: "pointer"}}
      >
        Delete
      </button>
      
    </div>
  );
};

export default TodoItems;






// import React from "react";

// const TodoItems = ({ task, deleteTask, toggleTask }) => {
//   return (
//     <div
//       style={{display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px", padding: "8px", border: "1px solid #ccc", borderRadius: "5px",
//       }}
//     >
//       <span onClick={() => toggleTask(task.id)}
//         style={{textDecoration: task.completed ? "line-through" : "none", cursor: "pointer"}}
//       >
//         {task.text}
//       </span>

//       {/* {
//         task.completed && (<button onClick={() => deleteTask(task.id)}
//         style={{background: "red", color: "white", border: "none", padding: "4px 8px", borderRadius: "4px", cursor: "pointer"}}
//       >
//         Delete
//       </button> )
//       } */}
//       <button onClick={() => deleteTask(task.id)}
//         style={{background: "red", color: "white", border: "none", padding: "4px 8px", borderRadius: "4px", cursor: "pointer"}}
//       >
//         Delete
//       </button>
      
//     </div>
//   );
// };

// export default TodoItems;
