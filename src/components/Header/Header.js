import React, { useContext } from 'react';
import { SettingsContext } from '../../Context/Settings';

const Header = (props) => {

  const theme = useContext(SettingsContext);

  return(
    <>
    <h1>To Do List: {props.incomplete} items pending</h1>
    </>
  )
}

export default Header