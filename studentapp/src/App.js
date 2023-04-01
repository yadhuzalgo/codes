import logo from './logo.svg';
import './App.css';
import Add from './Components/Add';
import View from './Components/View';
import Navbar from './Components/Navbar';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
   <Navbar/>
       <Routes>
        <Route path='/' element={<View/>}/>
        <Route path='/add' element={<Add data={{id:'',name:'',grade:''}}method="post"/>}/>
       </Routes>
   {/* <View/>  */}
    </div>
  );
}

export default App;
