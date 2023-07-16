import { getTasks } from './localeStorageApi.js';
import { refs } from './refs.js';

export function renderCards() {
  const markup = getTasks()
    .map(
      e => `<li class="task-list-item">
      <button class="task-list-item-btn" data-id="${e.id}">Удалить</button>
      <h3>${e.taskName}</h3>
      <p>${e.taskText}</p>
  </li>`
    )
    .join(' ');
  refs.taskList.insertAdjacentHTML('beforeend', markup);
}
