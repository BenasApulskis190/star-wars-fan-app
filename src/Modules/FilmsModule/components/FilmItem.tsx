import { Card, CardMedia, Box, CardContent, Typography } from '@mui/material';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Film } from '../../../app/features/api/types';
import { SWSeparator } from '../../../components/common/Ui/SWSeperator/SWSeparator';

type Props = {
  film: Film;
};

export const FilmItem = ({ film }: Props) => {
  const [isToggle, setIsToggle] = useState(false);
  const { t } = useTranslation();

  return (
    <Card
      sx={{ display: 'flex' }}
      onMouseEnter={() => setIsToggle(true)}
      onMouseLeave={() => setIsToggle(false)}
    >
      <CardMedia
        component="img"
        sx={{ width: 151 }}
        image={film.movieImage?.image}
        alt={film.title}
      />
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography variant="h6" component="div">
            {film.title}
          </Typography>
          <SWSeparator isToggled={isToggle} />
          <Typography variant="body2" color="text.secondary">
            {t('Film.FilmItem.Director')} {film.director}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {t('Film.FilmItem.ReleaseDate')} {film.release_date}
          </Typography>
        </CardContent>
      </Box>
    </Card>
  );
};
