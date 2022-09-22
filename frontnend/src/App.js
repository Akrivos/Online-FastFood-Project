import './App.css';
import { BrowserRouter as Router, Route, Routes, Switch } from "react-router-dom";
import HomePage from './pages/HomePage/HomePage';
import OrderPage from './pages/OderPage/OrderPage';

const App = () => {
  return(
    <div className="app-container">
      <Router>
          <Routes>
            <Route exact path="/" element={<HomePage/>}/>
            <Route exact path="/order/:orderId" element={<OrderPage/>}/>
          </Routes>
      </Router>
    </div>
  )
}

export default App;
