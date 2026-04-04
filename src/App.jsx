import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/homePages';
import Rooms from './pages/roomPage';

function App() {

  return (
    <>
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} /> 
            <Route path="/rooms" element={<Rooms />} />
          </Routes>
        </Router>
    </>
  )
}

export default App
