export const fetchTasks = () => {
    fetch("http://localhost:3000/tasks")
        .then((response => response.json()))
}

export const createTask = (task) => {
    fetch("http://localhost:3000/tasks", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(task)
    }
    ).then((response => response.json()))
}

export const updateTask = (id, task) => {
    fetch(`http://localhost:3000/tasks/${id}`, {
        method: "PUT",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(task)
    }).then((response) => response.json())
}


export const deleteTask = (id) => {
    fetch(`http://localhost:3000/tasks/${id}`, {
        method: "DELETE",
        headers: {
            'Content-Type': 'application/json'
        },
    }).then((response) => response.json())
}