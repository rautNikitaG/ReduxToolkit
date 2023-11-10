import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
// import store from './Store/index.jsx'
import userSlice from './Store/Slice/UserSlice.jsx'
import { configureStore } from '@reduxjs/toolkit'

const store = configureStore({
  reducer: {
    user: userSlice,
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>,
)
