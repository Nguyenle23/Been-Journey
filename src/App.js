import HomePage from "./components/pages/HomePage";
import { Routes, Route } from 'react-router-dom';
import Journey from './components/pages/Journey';
import Sidebar from './components/Sidebar';
import ErrorPage from "./components/pages/ErrorPage";

function App() {
  return (
    <div>
      {/* <Sidebar /> */}
      <Routes>
        <Route exact path='/journey-gallery' element={<HomePage />} />
        <Route path='/journey' element={<Journey />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
