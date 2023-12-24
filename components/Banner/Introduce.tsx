import { styled } from '@stitches/react';

const IntroduceWrapper = styled('div', {
  textAlign: 'center',
});

const Title = styled('h1', {
  fontSize: '52px',
  fontWeight: 900,
  marginTop: 0,
  marginBottom: 0,
});

const SubTitle = styled('h2', {
  color: 'rgb(73, 80, 87)',
  fontWeight: 700,
  wordBreak: 'keep-all',
});

type IntroduceProps = {
  title: string;
  subTitle: string;
};

function Introduce({ title, subTitle }: IntroduceProps) {
  return (
    <IntroduceWrapper>
      <Title>{title}</Title>
      <SubTitle>{subTitle}</SubTitle>
    </IntroduceWrapper>
  );
}

export default Introduce;
