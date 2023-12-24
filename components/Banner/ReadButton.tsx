import { styled } from '@stitches/react';

const ReadButton = styled('a', {
  textDecoration: 'none',
  border: '2px solid rgb(134, 142, 150)',
  color: 'rgb(134, 142, 150)',
  background: 'none',
  padding: '1rem 1.5rem',
  borderRadius: '8px',
  marginTop: '3rem',
  fontSize: '20px',
  fontWeight: 700,
  transition: 'all 0.3s ease 0s',
  '&:hover': {
    border: '2px solid rgb(0, 0, 0)',
    color: 'rgb(0, 0, 0)',
  },
});

export default ReadButton;
