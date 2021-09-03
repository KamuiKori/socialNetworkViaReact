import {act} from "@testing-library/react";
import usersAPI, {profileAPI} from "../../api/api";

const ADDPOST = 'ADD_POST'
const UPDATENEWPOSTTEXT = 'UPDATE_NEW_POST_TEXT'
const SETUSERPROFILE = 'SETUSERPROFILE'
const SETSTATUS = 'SETSTATUS'

let initialState = {
    postsData: [
        {id: 1, key: 131231, message: 'hi,how are you', likesCount: 12},
        {id: 2, key: 235223, message: 'Its my first post', likesCount: 19},
        {id: 3, key: 765434, message: 'aaaa', likesCount: 43},
        {id: 4, key: 569743, message: 'dsadsad', likesCount: 22}
    ],
    newPostText: 'some text',
    profile: null,
    status: ""
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADDPOST: {
            let newPost = {
                id: 5,
                key: 123,
                message: state.newPostText,
                likesCount: 0
            };
            return {
                ...state,
                postsData: [...state.postsData, newPost],
                newPostText: ''
            }
        }
        case UPDATENEWPOSTTEXT:
            return {
                ...state,
                newPostText: action.newText
            }
        case SETSTATUS:
            return {
                ...state,
                status: action.status
            }
        case SETUSERPROFILE:
            return {
                ...state,
                profile: action.profile
            }

        default:
            return state;
    }
}

export const addPostActionCreator = () => {
    return {type: ADDPOST}
}
export const setUserProfile = (profile) => ({type: SETUSERPROFILE, profile})
export const setStatus = (status) => ({type: SETSTATUS, status})
export const updateNewPostTextActionCreator = (text) => {
    return {type: UPDATENEWPOSTTEXT, newText: text}
}

export const getUserProfile = (userId) => (dispatch) => {
    usersAPI.getProfile(userId).then((response) => {
        dispatch(setUserProfile(response.data));
    })
}

export const getStatus = (userId) => (dispatch) => {
    profileAPI.getStatus(userId).then((response) => {
        dispatch(setStatus(response.data));
    })
}
export const updateStatus = (status) => (dispatch) => {
    profileAPI.updateStatus(status).then((response) => {
        if (response.data.resultCode === 0) {
            dispatch(setStatus(response.data));
        }
    })
}
export default profileReducer