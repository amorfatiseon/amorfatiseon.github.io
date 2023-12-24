import { styled } from '@stitches/react';

const TitleWrapper = styled('div', {
  display: 'flex',
  '-webkit-box-pack': 'center',
  justifyContent: 'center',
  '-webkit-box-align': 'center',
  alignItems: 'center',
  flexDirection: 'column',
});

const TitleText = styled('h1', {
  marginBottom: '2rem',
});

type TitleProps = {
  title: string;
};

function Title({ title }: TitleProps) {
  return (
    <TitleWrapper>
      <TitleText>{title}</TitleText>
    </TitleWrapper>
  );
}

export default Title;
