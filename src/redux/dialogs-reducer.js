const UPDATE_NEW_MESSAGE_BODY = "UPDATE_NEW_MESSAGE_BODY";
const SEND_MESSAGE = "SEND_MESSAGE";

let initialState = {
  state: [
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
};

export const dilogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY:
      return { ...state, newMessegeBody: action.body };
    case SEND_MESSAGE:
      let body = state.newMessegeBody;
      return {
        ...state,
        newMessegeBody: "",
        messages: [...state.messages, { id: 6, message: body }], // переопределяем свойства сообщений потому что только они будут меняться, а диалоги нет.
      };
    default:
      return state;
  }
};

export const sendMessageCreator = () => ({
  type: SEND_MESSAGE,
}); // не принимает ничего просто возвращает обЪект
export const updateNewMessageBodyCreator = (body) => ({
  type: UPDATE_NEW_MESSAGE_BODY,
  body: body,
});

export default dilogsReducer;
