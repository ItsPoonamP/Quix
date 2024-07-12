import './App.css';
import Create from './Create';
import Play from './Play';
import { useState } from 'react';
import { BrowserRouter, Route, Routes, Link, useNavigate } from 'react-router-dom';

function App() {
  const [click, setClick] = useState(false);
  const [create, setCreate] = useState(false);

  return (
    <BrowserRouter>
      <AppContent click={click} setClick={setClick} create={create} setCreate={setCreate} />
    </BrowserRouter>
  );
}

function AppContent({ click, setClick, create, setCreate }) {
  const navigate = useNavigate();

  const handleClick = () => {
    setClick(true);
    setCreate(false);
    navigate('/play');
  };

  const handleCreate = () => {
    setCreate(true);
    setClick(false);
    navigate('/create');
  };

  const homeClick = () => {
    setClick(false);
    setCreate(false);
    navigate('/');
  };

  return (
    <div >
      {click || create ? (
        <>
          {click && <Play />}
          {create && <Create />}
          <button className='home' onClick={homeClick}>
            <img src="https://img.icons8.com/?size=100&id=1iF9PyJ2Thzo&format=png&color=FFFFFF" alt="Home" />
          </button>
        </>
      ) : (
        <>
          <Link to="/play">
            <button className='play' onClick={handleClick}>General</button>
          </Link>
          <Link to="/create">
            <button className='create' onClick={handleCreate}>Sci-Tech</button>
          </Link>
        </>
      )}
      <Routes>
        <Route path="/play" element={<Play />} />
        <Route path="/create" element={<Create />} />
      </Routes>
    </div>
  );
}

export default App;