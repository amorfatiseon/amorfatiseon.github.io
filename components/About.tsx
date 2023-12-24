import { styled } from '@stitches/react';
import Title from './Title';

const Wrapper = styled('div', {
  display: 'flex',
  '-webkit-box-pack': 'center',
  justifyContent: 'center',
  '-webkit-box-align': 'center',
  alignItems: 'center',
  flexDirection: 'column',
});

const Text = styled('p', {
  fontWeight: 400,
  fontSize: '1.15rem',
});

function About() {
  return (
    <Wrapper>
      <Title title="About" />
      <div>
        <Text>회사 주요 사업 및 현안 관련 홍보 콘텐츠 개발을 통한 기획기사 발굴 역량과,</Text>
        <Text>
          기업 홍보(CPR), 마케팅 홍보(MPR), 사회 공헌(CSR)을 비롯한 전 영역 홍보 능력을 보유하고
          있으며
        </Text>
        <Text>
          적극적이고 주도적인 커뮤니케이션 능력으로 다양한 임직원 및 기자 커뮤니케이션에 원활합니다.
        </Text>
        <Text>또한 폭넓은 리스크 매니지먼트 경험 및 대응 능력도 보유하고 있습니다.</Text>
      </div>
    </Wrapper>
  );
}

export default About;
