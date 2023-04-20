import { styled } from '@mui/system';
import { Box, Card, CardContent } from '@mui/material';

export const StyledBox = styled(Box)({
  display: 'flex',
  flexDirection: 'column'
});

export const StyledCardContent = styled(CardContent)({
  flex: '1 0 auto'
});

export const StyledCard = styled(Card)({
  display: 'flex'
});
