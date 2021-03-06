import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Home from './Pages/Home/Home/Home'
import CheckOut from './Pages/ServiceDetail/CheckOut/CheckOut'
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import RequireAuth from './Pages/RequireAuth/RequireAuth';
import ServiceDetail from './Pages/ServiceDetail/ServiceDetail/ServiceDetail';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';
import NotFound from './Pages/Shared/NotFound/NotFound';
import AddUser from './Pages/AddUser/AddUser';
import MangeService from './MangeService/MangeService';
import Orders from './Oders/Orders';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/service/:serviceId' element={<ServiceDetail></ServiceDetail>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/checkout/:serviceId' element={<RequireAuth>
         <CheckOut></CheckOut>
        </RequireAuth>}></Route>
        <Route path='/addUser' element={<RequireAuth>
         <AddUser></AddUser>
        </RequireAuth>}></Route>
        <Route path='/manageuser' element={<RequireAuth>
         <MangeService></MangeService>
        </RequireAuth>}></Route>
        <Route path='/orders' element={<RequireAuth>
         <Orders></Orders>
        </RequireAuth>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
