import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/homePages';
import Rooms from './pages/roomPage';
import Booking from './pages/bookingPages';

function App() {

  return (
    <>
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} /> 
            <Route path="/rooms" element={<Rooms />} />
            <Route path='/room/:id' element={<Booking/>}/>
          </Routes>
        </Router>
    </>
  )
}

export default App
