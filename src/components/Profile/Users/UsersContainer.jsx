import React from "react";
import { connect } from "react-redux";
import Users from "./Users";
import { followAC, setUsersAC, unfollowAC } from "../../../redux/users-reducer";

let mapStateToProps = (state) => {
  // функция , принимающая весь state и возвращает объект с данными, которые нам нужны
  return {
    users: state.usersPage.users
  }
}
 let mapDispatchToProps = (dispatch) => { // функция для того, чтобы передавать дочерней компоненте через пропсы колбэки
    return {
        follow: (userId) => {
            dispatch(followAC(userId)) ;// диспачем результат работы экшенКриэйтора - простой объект, который должен содержать тип          
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId)) ;
         },
         setUsers: (users) => {
            dispatch(setUsersAC(users)) ;
         }
    }
    
 }
export default connect(mapStateToProps, mapDispatchToProps)(Users);
