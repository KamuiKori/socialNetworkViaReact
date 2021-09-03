import profileReducer from "./profileReducer";
import messagesReducer from "./messagesReducer";
import sideBarReducer from "./sideBarReducer";
let store = {
    _state: {
        profilePage: {
            postsData: [
                {id: 1, key: 131231, message: 'hi,how are you', likesCount: 12},
                {id: 2, key: 235223, message: 'Its my first post', likesCount: 19},
                {id: 3, key: 765434, message: 'aaaa', likesCount: 43},
                {id: 4, key: 569743, message: 'dsadsad', likesCount: 22}
            ],
            newPostText: 'some text'
        },
        messagesPage: {
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
        },
        sideBar: {
            friends: [
                {
                    id: 1,
                    key: 'asddgf',
                    name: 'Pavel',
                    avatar: 'https://cdn.iconscout.com/icon/free/png-512/boy-avatar-4-1129037.png'
                },
                {
                    id: 2,
                    key: 'asd2f',
                    name: 'Dimas',
                    avatar: 'https://cdn.iconscout.com/icon/free/png-512/boy-avatar-4-1129037.png'
                },
                {
                    id: 3,
                    key: 'adszc',
                    name: 'Sergey',
                    avatar: 'https://cdn.iconscout.com/icon/free/png-512/boy-avatar-4-1129037.png'
                }
            ]
        },
    },
    getState() {
        return this._state
    },
    _callSubscriber() {
        console.log('state was changed')
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.messagesPage = messagesReducer(this._state.messagesPage,action)
        this._state.sideBar = sideBarReducer(this._state.sideBar,action)

        this._callSubscriber(this._state)
    }
}
export default store
window.store = store