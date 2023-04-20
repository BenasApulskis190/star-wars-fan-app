import { Box, styled } from '@mui/material';

type Props = {
  src: string;
  alt: string;
};

export const ImagePoster = ({ src, alt }: Props) => {
  const ImageContainer = styled(Box)(() => ({
    position: 'relative',
    paddingTop: '56.25%',
    overflow: 'hidden'
  }));

  return (
    <ImageContainer>
      <img
        src={src}
        alt={alt}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'contain'
        }}
      />
    </ImageContainer>
  );
};
