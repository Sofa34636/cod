import React from "react";
import styles from "./users.module.css";
import axios from "axios";
import userPhoto from "../../../assets/images/user.png";

class Users extends React.Component {

componentDidMount(){
  axios
  .get("https://social-network.samuraijs.com/api/1.0/users")
  .then((response) => {
    this.props.setUsers(response.data.items);
  }); //запрос данных пользователей на сервак

/* props.setUsers([
  {
    id: 1,
    photoUrl:
      "https://i.pinimg.com/originals/39/2d/dc/392ddce91f57e2b0e37ee0d77a51a407.jpg",
    follow: false,
    fullName: "Dima",
    status: "Hi",
    location: { city: "Minsk", country: "Belarus" },
  },
  {
    id: 2,
    photoUrl:
      "https://i.pinimg.com/originals/39/2d/dc/392ddce91f57e2b0e37ee0d77a51a407.jpg",
    follow: true,
    fullName: "Roma",
    status: "Hi, bro",
    location: { city: "Kamchatka", country: "Russia" },
  },
  {
    id: 3,
    photoUrl:
      "https://i.pinimg.com/originals/39/2d/dc/392ddce91f57e2b0e37ee0d77a51a407.jpg",
    unfollow: false,
    fullName: "Kete",
    status: "Hi, men",
    location: { city: "Washincton", country: "USA" },
  },
]);*/
}


  
  render() {
    return 
      <div>
        {this.props.users.map((u) => (
          <div key={u.id}>
            <span>
              <div>
                <img
                  src={u.photos.small != null ? u.photos.small : userPhoto}
                  className={styles.userPhoto}
                />
              </div>
              <div>
                {u.followed ? (
                  <button
                    onClick={() => {
                      this.props.unfollow(u.id);
                    }}
                  >
                    Unfollow
                  </button>
                ) : (
                  <button>Follow</button>
                )}
                <button
                  onClick={() => {
                    this.props.follow(u.id);
                  }}
                >
                  Follow
                </button>
              </div>
            </span>
            <span>
              <span>
                <div>{u.name}</div>
                <div>{u.status}</div>
              </span>
              <span>
                <div>{"u.location.country"}</div>
                <div>{"u.location.city"}</div>
              </span>
            </span>
          </div>
        ))}
      </div>
    
  }
}

export default Users;
