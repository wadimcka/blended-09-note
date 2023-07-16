const TASKS = 'notes';

export function addTasks(notes) {
    const tasks = getTasks();
    tasks.push(notes);
    localStorage.setItem(TASKS, JSON.stringify(tasks));
    
}

export function getTasks() {
    const tasks = JSON.parse(localStorage.getItem(TASKS)) || [];
    return tasks;
};

