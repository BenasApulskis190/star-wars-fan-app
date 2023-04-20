import { styled } from '@mui/system';
import { AppBar, Box } from '@mui/material';

type AppBarProps = React.ComponentProps<typeof AppBar>;

export const StyledAppBar = styled(AppBar)<AppBarProps>(({ theme }) => ({
  ml: theme.spacing(38),
  boxShadow: 'unset'
}));

export const BrandIconBox = styled(Box)({
  flexGrow: 1,
  display: 'flex',
  justifyContent: 'center',
  textDecoration: 'none'
});
