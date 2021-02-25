import profilePageReducer from './profilePageReducer'
import messagePageReducer from './messagePageReducer'

let store = {
  _state: {
    profilePage: {
      PostsData: [
        { id: 1, message: 'Hi, how are u?', likesCount: 21 },
        { id: 2, message: "I'm fine", likesCount: 13 },
      ],
      newPostText: 'kak eto',
    },

    messagePage: {
      DialogsData: [
        {
          id: 1,
          name: 'Dimich',
          ava: 'http://archilab.online/images/1/123.jpg',
        },
        {
          id: 2,
          name: 'Andrey',
          ava:
            'https://i.pinimg.com/736x/4a/bc/c0/4abcc00427dbb86ee5da8270b52204f8.jpg',
        },
        {
          id: 3,
          name: 'Sveta',
          ava:
            'https://streamdps.ru/upload/iblock/ba4/ba43a8bf5b491168b4f74e9922c88c25.jpg',
        },
        {
          id: 4,
          name: 'Sasha',
          ava:
            'https://proprikol.ru/wp-content/uploads/2020/02/kartinki-na-avatarku-dlya-parnej-i-muzhchin-1-1.jpg',
        },
        {
          id: 5,
          name: 'Victor',
          ava:
            'https://author.today/content/2020/02/29/f8d25b93569246f3b19168fc0bdf5a6f.jpg',
        },
        {
          id: 6,
          name: 'Valera',
          ava:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy8ZCnk2jWHz2anmrx5hIBE9mmOPVBZmytmg&usqp=CAU',
        },
      ],
      MessagesData: [
        { id: 1, message: 'Privet' },
        { id: 2, message: 'Kak dela' },
        { id: 3, message: 'Norm' },
        { id: 4, message: 'Sam kak' },
        { id: 5, message: 'otlichno' },
        { id: 6, message: 'go gulyat' },
      ],
      newMessageBody: '',
    },
  },
  _callSubscriber() {
    console.log('State changed')
  },

  getState() {
    return this._state
  },
  subscribe(observer) {
    this._callSubscriber = observer
  },

  dispatch(action) {
    this._state.profilePage = profilePageReducer(
      this._state.profilePage,
      action
    )
    this._state.messagePage = messagePageReducer(
      this._state.messagePage,
      action
    )

    this._callSubscriber(this._state)

    // {type: 'ADD-POST'}
  },
}

export default store
