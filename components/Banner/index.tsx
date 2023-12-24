import { styled } from '@stitches/react';
import ChatBubble from './ChatBubble';
import ReadButton from './ReadButton';
import Introduce from './Introduce';
import Profile from './Profile';

const BannerWrapper = styled('div', {
  display: 'flex',
  '-webkit-box-align': 'center',
  alignItems: 'center',
  '-webkit-box-pack': 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  width: '100%',
  height: '700px',
});

type BannerProps = {
  picture: any;
  chatBubble: string;
  title: string;
  subTitle: string;
  downloadUrl: string;
};

function Banner({ picture, chatBubble, title, subTitle, downloadUrl }: BannerProps) {
  return (
    <BannerWrapper>
      <Profile picture={picture} />
      <ChatBubble>{chatBubble}</ChatBubble>
      <Introduce title={title} subTitle={subTitle} />
      <ReadButton href={downloadUrl}>이력서 및 경력기술서 읽어보기</ReadButton>
    </BannerWrapper>
  );
}

export default Banner;
