import React from 'react'
import ReactDom from 'react-dom'
import App from './App'
import AppRouter from "./router";

ReactDom.render(
    <AppRouter />,
    document.getElementById('root')
)
