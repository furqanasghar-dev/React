import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App.jsx'

const MyApp=React.createElement(
    'div',
    null,
    React.createElement('h1', null, 'Custom App | React With Furqan Asghar')
)
ReactDOM.createRoot(document.getElementById('root')).render(
  
        MyApp
            
)

// const ReactElement = {
//     type: 'a',
//     props: {
//         href: 'https://google.com',
//         target: '_blank'
//     },
//     children: 'Click me to visit google'
// }

const anotherElement = (
    <a href="https://google.com" target='_blank'>Visit google</a>
)



const anotherUser = "React With Furqan Asghar"

const reactElement = React.createElement(
    'a',
    {href: 'https://google.com',target: '_blank' },
    'click me to visit google',
    anotherElement
)

ReactDOM.createRoot(document.getElementById('root')).render(
 
    reactElement
  
)


