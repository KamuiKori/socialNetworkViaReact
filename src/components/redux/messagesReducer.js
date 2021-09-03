const UPDATENEWMESSAGEBODY = 'UPDATE_NEW_MESSAGE_BODY'
const SENDMESSAGE = 'SEND_MESSAGE'

let initialState = {
    dialogs: [
        {
            id: 1,
            key: 'asddgf',
            name: 'Pavel',
            avatar: 'https://cdn.iconscout.com/icon/free/png-512/boy-avatar-4-1129037.png'
        },
        {
            id: 2,
            key: 'dasghs',
            name: 'Sasha',
            avatar: 'https://toppng.com/uploads/preview/roger-berry-avatar-placeholder-11562991561rbrfzlng6h.png'
        },
        {
            id: 3,
            key: 'asd2f',
            name: 'Dimas',
            avatar: 'https://cdn.iconscout.com/icon/free/png-512/boy-avatar-4-1129037.png'
        },
        {
            id: 4,
            key: 'adszc',
            name: 'Sergey',
            avatar: 'https://toppng.com/uploads/preview/roger-berry-avatar-placeholder-11562991561rbrfzlng6h.png'
        }
    ],
    messages: [
        {id: 1, message: 'hi'},
        {id: 2, message: 'Whats up'},
        {id: 3, message: 'How are you'},
        {id: 4, message: 'Hello'}
    ],
    newMessageBody: ""
}

const messagesReducer = (state = initialState, action) =>{
    switch (action.type){
        case UPDATENEWMESSAGEBODY: {
            return {
                ...state,
                newMessageBody:action.body

            }
        }
        case SENDMESSAGE:
            let body = state.newMessageBody;
            return  {
                ...state,
                newMessageBody:'',
                messages:[...state.messages,{id: 5, message: body}]
            }
        default:
            return state;
    }
}

export const sendMessageCreator = () => {
    return {type:SENDMESSAGE}
}

export const updateNewMessageBodyCreator = (text)=>{
    return{type:UPDATENEWMESSAGEBODY,body:text}
}
export default messagesReducer