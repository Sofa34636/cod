const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";

let initialState = {
  users: [],
};

export const usersReducer = (state = initialState, action) => {
  switch (
    action.type // бизнес уровень, прописали работу кнопок
  ) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          // map создаёт новый массив элементами которого будут те же users
          if (u.id === action.userid) {
            return { ...u, followed: true };
          }
          return u;
        }),
      };
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          // map создаёт новый массив элементами которого будут те же users
          if (u.id === action.userid) {
            return { ...u, followed: false };
          }
          return u;
        }),
      };
    case SET_USERS: {
      return { ...state, users: [...state.users, ...action.users] }; // берём старых юзеров и жописываем к ним юзеров из action. Склеиваем 2 массива
    }
    default:
      return state;
  }
};

export const followAC = (userid) => ({
  type: FOLLOW,
  userid,
}); // кнопочка
export const unfollowAC = (userid) => ({
  type: UNFOLLOW,
  userid,
});
export const setUsersAC = (users) => ({
  type: SET_USERS,
  users,
});

export default usersReducer;
