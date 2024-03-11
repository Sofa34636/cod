import dilogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";

const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const ADD_POST = "ADD-POST";
const UPDATE_NEW_MESSAGE_BODY = "UPDATE_NEW_MESSAGE_BODY";
const SEND_MESSAGE = "SEND_MESSAGE";

let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: "HI, hay are you", likesCount: 12 },
        { id: 2, message: "My first post", likesCount: 18 },
        { id: 2, message: "My pppp", likesCount: 18 },
      ],
      newPostText: "Beby",
    },
    dialogsPage: {
      dialogs: [
        { id: 1, name: "Dimych" },
        { id: 2, name: "Andrey" },
        { id: 3, name: "Sveta" },
        { id: 4, name: "Sasha" },
        { id: 5, name: "Viktor" },
        { id: 6, name: "Valera" },
      ],
      messages: [
        { id: 1, message: "Hi" },
        { id: 2, message: "How is hy" },
        { id: 3, message: "Go" },
        { id: 4, message: "Go" },
        { id: 5, message: "Go" },
      ],
      newMessegeBody: "",
    },
    sidebar: {},
  },
  getState() {
    return this._state;
  },
  callSubscriber() {
    console.log("State changed");
  },
  subscribe(observer) {
    this._callSubscriber = observer; // наблюдатель observer
  },
  dispatch(action) {
    // action - объект у которого есть тайт
    // {type: 'ADD-POST'}
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dilogsReducer(this._state.dialogsPage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);

    this._callSubscriber(this._state);
  },
};

export default store;
window.store = store;
