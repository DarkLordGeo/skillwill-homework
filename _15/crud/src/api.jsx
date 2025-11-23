

export const deleteTask = (id) => {
    fetch(`http://localhost:3000/tasks/${id}`, {
        method: "DELETE",
        headers: {
            'Content-Type': 'application/json'
        },
    }).then((response) => response.json())
}