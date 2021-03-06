import React from 'react'
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../redux/profileReducer";
import MyPosts from "./myPosts";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return(
        {
            posts:state.profilePage.postsData,
            newPostText:state.profilePage.newPostText
        }
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateNewPostText: (text) => {
            let action = updateNewPostTextActionCreator(text)
            dispatch(action);
        },
        addPost: () => {
            dispatch(addPostActionCreator())
        }

    }
}

const MyPostsContainer = connect(mapStateToProps,mapDispatchToProps)(MyPosts)
export default MyPostsContainer