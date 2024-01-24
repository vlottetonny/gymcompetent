import {Routes, Route, BrowserRouter} from 'react-router-dom';
import HomePage from './pages/HomePage.tsx';
import './App.css'

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App