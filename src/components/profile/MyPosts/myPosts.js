import React from 'react'
import style from './myPosts.module.css'
import Post from "./Post/post";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../redux/profileReducer";



const MyPosts = (props) => {
    let postsElement = props.posts.map(e => <Post key={e.key} message={e.message} likes={e.likesCount}/>)

    let newPostElement = React.createRef();

    let onAddPost = () => {
        props.addPost();
    }

    let onPostChange = () => {
        let text = newPostElement.current.value
        props.updateNewPostText(text)
    }

    return (
        <div className={style.myPosts}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement} value ={props.newPostText}/>
                </div>
                <button onClick={onAddPost}>Add post</button>
            </div>
            <div className={style.posts}>
                {postsElement}
            </div>
        </div>
    )
}
export default MyPosts