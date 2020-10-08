import React from 'react'
import App from './App'
import { ToastProvider } from "react-toast-notifications";
import { Provider } from 'react-redux'
import
store
    from './services/index'


export default () => <Provider store={store}>
    <ToastProvider>
        <App />
    </ToastProvider>
</Provider>