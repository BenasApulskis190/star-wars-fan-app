import { useTranslation } from 'react-i18next';
import { Box, Typography } from '@mui/material';
import { TitleHeader } from '../../components/common/Ui/TitleHeader/TitleHeader';

export const AboutPage = () => {
  const { t } = useTranslation();

  return (
    <Box sx={{ p: 2 }}>
      <TitleHeader>{t('About.Title')}</TitleHeader>
      <Typography variant="body2" gutterBottom>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, est.
        Culpa sint in eaque nobis delectus dicta ratione quos ea quidem, enim
        ipsa illo voluptates suscipit illum. Dolor, excepturi facere?
      </Typography>

      <Typography variant="body2" gutterBottom>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam
        deleniti ipsam tempore harum. Iusto saepe, aliquid unde nobis, quisquam
        nihil ipsa, quam quibusdam commodi ipsam ex illum iure. Veniam, nemo.
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam
        dignissimos rem sit consectetur odit debitis ab voluptates officia. Esse
        optio maxime dolor in ut totam sunt, sapiente quo non debitis!
      </Typography>
    </Box>
  );
};
