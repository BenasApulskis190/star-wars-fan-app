import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography
} from '@mui/material';
import { useTranslation } from 'react-i18next';

type Props = {
  message: string;
  onClose: () => void;
};
export const FilmDetailsContentError = ({ message, onClose }: Props) => {
  const { t } = useTranslation();
  return (
    <Card>
      <CardContent>
        <Typography color="error" variant="h6" gutterBottom>
          {message}
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={onClose} variant="contained">
          {t('Buttons.Close')}
        </Button>
      </CardActions>
    </Card>
  );
};
