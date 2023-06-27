import { Route, Routes } from 'react-router-dom'
import App from './App';
import Login from './Components/Login';
import Register from './Components/Register';

const MyRoute = () => {
    return (
        <Routes>
            <Route path='/' element={<App />} />
            <Route path='/register' element={<Register />} />
            <Route path='/login' element={<Login />} />
           
        </Routes>
    )
}

export default MyRoute;