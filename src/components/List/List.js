import React, { useState, useContext } from 'react';
import { Button, Card, Elevation } from '@blueprintjs/core';
import { SettingsContext } from '../../Context/Settings';

import './List.scss'

const List = ({list, toggleComplete}) => {

  const settings = useContext(SettingsContext);
  const [ page, setPage ] = useState(0);

  const renderList = list.filter(item => settings.completed ? true : !item.complete);
  const start = settings.itemsPerScreen * page || 0;
  const end = start + settings.itemsPerScreen || list.length;
  const pages = new Array(Math.ceil(renderList.length / settings.itemsPerScreen)).fill('');

  const displayList = renderList ? renderList.slice(start, end) : [];

  return (
    <>
      {displayList.map(item => (
        <Card id='list-card' interactive={true} elevation={Elevation.TWO} key={item.id}>
          <h4>{item.text}</h4>
          <p>Assigned to: {item.assignee}</p>
          <p>Difficulty: {item.difficulty}</p>
          <div onClick={() => toggleComplete(item.id)}>Complete: {item.complete.toString()}</div>
        </Card>
      ))}
      {
        pages.map((n, idx) => (
          <Button key={`page-${idx}`} onClick={() => setPage(idx)}>{idx + 1}</Button>
        ))
      }
    </>
  )
}

export default List