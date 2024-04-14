import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

function MyApp () {
  return (
    <h1>This is MyApp function</h1>
  );
}

// It will not work Because the it is the object
// const reactElement = {
//   type : 'a',
//   props : {
//       href : "https://google.com",
//       target : "_blank"
//   },
//   children : "Click me to visit google"
// };

// const AnotherElement =  (
//   <a href='https://google.com' target='_blank'>Visit Google</a>
// )

// const reactElement = React.createElement(
//   'a',
//   {href:'https://google.com', target :'_blank'},
//   'Visit Google Here'
// );

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
    <App />
    {/*  <MyApp /> */}
    {/* <reactElement /> */}

    {/* reactElement */}
    </React.StrictMode>
  
)
