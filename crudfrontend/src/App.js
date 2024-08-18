import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import AddUser from './users/AddUsers';
import EditUser from './users/EditUsers';
import ViewUser from './users/ViewUsers';
import Navbar from './layout/Navbar';

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/adduser" element={<AddUser />} />
                <Route path="/edituser/:id" element={<EditUser />} />
                <Route path="/viewuser/:id" element={<ViewUser />} /> {/* Add route for ViewUser */}
            </Routes>
        </Router>
    );
}

export default App;
