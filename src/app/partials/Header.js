import React from 'react'
import { Link } from 'react-router-dom'

export const Header = (props) => {

    return (
        <div className="navbar-fixed">
            <nav >
                <div className="nav-wrapper blue-grey darken-4">
                    <a className="brand-logo" href="/">BitShow</a>
                    <div className="right input-field">
                        <i className="material-icons prefix">search</i>
                        <input onChange={props.searchShows} id="search" type="text" placeholder="Search for shows" value={props.searchValue}  />
                        <div className="dropUl">
                            {props.dropDown?props.dropDown.map(show => <Link to={`/show/${show.id}`}  key={show.id} onClick={props.clearSearch} ><p className="drop">{show.title}</p></Link> ): null}
                        </ div >
                    </div>
                </div>
            </nav>
        </div>
    )
}

