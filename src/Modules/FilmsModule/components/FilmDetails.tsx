import { useMediaQuery, useTheme, Stack, Skeleton } from '@mui/material';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { PAGE_ROUTES } from '../../../routes/types';
import { RootState } from '../../../app/store';
import { useGetFilmQuery } from '../../../app/features/api/swapiApi';
import { setActiveFilm } from '../../../app/features/slices/activeFilmSlice';
import { FilmTable } from './FilmTable';
import { resolveCharacterId } from '../../../utils/resolveCharacterId';
import { FilmDetailsDialog } from './FilmDetailsDialog';
import { FilmDetailsContentError } from './FilmDetailsContentError';

export const FilmDetails = () => {
  const [open, setOpen] = useState(true);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const { t } = useTranslation();
  const navigate = useNavigate();
  const activeFilm = useSelector((state: RootState) => state.films.activeFilm);

  const {
    data: film,
    isLoading,
    error
  } = useGetFilmQuery(Number(id), {
    skip: activeFilm !== null
  });
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const dispatch = useDispatch();

  const handleClose = () => {
    navigate(PAGE_ROUTES.FILMS);
    setOpen(false);
  };

  useEffect(() => {
    setLoading(activeFilm === null);
  }, [activeFilm]);

  useEffect(() => {
    if (loading && !isLoading && film !== undefined) {
      setLoading(false);
      dispatch(setActiveFilm(film));
    }
  }, [isLoading, film, dispatch, loading]);

  const handleHeader = () => {
    if (isLoading) {
      return <Skeleton width={200} />;
    }

    if (error) {
      return <>{t('Error.SomethingWentWrong')}</>;
    }

    if (activeFilm !== null) {
      return (
        <>
          {activeFilm.title}: {t('Film.Details.Characters')}
        </>
      );
    }

    return <>{t('Error.SomethingWentWrong')}</>;
  };

  return (
    <FilmDetailsDialog
      onClose={() => handleClose()}
      open={open}
      fullScreen={fullScreen}
      header={handleHeader()}
    >
      {isLoading && !error && (
        <Stack spacing={1}>
          <Skeleton height={50} />
          <Skeleton height={50} />
          <Skeleton height={50} />
        </Stack>
      )}
      {!isLoading && activeFilm !== null && !error && (
        <FilmTable characterIds={resolveCharacterId(activeFilm.characters)} />
      )}
      {error && (
        <FilmDetailsContentError
          onClose={() => handleClose()}
          message={t('Error.SomethingWentWrong')}
        />
      )}
    </FilmDetailsDialog>
  );
};
