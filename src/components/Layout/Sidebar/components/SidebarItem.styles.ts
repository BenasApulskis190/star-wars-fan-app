import { SxProps } from '@mui/system';
import { Theme } from '@mui/material/styles';

export const getSidebarItemStyles = (
  theme: Theme,
  isActive: boolean
): SxProps => ({
  paddingY: theme.spacing(0.75),
  paddingX: theme.spacing(3),
  fontSize: theme.typography.htmlFontSize,
  color: theme.palette.common.white,
  opacity: isActive ? 1 : 0.8,

  '&::before': isActive
    ? {
        content: '""',
        position: 'absolute',
        left: theme.spacing(1.75),
        top: theme.spacing(1.25),
        borderLeft: `2px solid ${theme.palette.common.white}`,
        borderRadius: theme.shape.borderRadius,
        height: theme.spacing(2),
        boxShadow: `0 0 4px 1px ${theme.palette.common.white}`
      }
    : {}
});
