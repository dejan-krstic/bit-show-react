import React from 'react'

export const Card = (props) => {
    return (
        <div className="col s12 m4">
            <div id={props.data.id} onClick={props.action} className="card">
                <div id={props.data.id} className="card-image">
                    <img id={props.data.id} src={props.data.picture} alt={props.data.name} />
                </div>
                <div id={props.data.id} className="card-content">
                    <p id={props.data.id}>{props.data.title}</p>
                </div>
            </div>
        </div>
    )
}