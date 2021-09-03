import React from 'react'
import Header from "./header";
import {connect} from "react-redux";
import {getAuthUserData} from "../redux/authReducer";
import {authAPI} from "../../api/api";

class headerContainer extends React.Component{
    componentDidMount() {
        this.props.getAuthUserData()
    }

    render() {
        return(
        <Header {...this.props}/>
        )
    }
}

const mapStateToProps =(state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})

export default connect(mapStateToProps, {getAuthUserData})(headerContainer)