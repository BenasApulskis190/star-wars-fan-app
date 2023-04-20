import { useTheme } from '@mui/material';
import { Box } from '@mui/system';
import { getSWSeparatorStyles } from './SWSeparator.style';

type Props = {
  isToggled: boolean;
};

export const SWSeparator = ({ isToggled }: Props) => {
  const theme = useTheme();
  return <Box component="div" sx={getSWSeparatorStyles(theme, isToggled)} />;
};
