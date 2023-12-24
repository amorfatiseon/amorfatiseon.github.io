import { Dispatch, SetStateAction } from 'react';
import { styled } from '@stitches/react';

const BackgroundWrapper = styled('div', {
  position: 'fixed',
  top: 0,
  left: 0,
  backgroundColor: 'rgba(0,0,0,0.2)',
  width: '100vw',
  height: '100vh',
  zIndex: 1001,
  transition: '0.3s',
});

const ModalWrapper = styled('div', {
  backgroundColor: 'white',
  width: '70%',
  minWidth: '300px',
  height: 'fit-content',
  overflowy: 'auto',
  position: 'fixed',
  left: '50%',
  top: '50%',
  padding: '12px',
  transform: 'translate(-50%, -50%)',
  zIndex: 1002,
  boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
  transition: '0.3s',
});

const Text = styled('p', {
  fontWeight: 700,
  fontSize: '1.15rem',
  marginBottom: '24px',
});

const Button = styled('button', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '6px 14px',
  borderRadius: '6px',
  border: 'none',
  color: '#fff',
  background: 'linear-gradient(180deg, #4B91F7 0%, #367AF6 100%)',
  backgroundOrigin: 'border-box',
  boxShadow:
    '0px 0.5px 1.5px rgba(54, 122, 246, 0.25), inset 0px 0.8px 0px -0.25px rgba(255, 255, 255, 0.2)',
  userSelect: 'none',
  '-webkit-user-select': 'none',
  touchAction: 'manipulation',
  '&:focus': {
    boxShadow:
      'inset 0px 0.8px 0px -0.25px rgba(255, 255, 255, 0.2), 0px 0.5px 1.5px rgba(54, 122, 246, 0.25), 0px 0px 0px 3.5px rgba(58, 108, 217, 0.5)',
    outline: 0,
  },
  float: 'right',
});

type ModalProps = {
  titleText: string;
  imageUrl: string;
  postUrlText?: string;
  postUrl?: string;
  setIsVisible: Dispatch<SetStateAction<boolean>>;
};

export default function Modal({
  titleText,
  imageUrl,
  postUrlText,
  postUrl,
  setIsVisible,
}: ModalProps) {
  const onCloseBtn = () => {
    setIsVisible(false);
  };

  return (
    <BackgroundWrapper>
      <ModalWrapper>
        <div>
          <Text>{titleText}</Text>
          <img src={imageUrl} alt={titleText} style={{ width: '100%', height: 'auto' }} />
          {postUrl && <a href={postUrl}>{postUrlText}</a>}
        </div>
        <Button onClick={onCloseBtn}>닫기</Button>
      </ModalWrapper>
    </BackgroundWrapper>
  );
}
