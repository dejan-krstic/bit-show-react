import React from 'react';
import {Card} from './Card';
import { Link } from 'react-router-dom'

export const ShowGrid = (props) => {
    console.log(props.data);    
    return (
        <div className="row container">
            {props.data.map(show => <Link to={`/show/${show.id}`}> <Card  key={show.id} data={show} action={props.action}/></Link> )}
        </div>
    )
}