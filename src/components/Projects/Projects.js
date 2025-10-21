// src/components/Projects/Projects.js
import React from 'react';
import PropTypes from 'prop-types';

import blog from '../../images/b-log.png';
import readyplay from '../../images/readyplay.png';
import studeaming from '../../images/studeaming.png';
import localo from '../../images/localo.png';
import gyeongbuk from '../../images/gyeongbuk.png';
import aisurvey from '../../images/aisurvey.png';
import aihighlight from '../../images/aihighlight.png';

import ian from '../../images/ian.png';
import './Projects.css';

const Project = ({
  image,
  url,
  title,
  subtitle,
  description,
  problem,
  solution,
  result,
  links,
  animation,
  contribution,
}) => (
  <div
    className={`col-md-6 animate-box ${animation} animated`}
    data-animate-effect={animation}
  >
    <div className='project'>
      <img className='project-image' src={image} alt={title} />
      <div className='desc'>
        <div className='con'>
          <h3 className='project-title'>
            <a href={url} target='_blank' rel='noreferrer'>
              {title.startsWith('프로젝트')
                ? title
                : `프로젝트${title.startsWith('명') ? title : ': ' + title}`}
            </a>
          </h3>
          {contribution && (
            <div className='contribution-wrapper'>
              <span className='contribution-label'>기여도</span>
              <div className='contribution-bar'>
                <div
                  className='contribution-fill'
                  style={{ width: `${contribution}%` }}
                >
                  <span className='contribution-percent'>{contribution}%</span>
                </div>
              </div>
            </div>
          )}
          <p className='project-subtitle'>{subtitle}</p>

          {problem || solution || result ? (
            <div className='project-details'>
              {problem && (
                <div className='detail-section problem'>
                  <div className='detail-label'>문제</div>
                  <div className='detail-content'>{problem}</div>
                </div>
              )}
              {solution && (
                <div className='detail-section solution'>
                  <div className='detail-label'>해결</div>
                  <div className='detail-content'>{solution}</div>
                </div>
              )}
              {result && (
                <div className='detail-section result'>
                  <div className='detail-label'>성과</div>
                  <div className='detail-content'>{result}</div>
                </div>
              )}
            </div>
          ) : (
            description && <p className='project-description'>{description}</p>
          )}

          <div className='project-links'>
            {links.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target='_blank'
                rel='noreferrer'
                className='project-link'
              >
                <i className={link.icon || 'icon-data'}></i> {link.text}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
);

Project.propTypes = {
  image: PropTypes.string.isRequired,
  url: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  description: PropTypes.string,
  problem: PropTypes.string,
  solution: PropTypes.string,
  result: PropTypes.string,
  links: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string,
      text: PropTypes.string,
      icon: PropTypes.string,
    }),
  ),
  animation: PropTypes.string,
  contribution: PropTypes.number,
};

function Projects() {
  const projects = [
    {
      image: aihighlight,
      url: 'https://aihi.mirrordays.com/',
      title: 'AI Highlight 초기 서비스 구축',
      contribution: 50,
      subtitle:
        '2025.03 ~ 진행 중 | yd-dlp라는 라이브러리를 활용한 유튜브 요약 서비스',
      problem:
        '유튜브 영상 다운로드 시 IP 차단 및 속도 제한 문제로 서비스 안정성 저하. 수동 배포로 인한 배포 시간 지연 및 장애 발생 시 원인 파악 어려움',
      solution:
        'GCP 기반 프록시 인프라를 구축하여 IP 분산 처리. Jenkins를 활용한 CI/CD 파이프라인 자동화로 배포 프로세스 개선',
      result:
        '유튜브 다운로드 성공률 95% 이상 달성. 배포 시간 30분→5분으로 83% 단축. 장애 대응 시간 60% 감소',
      links: [
        {
          url: 'https://aihi.mirrordays.com/',
          text: '서비스 바로가기',
          icon: 'icon-data',
        },
      ],
      animation: 'fadeInLeft',
    },
    {
      image: ian,
      url: 'https://aitalker.co.kr/ms1993/2553',
      title: 'AI Talker 서비스 고도화',
      contribution: 50,
      subtitle:
        '2025.02 ~ 진행 중 | OpenAI Assistant API를 활용한 개인용 AI 챗봇 플랫폼',
      problem:
        '단순 대화형 챗봇으로는 사용자별 맞춤 정보 제공 불가능. 대화 중 실시간 외부 데이터 연동 기능 부재로 활용도 제한',
      solution:
        'OpenAI Vector Store를 활용한 파일 기반 학습 시스템 구축으로 사용자별 문서 업로드 및 질의응답 기능 구현. Function Calling을 통해 대화 맥락 분석 후 외부 API(날씨, 뉴스 등) 자동 호출 트리거 로직 개발',
      result:
        '사용자별 커스텀 AI 어시스턴트 생성 가능. 외부 데이터 연동으로 실시간 정보 제공 기능 추가, 사용자 만족도 40% 향상',
      links: [
        {
          url: 'https://aitalker.co.kr/ms1993/2553',
          text: '서비스 바로가기',
          icon: 'icon-data',
        },
      ],
      animation: 'fadeInLeft',
    },
    {
      image: aisurvey,
      url: 'https://aisurvey.mirrordays.com/',
      title: 'AI Survey 고도화 작업',
      contribution: 100,
      subtitle:
        '2025.01 ~ 진행 중 | OpenAI API를 활용한 대화형 설문 생성 서비스',
      problem:
        '초기 프로토타입 단계로 데이터베이스 구조 미정립 및 수동 배포로 인한 서비스 확장성 한계. 사업화 검증 필요',
      solution:
        '서비스 요구사항 분석 후 정규화된 데이터베이스 ERD 설계 및 구축. Jenkins 기반 CI/CD 파이프라인 구축으로 코드 푸시 시 자동 빌드, 테스트, 배포 환경 구성. AI 기반 대화형 설문 생성 프로토타입 완성',
      result:
        '사업화 검증 완료 및 투자 유치 성공. 배포 자동화로 개발 생산성 50% 향상. 확장 가능한 DB 구조로 향후 기능 추가 용이',
      links: [
        {
          url: 'https://aisurvey.mirrordays.com/',
          text: '서비스 바로가기',
          icon: 'icon-data',
        },
      ],
      animation: 'fadeInLeft',
    },
    {
      image: gyeongbuk,
      url: 'https://gb.go.kr/metaport',
      title: '경북메타포트 (GB metaport)',
      contribution: 100,
      subtitle:
        '2023.03 ~ 진행 중 | 경북도청을 모티브로 한 메타버스 서비스 구축 국가사업',
      problem:
        '서비스 성능 저하로 사용자 경험 악화. TPS 20 수준으로 동시 접속자 처리에 한계가 있었고, 응답 시간이 3초 이상 소요되어 실시간 메타버스 경험을 제공하기 어려운 상황',
      solution:
        'AWS에서 KT Cloud로 인프라 마이그레이션을 진행하고, TypeORM 0.2→0.3 업그레이드를 통한 쿼리 최적화 수행. Redis 기반 캐싱 전략을 도입하여 반복 조회 데이터 처리 속도를 개선하고, JMeter를 활용한 부하 테스트로 병목 지점을 분석 및 해결',
      result:
        'TPS 20→102로 510% 성능 향상, 응답 시간 70% 단축. 동시 접속자 100명 이상 안정적 처리 가능',
      links: [
        {
          url: 'https://play.google.com/store/apps/details?id=com.salin.GBMeta&pcampaignid=web_share',
          text: '안드로이드 다운로드',
          icon: 'icon-data',
        },
        {
          url: 'https://gb.go.kr/metaport',
          text: '웹 서비스 바로가기',
          icon: 'icon-data',
        },
      ],
      animation: 'fadeInLeft',
    },
    {
      image: readyplay,
      url: 'https://www.readyplay.co.kr/',
      title: 'Readyplay',
      contribution: 50,
      subtitle:
        '가상공간을 통해, 공간에 구애받지 않고 어디서든 만날 수 있는 메타버스 프로젝트',
      problem:
        'PC와 모바일 플랫폼 간 실시간 동기화 이슈로 사용자 경험 불일치. 멀티플랫폼 환경에서 동일한 메타버스 경험 제공 필요',
      solution:
        'WebSocket 기반 실시간 통신 구조 설계 및 구현. Unity와 React Native 간 데이터 동기화 프로토콜 정의. RESTful API와 실시간 이벤트 처리를 결합한 하이브리드 통신 아키텍처 구축',
      result:
        'PC-모바일 간 실시간 동기화 지연시간 200ms 이하 달성. 크로스 플랫폼 사용자 동시 접속 지원으로 서비스 활용도 증가',
      links: [
        {
          url: 'https://youtu.be/DWH8g6cnGw0?si=eQ8NZy7X9qOuikAT',
          text: '구현 기능 상세보기',
          icon: 'icon-data',
        },
      ],
      animation: 'fadeInRight',
    },
    {
      image: localo,
      url: 'http://xn--2o2ba144o.com/',
      title: '로컬로 (Localro)',
      contribution: 100,
      subtitle:
        '2022.03 ~ 2023.11 | 창원시 어시장을 모티브로 한 메타버스 커머스 서비스',
      problem:
        '초기 개발된 API 서버의 안정성 부족 및 인증 시스템 미비. AWS 인프라 비용 최적화 필요',
      solution:
        'NestJS 기반 API 서버 리팩토링 및 에러 핸들링 강화. Google Firebase Authentication 도입으로 소셜 로그인 및 사용자별 권한 관리 구현. AWS ECS Fargate로 컨테이너 오케스트레이션, CloudFront CDN 적용, S3 라이프사이클 정책 설정으로 인프라 비용 절감',
      result:
        'API 에러율 15%→2%로 감소. 소셜 로그인 도입으로 회원가입 전환율 35% 향상. AWS 인프라 비용 월 40% 절감',
      links: [
        {
          url: 'https://play.google.com/store/apps/details?id=com.Salin.Localo&pcampaignid=web_share&pli=1',
          text: '안드로이드 다운로드',
          icon: 'icon-data',
        },
        {
          url: 'https://apps.apple.com/kr/app/%EB%A1%9C%EC%BB%AC%EB%A1%9C/id6463846655',
          text: '아이폰 다운로드',
          icon: 'icon-data',
        },
      ],
      animation: 'fadeInLeft',
    },
  ];

  const archivedProjects = [
    {
      image: blog,
      url: 'http://b-log.ml',
      title: '디지털과 아날로그 감성을 잇는 독서 기록서비스 (B-log)',
      subtitle: '(2021.11.04 - 2021.11.18) (사이드 프로젝트 종료)',
      description:
        '독서 기록 서비스. 어릴적 책을 읽던 시절이 지금에는 E-BOOK 형태로 변하게 되었습니다. 책장에 꽂힌 책들을 보며 무슨 책을 읽었는지 확인하던 그때의 감성을 E-BOOK은 느끼지 못합니다. 그렇기 때문에 이 웹페이지는 그런 감상을 느낄수있도록 E-BOOK 독서 기록 서비스를 제공합니다.',
      links: [
        {
          url: 'https://github.com/codestates/B-log',
          text: 'Project Github',
          icon: 'icon-eye',
        },
        {
          url: 'https://youtu.be/1y59VDkCj08',
          text: '구현 기능 상세보기',
          icon: 'icon-data',
        },
      ],
      animation: 'fadeInLeft',
    },
    {
      image: studeaming,
      url: 'http://studeaming.com/',
      title: '명: 누구나 쉽게 Study with me, 공부 스트리밍 플랫폼 Studeaming',
      subtitle: '(2021.11.20 - 2021.12.21) (사이드 프로젝트 종료)',
      description:
        '코로나 시국에 접어들게 되면서 다같이 모여 공부를 하거나, 스터디를 할수없는 시대가 되었습니다. 그러다보니 Study with me라는 트렌트가 유투브에서 유행을 하게되었고, 그런 트렌드에 맞춰 기획하게되었습니다. 유투브의 단점을 보완하고자 해당 기능인 스트리밍, 공부에만 충실할수있도록 만든 서비스입니다.',
      links: [
        {
          url: 'http://www.personalconnect.co.kr',
          text: 'Project Github',
          icon: 'icon-eye',
        },
        {
          url: 'https://deaguowl.github.io/pdf/connect.pdf',
          text: '구현 기능 상세보기',
          icon: 'icon-data',
        },
      ],
      animation: 'fadeInRight',
    },
  ];

  return (
    <section className='colorlib-about' data-section='projects'>
      <div className='colorlib-narrow-content'>
        <div className='row'>
          <div
            className='col-md-6 col-md-offset-3 col-md-pull-3 animate-box fadeInLeft animated'
            data-animate-effect='fadeInLeft'
          >
            <span className='heading-meta'>My Work</span>
            <h2 className='colorlib-heading animate-box fadeInUp animated'>
              Project
            </h2>
          </div>
        </div>

        <div className='row'>
          {projects.map((project, index) => (
            <Project key={index} {...project} />
          ))}
        </div>

        {archivedProjects.map((project, index) => (
          <div className='row' key={`archived-${index}`}>
            <Project {...project} />
          </div>
        ))}

        <div className='row'>
          <div className='col-md-12 animate-box fadeInUp animated'>
            <p>
              <button className='btn btn-primary btn-lg btn-load-more' disabled>
                앞으로 더 많은 프로젝트가 추가될 예정입니다
              </button>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
