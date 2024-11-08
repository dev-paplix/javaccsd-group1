import { Route, Routes } from 'react-router-dom';
import Home from './pages/frontend/Home';
const App = () => {


  return (
    <>
      <div className='pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden'>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
