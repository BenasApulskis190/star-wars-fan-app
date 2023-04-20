import { ReactNode } from 'react';
import { Route } from 'react-router-dom';
import { RouteType } from './types';
import { PageWrapper } from '../components/Layout/PageWrapper/PageWrapper';

export const generateRoute = (routes: RouteType[]): ReactNode =>
  routes.map(({ path, id, element, index }) => {
    if (index) {
      return (
        <Route
          index
          path={path}
          element={<PageWrapper>{element}</PageWrapper>}
          key={id}
        />
      );
    }

    return (
      <Route
        path={path}
        element={<PageWrapper>{element}</PageWrapper>}
        key={id}
      />
    );
  });
