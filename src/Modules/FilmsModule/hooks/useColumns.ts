import { useTranslation } from 'react-i18next';

export const useColumns = () => {
  const { t } = useTranslation();

  return [
    { field: 'name', headerName: t('Film.Details.Table.Name') },
    { field: 'birth_year', headerName: t('Film.Details.Table.BirthYear') },
    { field: 'gender', headerName: t('Film.Details.Table.Gender') },
    { field: 'mass', headerName: t('Film.Details.Table.Mass') }
  ];
};
