import { Theme, Typography } from '@mui/material';
import { ReactNode } from 'react';
import { styled } from '@mui/system';

type Props = {
  children: ReactNode;
};

const StyledTypography = styled(Typography)(({ theme }) => {
  const { palette, spacing, typography } = theme as Theme;

  return {
    position: 'relative',
    marginBottom: spacing(3),
    fontWeight: typography.fontWeightBold,

    '&::before, &::after': {
      content: '""',
      position: 'absolute',
      backgroundColor: palette.common.black,
      height: 2,
      bottom: 0,
      borderRadius: 2
    },

    '&::before': {
      width: 4,
      left: 0
    },

    '&::after': {
      left: spacing(1),
      width: `calc(100% - ${spacing(1)})`
    }
  };
});

export const TitleHeader = ({ children }: Props) => (
  <StyledTypography variant="h4">{children}</StyledTypography>
);
