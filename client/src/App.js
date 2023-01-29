import HomePage from "./components/pages/HomePage";
import { Routes, Route } from 'react-router-dom';
import Journey from './components/pages/Journey';
import ErrorPage from "./components/pages/ErrorPage";
import Test from "./components/Test";

function App() {
  return (
    <div>
      <Routes>
        <Route exact path='/journey-gallery/client/build' element={<HomePage />} />
        <Route path='/journey' element={<Journey />} />
        <Route path='/test' element={<Test />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
