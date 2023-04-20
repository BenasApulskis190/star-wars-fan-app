import { useTranslation } from 'react-i18next';
import InfoIcon from '@mui/icons-material/Info';
import TheatersIcon from '@mui/icons-material/Theaters';
import { PAGE_ROUTES, RouteType } from './types';
import { HomePage } from '../pages/HomePage/HomePage';
import { AboutPage } from '../pages/AboutPage/AboutPage';
import { FilmsPage } from '../pages/FilmsPage/FilmsPage';
import { NotFound } from '../pages/Error/NotFound';

export const useAppRoutes = (): RouteType[] => {
  const { t } = useTranslation();

  const appRoutes: RouteType[] = [
    {
      index: true,
      element: <HomePage />,
      id: 'homePage'
    },
    {
      path: `${PAGE_ROUTES.FILMS}/*`,
      absolutePath: PAGE_ROUTES.FILMS,
      id: 'filmsPage',
      element: <FilmsPage />,
      sidebarProps: {
        displayText: t('Sidebar.Item.Films'),
        icon: <TheatersIcon />
      }
    },
    {
      path: PAGE_ROUTES.ABOUT,
      absolutePath: PAGE_ROUTES.ABOUT,
      id: 'aboutPage',
      element: <AboutPage />,
      sidebarProps: {
        displayText: t('Sidebar.Item.About'),
        icon: <InfoIcon />
      }
    },
    {
      path: '/*',
      absolutePath: '*',
      id: 'notFound',
      element: <NotFound />
    }
  ];

  return appRoutes;
};
