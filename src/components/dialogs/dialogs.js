import React from 'react'
import style from './dialogs.module.css'
import DialogItem from './DialogItem/dialogItem'
import Message from './Message/message'
import Redirect from "react-router-dom/es/Redirect";


const Dialogs = (props) => {

    let state = props.messagesPage

    let messageText = React.createRef()

    let addMessage = () => {
        let text = messageText.current.value
        alert(text)
    }
    let newMessageBody = state.newMessageBody

    let dialogsElements = state.dialogs.map((e) => <DialogItem key={e.id} name={e.name} id={e.id}
                                                               avatar={e.avatar}/>)
    let messagesElements = state.messages.map(e => <Message key={e.id} message={e.message}/>)

    let onSendMessageClick = () => {
        props.sendMessage()
    }
    let onNewMessageChange = (e) => {
        let body = e.target.value
        props.updateNewMessageBody(body)
    }

    let div = <>
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={style.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div>
                        <button onClick={onSendMessageClick}>Отправить сообщение</button>
                    </div>
                    <div><textarea
                        value={newMessageBody}
                        placeholder={'Enter your message'}
                        ref={messageText}
                        onChange={onNewMessageChange}
                    /></div>
                </div>
            </div>
        </div>
    </>;
    return div
}
export default Dialogs