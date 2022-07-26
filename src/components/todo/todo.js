import React, { useEffect, useState, useContext } from 'react';
import useForm from '../../hooks/form.js';
import { SettingsContext } from '../../Context/Settings';
import Header from '../Header/Header'
import List from '../List/List';

import { v4 as uuid } from 'uuid';

const ToDo = () => {

  const settings = useContext(SettingsContext);
  const [defaultValues] = useState({
    difficulty: 4,
  });
  const [list, setList] = useState([]);
  const [incomplete, setIncomplete] = useState([]);

  const addItem = (item) => {
    item.id = uuid();
    item.complete = settings.completed;
    console.log(item);
    setList([...list, item]);
  }

  const { handleChange, handleSubmit } = useForm(addItem, defaultValues);

  const deleteItem = (id) => {
    const items = list.filter(item => item.id !== id);
    setList(items);
  }

  const toggleComplete = (id) => {

    const items = list.map(item => {
      if (item.id === id) {
        item.complete = !item.complete;
      }
      return item;
    });

    setList(items);

  }

  useEffect(() => {
    let incompleteCount = list.filter(item => !item.complete).length;
    setIncomplete(incompleteCount);
    document.title = `To Do List: ${incomplete}`;
  }, [list]);

  return (
    <>
      <Header incomplete={incomplete} />

      <form onSubmit={handleSubmit}>

        <h2>Add To Do Item</h2>

        <label>
          <span>To Do Item</span>
          <input onChange={handleChange} name="text" type="text" placeholder="Item Details" />
        </label>

        <label>
          <span>Assigned To</span>
          <input onChange={handleChange} name="assignee" type="text" placeholder="Assignee Name" />
        </label>

        <label>
          <span>Difficulty</span>
          <input onChange={handleChange} defaultValue={defaultValues.difficulty} type="range" min={1} max={5} name="difficulty" />
        </label>

        <label>
          <button type="submit">Add Item</button>
        </label>
      </form>

      < List list={list} />

      {/* {list.map(item => (
        <div key={item.id}>
          <p>{item.text}</p>
          <p><small>Assigned to: {item.assignee}</small></p>
          <p><small>Difficulty: {item.difficulty}</small></p>
          <div onClick={() => toggleComplete(item.id)}>Complete: {item.complete.toString()}</div>
          <hr />
        </div>
      ))} */}

    </>
  );
};

export default ToDo;
