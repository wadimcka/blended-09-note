import { nanoid } from "nanoid";

export function createTask(e) {
    const notes = {id:nanoid()};
    new FormData(e.currentTarget).forEach((value, name) => (notes[name] = value));
    return notes;
}