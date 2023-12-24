import fs from 'fs';
import type { NextPage } from 'next';
import matter from 'gray-matter';
import md from 'markdown-it';
import Head from 'next/head';
import Footer from '../../components/Footer';
import Header from '../../components/Header';

export async function getStaticProps() {
  const fileName = fs.readFileSync('resume.md', 'utf-8');
  const { content } = matter(fileName);
  return {
    props: {
      resume: content,
    },
  };
}

type ResumeProps = {
  resume: string;
};

const Resume: NextPage<ResumeProps> = ({ resume }: ResumeProps) => {
  return (
    <>
      <Head>
        <title>박선미 - 이력서 및 경력기술서</title>
        <meta
          name="description"
          content="리스크 매니지먼트 대응 경험과 모든 영역 홍보 능력을 보유한 PR Manager 박선미 입니다."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header initial="Sm." name="SEONMI PARK" />
      <div
        className="resume"
        dangerouslySetInnerHTML={{
          __html: md({ html: true }).render(resume),
        }}
      />
      <Footer year="2024" initial="Sm." name="SEONMI PARK" />
    </>
  );
};

export default Resume;
