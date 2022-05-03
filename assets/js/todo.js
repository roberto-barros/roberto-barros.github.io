import { addTask, getAllTasks } from "./utils/domFunctions.js";

const db = [
    {
        id: 1,
        title: 'Concluir App Conexão Arte',
        steps: [
            { step: 'Ajustar textos' },
            { step: 'Trocar imagens para imagens públicas' },
            { step: 'Públicar no Expo' },
            { step: 'Publicar no Expo Store Connect' },
        ],
        done: false,
        dueDate: '2022-05-06',
        reminder: '2022-05-02 10:00',
    },

    {
        id: 2,
        title: 'Aula 4 Fiap - Avanade',
        steps: [
            { step: 'Atributos Globais' }, { step: 'Estrutura CSS' }],
        done: false,
        dueDate: '2022-05-06',
        reminder: '2022-05-02 10:00',
    },
];

getAllTasks(db);

// console.log(db[0].title);

const form = document.querySelector('#addNewTask');
const newTask = document.querySelector('#inputTxtNewTask');

form.addEventListener('submit', (e) => {
    e.preventDefault();
});

newTask.addEventListener('keyup', (e) => {
    console.log('keyup');
    e.preventDefault();
    e.stopPropagation();
    if (e.key == 'Enter') {
        if (!newTask.value) {
            alert('Digite uma nova tarefa, para adicionar');
        } else {
            // alert(newTask.value);

            const d = new Date();
            const today = `${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()}`;

            db.push({ id: Number(db.length) + 1, title: newTask.value, done: false, dueDate: today });

            document.querySelector('.tasks').innerHTML = "";
            addTask(db, db.title);

            newTask.value = '';
            console.log(db);
        }
    }
});

