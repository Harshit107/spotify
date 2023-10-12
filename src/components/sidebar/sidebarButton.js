import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import './sidebarButton.css'
import { IconContext } from 'react-icons';


export default function SidebarButton(props) {

    const isActive = useLocation().pathname === props.to;

    return <Link to={props.to}>
        <div className={isActive ? 'btn-body active' : 'btn-body'}>
            {props.icon}
            <p>{props.title}</p>

        </div>
    </Link>
}
