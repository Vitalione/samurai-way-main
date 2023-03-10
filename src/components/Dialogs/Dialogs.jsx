import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {

    let path= "/dialogs/" + props.id

    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink  to={path}>{props.name}</NavLink>
        </div>
    )
}

const  Message = (props) => {
    return (
            <div className={s.dialog}>{props.message}</div>
    )
}

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name={"Vital"} id={"1"}/>
                <DialogItem name={"Evgeny"} id={"2"}/>
                <DialogItem name={"Alex"} id={"3"}/>
                <DialogItem name={"Stepan"} id={"4"}/>
                <DialogItem name={"Katty"} id={"5"}/>
                <DialogItem name={"Helen"} id={"6"}/>
            </div>
            <div className={s.messages}>
            <Message message={"Hi"}/>
            <Message message={"How are you"}/>
            <Message message={"Yo"}/>
            <Message message={"Yo"}/>
            <Message message={"Yo"}/>
            </div>
        </div>
    )
}

export default Dialogs;