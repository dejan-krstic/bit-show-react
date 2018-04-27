import React from 'react';
import {Card} from './Card';

export const ShowGrid = (props) => {
    return (
        <div className="row container">
            {props.data.map((show => <Card key={show.id} data={show} action={props.action}/>))}
        </div>
    )
}