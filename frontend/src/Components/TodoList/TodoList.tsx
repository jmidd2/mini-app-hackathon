import React from 'react';
import { TodoWithAuthor } from '../../types/Events';

interface TodoListItemProps {
  item: TodoWithAuthor;
  deleteItem: Function,
  finishItem: Function
}

function displayDate(d: Date) {
  const date = new Date(d);
  return `${date.getMonth()}/${date.getDate()}/${date.getFullYear()}`;
}

function TodoListItem({ item, deleteItem, finishItem }: TodoListItemProps) {
  // const { deleteTask, finishTask } = useContext(ListContext);
  return (
    <div
      className={ `list-group-item ${
        item.completed ? 'text-decoration-line-through' : ''
      }` }
    >
      <div className="w-100 d-flex justify-content-between">
        <h5>
          {item.title}
        </h5>
        <div className="btn-group">
          <button
            type="button"
            className={ `btn btn-outline-success ${item.completed && 'disabled'}` }
            onClick={ () => {
              finishItem(item);
            } }
          >
            <i className="bi bi-check-lg" />
          </button>
          <button
            type="button"
            className={ `btn btn-outline-danger ${item.completed && 'disabled'}` }
            onClick={ () => {
              deleteItem(item);
            } }
          >
            <i className="bi bi-trash" />
          </button>
        </div>
      </div>
      {item.content && (
        <p>
          {item.content}
        </p>
      )}
      <small>
        {`Started on: ${displayDate(item.createdAt)}`}
      </small>
    </div>
  );
}

interface TodoListProps {
  items: TodoWithAuthor[],
  deleteItem: Function,
  finishItem: Function
}

function TodoList({ items, deleteItem, finishItem }: TodoListProps) {
  return (
    <div className="list-group my-3">
      {' '}
      {items.map((item: TodoWithAuthor) => (
        <TodoListItem
          key={ item.id }
          item={ item }
          deleteItem={ deleteItem }
          finishItem={ finishItem }
        />
      ))}
      {' '}
    </div>
  );
}

export default TodoList;
