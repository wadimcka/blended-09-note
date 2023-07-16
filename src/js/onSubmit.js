import { addTasks } from './localeStorageApi.js';
import { createTask } from './createTask.js';
import { renderTask } from './renderTask.js';
import { refs } from './refs.js';


export function onSubmit(e) {
  e.preventDefault();
    const notes = createTask(e);
    addTasks(notes);
  renderTask(notes);
  refs.taskForm.reset();
};