import {
  Box,
  Container,
  Typography,
  Button,
  Stack,
  useTheme
} from '@mui/material';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { PAGE_ROUTES } from '../../routes/types';

export const HomePage = () => {
  const { t } = useTranslation();
  const theme = useTheme();

  return (
    <Box bgcolor="primary.white">
      <Container maxWidth="sm">
        <Box textAlign="center" mb={6}>
          <Typography
            variant="h2"
            color="textPrimary"
            gutterBottom
            style={{
              fontSize: theme.typography.h2.fontSize,
              fontWeight: theme.typography.fontWeightBold,
              lineHeight: theme.typography.h2.lineHeight,
              [theme.breakpoints.down('sm')]: {
                fontSize: theme.typography.h3.fontSize
              }
            }}
          >
            {t('Home.Title')}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            {t('Home.Description')}
          </Typography>
        </Box>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
        >
          <Stack direction="row" spacing={2}>
            <Button
              component={Link}
              to={PAGE_ROUTES.FILMS}
              size="large"
              variant="outlined"
              fullWidth
            >
              {t('Sidebar.Item.Films')}
            </Button>
            <Button
              component={Link}
              to={PAGE_ROUTES.ABOUT}
              variant="outlined"
              size="large"
              fullWidth
            >
              {t('Sidebar.Item.About')}
            </Button>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};
