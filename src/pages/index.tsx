import { useState } from 'react';
import Head from 'next/head';
import Header from '../../components/Header';
import Banner from '../../components/Banner';
import About from '../../components/About';
import Experience from '../../components/Experience';
import Title from '../../components/Title';
import Footer from '../../components/Footer';
import Modal from '../../components/Modal';

export default function Home() {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [titleText, setTitleText] = useState<string>('');
  const [imageUrl, setImageUrl] = useState<string>('');

  return (
    <>
      <Head>
        <title>Seonmi Park :: PR Manager</title>
        <meta
          name="description"
          content="리스크 매니지먼트 대응 경험과 모든 영역 홍보 능력을 보유한 PR Manager 박선미 입니다."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header initial="Sm." name="SEONMI PARK" />
      <Banner
        picture="/profile.jpg"
        chatBubble="Hi, I'm Seonmi 👋"
        title="PR Manager"
        subTitle="리스크 매니지먼트 대응 경험과 모든 영역 홍보 능력을 보유"
        downloadUrl="https://amorfatiseon.github.io/resume"
      />
      <About />
      <Experience />
      <>
        <Title title="PR Portfolio" />
        <ul>
          <li>
            기업 PR
            <ul>
              <li>
                📰{' '}
                <a href="https://n.news.naver.com/mnews/article/014/0004913456?sid=101">
                  파이낸셜뉴스 : 신세계그룹 시너지 성과
                </a>
              </li>
              <li>
                📰{' '}
                <a href="https://n.news.naver.com/mnews/article/014/0004916881?sid=102">
                  파이낸셜뉴스 (fn이사람) : G마켓 신규 서비스 론칭 담당자 인터뷰
                </a>
              </li>
              <li>
                📰{' '}
                <a href="http://www.thebell.co.kr/free/content/ArticleView.asp?key=202206241338452120103271&svccode=00&page=1&sort=thebell_check_time">
                  더벨 : 신세계그룹 시너지 성과
                </a>
              </li>
            </ul>
          </li>
          <li>
            임원 인터뷰
            <ul>
              <li>
                이투데이 (W기획) : 홈플러스 우수 복지문화 소개 및 CHRO 인터뷰
                <ul>
                  <li>
                    📰{' '}
                    <a href="https://www.etoday.co.kr/news/view/1471300">
                      홈플러스 복지문화 소개 기사
                    </a>
                  </li>
                  <li>
                    📰{' '}
                    <a href="https://www.etoday.co.kr/news/view/1471305">
                      홈플러스 CHRO 인터뷰 기사
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                📰{' '}
                <a href="https://news.naver.com/main/read.nhn?mode=LSD&mid=sec&sid1=103&oid=009&aid=0004133929">
                  매일경제 (여행 파이오니어) : 인터파크투어 대표 인터뷰
                </a>
              </li>
              <li>
                📰{' '}
                <a href="https://www.etoday.co.kr/news/view/1582999">
                  이투데이 (유통명장을 찾아서) : 인터파크투어 여행사업부 상무 인터뷰
                </a>
              </li>
            </ul>
          </li>
          <li>
            방송뉴스
            <ul>
              <li>
                📺 MBN (8시 뉴스) : <a href='https://mbn.co.kr/news/economy/3194040'>‘짐승용량 상품 인기몰이’ 대용량 상품 인기 트렌드 및 주력 상품 소개</a>
              </li>
              <li>
                📺 채널A (뉴스A) : <a href='https://n.news.naver.com/mnews/article/449/0000205771?sid=101'>‘다시 울리는 여행사 전화’ 포스트 코로나 여행사 상품 소개 및 인기</a>
              </li>
              <li>📺 MBC (뉴스데스크) : <a href='https://n.news.naver.com/mnews/article/214/0001185260?sid=101'>‘억눌렸던 소비 진작’ 포스트 코로나 여행상품 소개 및 기대감</a></li>
            </ul>
          </li>
          <li>
            기획기사 (데이터 분석 기반 트렌드 발굴 / 인포그래픽 기획)
            <ul>
              <li>
                시즈널 이슈 활용 소비 트렌드 분석 및 인포그래픽
                <ul>
                  <li>
                    📰{' '}
                    <a href="https://n.news.naver.com/mnews/article/030/0003061907?sid=101">
                      ‘해외직구 소비 경향 분석’ 전자신문 기사
                    </a>
                  </li>
                  <li>
                    📰{' '}
                    <a href="https://n.news.naver.com/mnews/article/008/0004778466?sid=101">
                      ‘고물가에 알뜰소비 인기’ 머니투데이 기사
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                📰{' '}
                <a href="https://n.news.naver.com/mnews/article/016/0001507007?sid=101">
                  새로운 여행 트렌드, 해외 한 달 살기 열풍
                </a>
              </li>
              <li>
                📰{' '}
                <a href="https://www.etnews.com/20210506000047">
                  해외 대신 국내여행, 국내숙박 회복세 트렌드
                </a>
              </li>
              <li>
                주52시간 근로시간 단축에 따른 워라밸 열풍, 국내여행 인기
                <ul>
                  <li>
                    📰{' '}
                    <a href="https://news.naver.com/main/read.nhn?mode=LSD&mid=sec&sid1=103&oid=009&aid=0004203599">
                      매일경제 기사
                    </a>
                  </li>
                  <li>
                    📺{' '}
                    <a href="https://news.mtn.co.kr/newscenter/news_viewer.mtn?gidx=2018072009264127237">
                      MTN 방송뉴스
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            기획 시리즈
            <ul>
              <li>
                포스트 코로나 위기를 기회로 재도약 : 보도/기획자료, 자료제공, 지속적인 언론대응을
                통한<br />포스트 코로나 선도 기업 브랜딩 및 세일즈 지원
                <ul>
                  <li>
                    다양한 해외여행 상품 출시 알람 및 차별화된 상품 기획 가능한 회사 경쟁력 어필
                  </li>
                  <li>상품 판매 추이 및 매출 현황 / 특이점 및 인기 요인 분석</li>
                  <li>
                    여행 상품 판매 수요 기반 데이터 분석으로 포스트 코로나 여행 트렌드 예측 外
                  </li>
                  <li>
                    📰{' '}
                    <a href="https://news.naver.com/main/read.nhn?mode=LSD&mid=sec&sid1=103&oid=009&aid=0004737910">
                      매일경제(홈쇼핑 성공) 기사
                    </a>
                  </li>
                  <li>
                    📰{' '}
                    <a href="https://news.naver.com/main/read.nhn?mode=LSD&mid=sec&sid1=101&oid=009&aid=0004778126">
                      매일경제(얼린 항공권 분석) 기사
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                위드 코로나 선도 기업 브랜딩 및 세일즈 지원
                <ul>
                  <li>
                    다양한 해외여행 상품 출시 알람 및 차별화된 상품 기획 가능한 회사 경쟁력 어필
                  </li>
                  <li>상품 판매 추이 및 매출 현황 / 특이점 및 인기 요인 분석</li>
                  <li>
                    여행 상품 판매 수요 기반 데이터 분석으로 포스트 코로나 여행 트렌드 예측 外
                  </li>
                  <li>
                    📺{' '}
                    <a href="https://news.naver.com/main/read.naver?mode=LSD&mid=sec&sid1=101&oid=056&aid=0011155744">
                      KBS 뉴스
                    </a>
                  </li>
                  <li>
                    📰{' '}
                    <a href="https://news.naver.com/main/read.naver?mode=LSD&mid=sec&sid1=103&oid=016&aid=0001911744">
                      헤럴드경제 기사
                    </a>
                  </li>
                  <li>
                    🔗{' '}
                    <a href="https://www.youtube.com/watch?v=BTP0wSNO4l0">
                      이투데이 유튜브 보니보니 코너 인형투어 콘텐츠
                    </a>
                  </li>
                  <li>
                    🔗{' '}
                    <a href="https://post.naver.com/viewer/postView.nhn?volumeNo=20266566&memberNo=38747808&vType=VERTICAL">
                      네이버 잡앤 입사가이드 인터파크편 콘텐츠
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            그룹사 주요 보도자료 및 사진 기획
            <ul>
              <li>
                📰{' '}
                <a href="https://n.news.naver.com/mnews/article/014/0004881467?sid=101">
                  G마켓-SSG닷컴 연계 ‘스마일프레시’(신선식품 판매 확대) 신규 서비스 론칭
                </a>
              </li>
              <li>
                📰{' '}
                <a href="https://n.news.naver.com/mnews/article/016/0002058846?sid=101">
                  G마켓, 연중 최대 쇼핑 축제 ‘빅스마일데이‘(신세계그룹 슬로건 : 생활비가 내린다)
                  오픈
                </a>
              </li>
            </ul>
          </li>
          <li>
            사내 MC
            <ul>
              <li>
                🔗{' '}
                <a href="https://www.youtube.com/watch?v=uNE3KPv0E4A&t=14s">
                  인터파크 온라인 직무설명회 MC
                </a>
              </li>
            </ul>
          </li>
          <li>
            사내 홍보 모델
            <ul>
              <li>
                🔗{' '}
                <a
                  onClick={() => {
                    setTitleText('🔗 인터파크 사내모델');
                    setImageUrl('/interpark_model.jpg');
                    setIsVisible(true);
                  }}
                >
                  인터파크 사내모델
                </a>
              </li>
              <li>
                🔗{' '}
                <a
                  onClick={() => {
                    setTitleText('🔗 홈플러스 사내모델');
                    setImageUrl('/homeplus_model.jpg');
                    setIsVisible(true);
                  }}
                >
                  홈플러스 사내모델
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </>
      <Footer year="2024" initial="Sm." name="SEONMI PARK" />
      {isVisible && <Modal titleText={titleText} imageUrl={imageUrl} setIsVisible={setIsVisible} />}
    </>
  );
}
