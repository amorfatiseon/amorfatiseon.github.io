import { styled } from '@stitches/react';

const ChatBubble = styled('div', {
  position: 'absolute',
  top: '300px',
  left: 'calc(50% + 140px)',
  background: 'rgb(255, 255, 255)',
  fontWeight: 700,
  fontSize: '24px',
  boxShadow: 'rgb(0 0 0 / 15%) 0px 2px 8px',
  borderRadius: '8px',
  padding: '1rem',
  '@media (max-width: 930px)': {
    top: '320px',
    left: 'initial',
    right: '15px',
    margin: 0,
  },
});

export default ChatBubble;
