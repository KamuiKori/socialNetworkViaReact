import loadingImg from "../../../img/loading.svg";
import React from "react";

let Preloader = (props)=>{
    return(<div>
        <img src={loadingImg} alt={'loading'}/>
    </div>)
}
export default Preloader
