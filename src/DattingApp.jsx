import React from 'react'
import { NavLink } from 'react-router-dom';

const DattingApp = (props) => {
    return (
        <>
            <div className="search_profiles">
                <h3><span>{props.sub_title}</span> {props.title}</h3>
                <p>{props.desc}</p>
                <NavLink className="btn_sub" to={""}>{props.signup}</NavLink>
            </div>
        </>
    )
}

export default DattingApp;