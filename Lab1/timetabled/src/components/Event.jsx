import React from 'react';

const Event = (prop) => {
    return (
        <td className={'Event ' + prop.color}>
            <h5>{prop.eventname}</h5>
            <h6>{prop.location}</h6>
        </td>
    )
}

export default Event;