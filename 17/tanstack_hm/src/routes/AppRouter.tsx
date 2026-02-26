import { Route, Routes } from 'react-router'
import User from '../pages/User'
import Users from '../pages/Users'
import Home from '../pages/Home'

const AppRouter = () => (
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/users' element={<Users />} />
        <Route path='/user/:id' element={<User />} />
    </Routes>
)

export default AppRouter
