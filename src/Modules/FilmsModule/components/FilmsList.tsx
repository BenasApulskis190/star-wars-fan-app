import { Grid, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { t } from 'i18next';
import { useGetFilmsQuery } from '../../../app/features/api/swapiApi';
import { RenderSkeletons } from './RenderSkeletons/RenderSkeleton';
import { FilmItem } from './FilmItem';
import { PAGE_ROUTES } from '../../../routes/types';
import { setActiveFilm } from '../../../app/features/slices/activeFilmSlice';
import { Film } from '../../../app/features/api/types';

export const FilmsList = () => {
  const { data, error, isLoading } = useGetFilmsQuery();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  if (isLoading) {
    return (
      <Grid container spacing={3}>
        <RenderSkeletons />
      </Grid>
    );
  }

  if (error) {
    return (
      <Typography color="error" variant="h6" gutterBottom>
        {t('Error.SomethingWentWrong')}
      </Typography>
    );
  }

  if (data === undefined) {
    return (
      <Typography color="warning" variant="h6" gutterBottom>
        {t('Error.NoData')}
      </Typography>
    );
  }

  const handleClick = (film: Film) => {
    dispatch(setActiveFilm(film));
    navigate(PAGE_ROUTES.FILMS_VIEW(film.episode_id));
  };

  return (
    <Grid container spacing={3}>
      {data.map((film) => (
        <Grid
          item
          xs={12}
          sm={12}
          md={6}
          lg={4}
          key={film.episode_id}
          onClick={() => handleClick(film)}
        >
          <FilmItem film={film} />
        </Grid>
      ))}
    </Grid>
  );
};
