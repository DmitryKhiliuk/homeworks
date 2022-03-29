import React from 'react'
import classes from "./Message.module.css";

type MessagePropsType = {
    avatar: string,
    name: string,
    message: string,
    time: string,
}


function Message(props: MessagePropsType) {
    return (
        <div className={classes.message}>
            <img className={classes.avatar} src={props.avatar} alt=""/>
            <div className={classes.bubble}>
                <div className={classes.name}>{props.name}</div>
                <div className={classes.text}>{props.message}</div>
                <div className={classes.time}>{props.time}</div>
            </div>
        </div>
    )
}

export default Message
