import {act} from "@testing-library/react";
import React from "react";
import usersAPI from "../../api/api";

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SETUSERS = 'SETUSERS'
const SETCURRENTPAGE = 'SETCURRENTPAGE'
const SETTOTALUSERSCOUNT = 'SETTOTALUSERSCOUNT'
const TOGGLEISFETCHING = 'TOGGLEISFETCHING'
const TOGGLEISFOLLOWINGPROGRESS = 'TOGGLEISFOLLOWINGPROGRESS'

let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 3,
    isFetching: true,
    followingInProgress: []
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u
                })
            }
        case SETUSERS:
            return {...state, users: action.users}
        case SETCURRENTPAGE:
            return {...state, currentPage: action.currentPage}
        case SETTOTALUSERSCOUNT:
            return {...state, totalUsersCount: action.count}
        case TOGGLEISFETCHING:
            return {...state, isFetching: action.isFetching}
        case TOGGLEISFOLLOWINGPROGRESS:
            return {
                ...state,
                followingInProgress: action.isFetching ? [...state.followingInProgress, action.userId] : [...state.followingInProgress.filter(id => id != action.userId)]
            }
        default:
            return state;
    }
}

export const followSuccess = (userId) => {
    return {type: FOLLOW, userId}
}
export const unfollowSuccess = (userId) => {
    return {type: UNFOLLOW, userId}
}
export const setUsers = (users) => {
    return {type: SETUSERS, users}
}
export const setCurrentPage = (currentPage) => {
    return {type: SETCURRENTPAGE, currentPage}
}
export const setTotalUsersCount = (totalUsersCount) => {
    return {type: SETTOTALUSERSCOUNT, count: totalUsersCount}
}
export const toggleIsFetching = (isFetching) => {
    return {type: TOGGLEISFETCHING, isFetching: isFetching}
}
export const toggleFollowingProgress = (isFetching, userId) => {
    return {type: TOGGLEISFOLLOWINGPROGRESS, isFetching: isFetching, userId}
}

export const getUsersThunkCreator = (currentPage, pageSize) => {
    return (
        (dispatch) => {
            dispatch(toggleIsFetching(true))

            usersAPI.getUsers(currentPage, pageSize).then((data) => {
                dispatch(toggleIsFetching(false))
                dispatch(setUsers(data.items))
                dispatch(setTotalUsersCount(data.totalCount))
            })
        }
    )
}
export const follow = (userId) => {
    return (
        (dispatch) => {
            dispatch(toggleFollowingProgress(true, userId))
            usersAPI.follow(userId).then((response) => {
                if (response.data.resultCode === 0) {
                    dispatch(followSuccess(userId))
                }
                dispatch(toggleFollowingProgress(false,userId))
            })
        }
    )
}
export const unfollow = (userId) => {
    return (
        (dispatch) => {
            dispatch(toggleFollowingProgress(true, userId))
            usersAPI.unfollow(userId).then((response) => {
                if (response.data.resultCode === 0) {
                    dispatch(followSuccess(userId))
                }
                dispatch(toggleFollowingProgress(false,userId))
            })
        }
    )
}

export default usersReducer