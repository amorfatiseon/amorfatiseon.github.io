import { styled } from '@stitches/react';
import Image from 'next/image';

const IconWrapper = styled('a', {
  fontSize: '28px',
  color: 'inherit',
  textDecoration: 'none',
  margin: '8px',
});

const ButtonsWrapper = styled('ul', {
  listStyle: 'none',
  padding: 0,
  margin: 0,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: '24px',
  color: 'rgb(134, 142, 150)',
  transition: 'all 0.3s ease 0s',
  '-webkit-box-pack': 'center',
  '-webkit-box-align': 'center',
});

function Buttons() {
  return (
    <ButtonsWrapper>
      <IconWrapper href="mailto:amorfatiseon@naver.com">
        <Image src="/email.svg" alt="e-mail" width={28} height={28} />
      </IconWrapper>
    </ButtonsWrapper>
  );
}

export default Buttons;
