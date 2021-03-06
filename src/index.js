import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
//baris 5 sampe 10 menghubungkn client  dgn react pake apolo
import App from './App'
import { ApolloProvider } from '@apollo/client'
import client from './api/hasura-graphql'
import reportWebVitals from './reportWebVitals'

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()