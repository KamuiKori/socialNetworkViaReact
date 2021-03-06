import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    headers: {
        "API-KEY": "97422e49-02a0-4b7c-b198-520b6503eb3c"
    },
    baseURL: 'https://social-network.samuraijs.com/api/1.0/'
})

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 1) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },
    follow(userId) {
        return instance.post(`follow/${userId}`)
    },
    unfollow(userId) {
        return instance.delete(`unfollow/${userId}`)
    },
    getProfile(userId){
        //console.warn('Obsolete method. Please use profileAPI object.')
        return profileAPI.getProfile(userId)
    }
}

export const profileAPI = {
    getProfile(userId){
        return instance.get(`profile/`+ userId)
    },
    getStatus(userId){
        return instance.get(`profile/status/`+userId)
    },
    updateStatus(status){
        return instance.put(`profile/status/`, {status: status})
    }
}
export const authAPI = {
    me(){
        return instance.get(`auth/me`)
    }
}

// export const unfollowUser = (userId)=> {
//     return instance.delete(`unfollow/${userId}`)
//         .then(response => {
//             return response.data
//         })
// }

// export const followUser = (userId)=> {
//     return instance.post(`follow/${userId}`)
//         .then(response => {
//             return response.data
//         })
// }

export default usersAPI