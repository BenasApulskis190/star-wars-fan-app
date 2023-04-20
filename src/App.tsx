import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MainLayout } from './components/Layout/MainLayout/MainLayout';
import { generateRoute } from './routes';
import { useAppRoutes } from './routes/useAppRoutes';

function App() {
  const appRoutes = useAppRoutes();

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          {generateRoute(appRoutes)}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
