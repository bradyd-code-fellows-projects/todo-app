import React from 'react';
import { Button, Card, Elevation } from '@blueprintjs/core';
import './List.scss'

const List = (props) => {
  return (
    <>
      {props.list.map(( item, idx) => (
        <Card id='list-card' interactive={true} elevation={Elevation.TWO} key={idx}>
          <h4>{item.text}</h4>
          <p>Assigned to: {item.assignee}</p>
          <p>Difficulty: {item.difficulty}</p>
        </Card>
      ))}
    </>
  )
}

export default List