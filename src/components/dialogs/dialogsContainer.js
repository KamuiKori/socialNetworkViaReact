import React from 'react'
import style from './dialogs.module.css'
import DialogItem from './DialogItem/dialogItem'
import Message from './Message/message'
import {sendMessageCreator, updateNewMessageBodyCreator} from "../redux/messagesReducer";
import Dialogs from "./dialogs";
import {connect} from "react-redux";
import Redirect from "react-router-dom/es/Redirect";
import {withAuthRedirect} from "../hoc/withAuthRedirect";
import {compose} from "redux";



let mapStateToProps = (state)=> {
    return {
        messagesPage:state.messagesPage,
    }
}
let mapDispatchToProps = (dispatch)=> {
    return {
        updateNewMessageBody:(body)=>{
            dispatch(updateNewMessageBodyCreator(body))
        },
        sendMessage:()=>{
            dispatch(sendMessageCreator())
        }
    }
}


export default compose(
    connect(mapStateToProps,mapDispatchToProps),
    withAuthRedirect
)(Dialogs)