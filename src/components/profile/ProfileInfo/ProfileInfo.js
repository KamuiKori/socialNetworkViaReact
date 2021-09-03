import React from 'react'
import style from "./profileInfo.module.css";
import Preloader from "../../common/preloader/preloader";
import avatar from "../../../img/user.png"
import ProfileStatus from "./ProfileStatus"

const ProfileInfo = (props) =>{
    if(!props.profile){
        return <Preloader/>
    }

    return(
        <div>
            <div className={style.headerPic}>
                <img src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg" alt="pic"/>
            </div>
            <div className={style.profileContent}>
                <div className={style.userAvatar}>
                    <img src={props.profile.photos.large != null?props.profile.photos.large:avatar} alt="avatar"/>
                </div>
                <div>
                    <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
                </div>
                <div>
                    <span><b>Про меня:</b>{props.profile.aboutMe}</span>
                </div>
                <div>
                    <span><b>Vk:</b>{props.profile.contacts.vk}</span>
                </div>
                <div>
                    <span><b>Twitter:</b>{props.profile.contacts.twitter}</span>
                </div>
                <div>
                    <span><b>Instagram:</b>{props.profile.contacts.instagram}</span>
                </div>
                <div>
                    <span><b>Github:</b>{props.profile.contacts.github}</span>
                </div>
                <div>
                    <span><b>Facebook:</b>{props.profile.contacts.facebook}</span>
                </div>
                <div>
                    <b>Работа:</b>
                    <div>
                        <span><b>В поиске работы:</b>{props.profile.lookingForAJob? <b>Yes</b>:<b>No</b>}</span>
                    </div>
                    <b>Описание:</b>
                    <div>
                        <span>{props.profile.lookingForAJobDescription}</span>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default ProfileInfo