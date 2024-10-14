
import './App.css'
import {  ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

import RouterTable from './components/RouterTable';



function App() {


  return (
    <>

      <RouterTable/>
        
      <ToastContainer
      position="bottom-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="dark"
      />
    </>
  )
}

export default App
