import { useTranslation } from 'react-i18next';
import { Outlet } from 'react-router-dom';
import { TitleHeader } from '../../components/common/Ui/TitleHeader/TitleHeader';
import { FilmsList } from './components/FilmsList';

export const FilmPageView = () => {
  const { t } = useTranslation();

  return (
    <div>
      <TitleHeader>{t('Films.Title')}</TitleHeader>
      <FilmsList />
      <Outlet />
    </div>
  );
};
