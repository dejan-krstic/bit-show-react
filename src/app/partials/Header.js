import React from 'react'

export const Header = (props => {
    return (
        <nav>
            <div className="nav-wrapper teal darken-4">
                <a className="brand-logo">BitShow</a>
                <div className="right input-field">
                    <i className="material-icons prefix">search</i>
                    <input onChange={props.searchDropDown} id="search" type="text" placeholder="Search for shows"/>
                </div>
            </div>
        </nav>
    )
})