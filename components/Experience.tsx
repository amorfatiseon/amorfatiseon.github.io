import { styled } from '@stitches/react';
import Title from './Title';

const Wrapper = styled('div', {
  display: 'flex',
  '-webkit-box-pack': 'center',
  justifyContent: 'center',
  '-webkit-box-align': 'center',
  alignItems: 'center',
  flexDirection: 'column',
  marginBottom: '24px',
});

function Experience() {
  return (
    <Wrapper>
      <Title title="Experience" />
      <ul className="timeline">
        <li>
          <div className="direction-r">
            <div className="flag-wrapper">
              <span className="flag">G마켓</span>
              <span className="time-wrapper">
                <span className="time">2022년 5월 ~ 2023년 4월</span>
              </span>
            </div>
            <div className="desc">
              마케팅&브랜드 커뮤니케이션팀
              <br />
              (매니저)
            </div>
          </div>
        </li>
        <li>
          <div className="direction-l">
            <div className="flag-wrapper">
              <span className="flag">인터파크</span>
              <span className="time-wrapper">
                <span className="time">2017년 6월 ~ 2022년 5월</span>
              </span>
            </div>
            <div className="desc">홍보팀 (과장)</div>
          </div>
        </li>
        <li>
          <div className="direction-r">
            <div className="flag-wrapper">
              <span className="flag">홈플러스</span>
              <span className="time-wrapper">
                <span className="time">2014년 12월 ~ 2017년 6월</span>
              </span>
            </div>
            <div className="desc">PR팀 (선임)</div>
          </div>
        </li>
        <li>
          <div className="direction-l">
            <div className="flag-wrapper">
              <span className="flag">동덕여자대학교</span>
              <span className="time-wrapper">
                <span className="time">2009년 3월 ~ 2014년 2월</span>
              </span>
            </div>
            <div className="desc">
              동덕여자대학교 문예창작학과
              <br />
              학사 졸업
            </div>
          </div>
        </li>
      </ul>
    </Wrapper>
  );
}

export default Experience;
