import { Route, Routes } from 'react-router-dom';
import { FilmPageView } from '../../Modules/FilmsModule/FilmPageView';
import { FilmDetails } from '../../Modules/FilmsModule/components/FilmDetails';
import { NotFound } from '../Error/NotFound';

export const FilmsPage = () => (
  <Routes>
    <Route path="" element={<FilmPageView />}>
      <Route path="view/:id" element={<FilmDetails />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  </Routes>
);
