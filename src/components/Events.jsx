import React from 'react';
import "../index.css";
const Events = (props) => {
  return (
   <td className={'Event ' + props.color}>
    <h5>{props.event}</h5>
    <h6>{props.location}</h6>
   </td>
  )
}

export default Events