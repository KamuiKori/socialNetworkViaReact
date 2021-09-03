import React from 'react'
import style from './post.module.css'

const Post = (props) => {
    return(
        <div className={style.item}>
            <img src="https://png.pngtree.com/png-vector/20190704/ourlarge/pngtree-businessman-user-avatar-free-vector-png-image_1538405.jpg" alt="avatar"/>
            {props.message}
            <div>
                <span>Likes:{props.likes}</span>
            </div>
        </div>
    )
}
export default Post