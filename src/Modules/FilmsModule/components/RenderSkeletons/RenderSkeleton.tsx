import { Grid, Skeleton } from '@mui/material';
import {
  StyledBox,
  StyledCard,
  StyledCardContent
} from './RenderSkeleton.style';

export const RenderSkeletons = () => {
  const filmCount = 6;

  return (
    <>
      {Array.from({ length: filmCount }).map((_, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <StyledCard>
            <Skeleton variant="rectangular" width="100%" height={200} />
            <StyledBox>
              <StyledCardContent>
                <Skeleton variant="text" width="100px" />
                <Skeleton variant="text" width="80%" />
              </StyledCardContent>
            </StyledBox>
          </StyledCard>
        </Grid>
      ))}
    </>
  );
};
