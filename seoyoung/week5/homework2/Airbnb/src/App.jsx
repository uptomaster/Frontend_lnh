import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Layout from './components/Layouts/Layout';
import Airbnb from './pages/Airbnb';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Airbnb />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
