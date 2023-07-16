import { refs } from "./refs";

export function renderTask(notes) {
    const markup = `<li class="task-list-item">
     <button class="task-list-item-btn" data-id="${notes.id}">Удалить</button>
      <h3>${notes.taskName}</h3>
      <p>${notes.taskText}</p>
  </li>`
  refs.taskList.insertAdjacentHTML('beforeend', markup);
};