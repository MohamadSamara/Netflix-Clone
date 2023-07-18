import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import NavBar from './components/Navbar/NavBar';
import ModalMovie from './components/ModalMovie/ModalMovie';
import FavList from './components/FavList/FavList';
function App() {
  return (
    <div className="App">
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/FavList" element={<FavList />} />
      </Routes>
      <ModalMovie/>

    </div>
  );
}

export default App;
