export function addTask(db, title) {
            const d = new Date();
            const today = `${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()}`;

            db.push({ id: Number(db.length) + 1, title: title, done: false, dueDate: today });
            document.querySelector('.tasks').innerHTML = "";
            console.log(db);
}

export function removeTask() {
    alert("Removendo uma nova tarefa");
}

export function updateTask() {
    alert("Alterando uma tarefa");
}

export function getAllTasks(db) {
    db.forEach((item) => {
        const task = document.createElement('div');
        task.classList.add('task');
        task.setAttribute('id', item.id);

        const taskBody = `
    <div><input type="checkbox" id="check_${item.id}"></div>
                <div>
                    <div><span class="title-task">${db.title ? db.title : item.title}</span></div>
                </div>
                <div>Star</div>
    `;
        task.innerHTML = taskBody;
        document.querySelector('.tasks').appendChild(task);

    });
}

export function getTaskById() {
    alert("Exibindo uma tarefa");
}