import { ReactNode } from 'react';

export type RouteType = {
  element: ReactNode;
  id: string;
  index?: boolean;
  path?: string;
  absolutePath?: string;
  sidebarProps?: {
    displayText: string;
    icon?: ReactNode;
  };
};

export const PAGE_ROUTES = {
  HOME: '/home',
  FILMS: '/films',
  FILMS_VIEW: (id: string) => `/films/view/${id}`,
  ABOUT: '/about'
};
