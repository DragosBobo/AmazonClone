
import './App.css';
import Header from './Header';
import Home from './Home';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Checkout from './Checkout';
import Login from './Login';

function App() {
  return (
    <BrowserRouter>
    <div className="app">

    
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path="/" element={
        <> 

        <Header/>
        <Home />
        </>}
         />
        <Route path="/checkout" element={
        <>

        <Header/>

         <Checkout/>
         </>} 

         />
        
      </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
