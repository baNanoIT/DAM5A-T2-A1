import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

//Imports de la carpeta functions
import MyFunctions from './functions/MyFunctions.jsx'
import MyPromises from './functions/MyPromises.jsx'
import MyPromisesSecond from './functions/MyPormisesSecond.jsx'
import MyPromisesThird from './functions/MyPromisesThird.jsx'
import MyPromisesFourth from './functions/MyPromisesFourth.jsx'
import MyFetchsAPIs from './functions/MyFetchs.jsx'
import MyFetchPut from './functions/MyFetchAPI_PUT.jsx'
import MyFetchPost from './functions/MyFetchAPI_POST.jsx'
import MyFetchBlob from './functions/MyFetchAPI_BLOB.jsx'

createRoot(document.getElementById('root')).render(
  //<StrictMode>
  // <App/>
  // <MyPromises/>
  // <MyPromisesSecond/>
  // <MyPromisesThird/>
  // <MyPromisesFourth/>
  //<MyFetchsAPIs/>
  //<MyFetchPut/>
  //<MyFetchPost/>
  <MyFetchBlob/>
  //</StrictMode>,
)
