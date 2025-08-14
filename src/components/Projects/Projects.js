// src/components/Projects/Projects.js
import React from 'react';
import PropTypes from 'prop-types';

import blog from '../../images/b-log.png';
import readyplay from '../../images/readyplay.png';
import studeaming from '../../images/studeaming.png';
import localo from '../../images/localo.png';
import gyeongbuk from '../../images/gyeongbuk.png';
import aisurvey from '../../images/aisurvey.png';

import ian from '../../images/ian.png';
import './Projects.css';

const Project = ({
  image,
  url,
  title,
  subtitle,
  description,
  links,
  animation,
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
          <p className='project-subtitle'>{subtitle}</p>
          <p className='project-description'>{description}</p>
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
  links: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string,
      text: PropTypes.string,
      icon: PropTypes.string,
    }),
  ),
  animation: PropTypes.string,
};

function Projects() {
  const projects = [
    {
      image: ian,
      url: 'https://aitalker.co.kr/ms1993/2553',
      title: 'AI Talker 서비스 고도화',
      subtitle:
        '2025.02 ~ 진행 중 | OpenAI Assistant API를 활용한 개인용 AI 챗봇 플랫폼',
      description:
        'OpenAI Vector Store에 파일을 저장하고 이를 기반으로 질의응답이 가능한 파일 기반 학습 시스템을 구축. Function Calling 기능을 활용하여 대화 중 특정 키워드 및 문맥을 감지해 외부 API를 자동 호출하는 트리거 로직을 구현했습니다.',
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
      subtitle:
        '2025.01 ~ 진행 중 | OpenAI API를 활용한 대화형 설문 생성 서비스',
      description:
        'AI 기반 대화형 설문 생성 서비스 프로토타입을 구현하여 사업화 가능성을 검증. 서비스 전반에 필요한 데이터베이스 ERD를 설계하고 구축하며, Jenkins 기반의 CI/CD 파이프라인을 통해 자동 빌드 및 배포 프로세스를 구현했습니다.',
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
      subtitle:
        '2023.03 ~ 진행 중 | 경북도청을 모티브로 한 메타버스 서비스 구축 국가사업',
      description:
        'AWS에서 KT Cloud로 인프라 마이그레이션 및 TypeORM 0.2→0.3 업그레이드를 통한 성능 개선. Redis 기반 캐싱 전략 도입과 JMeter 부하 테스트로 시스템 안정성을 검증하여 TPS 20→102까지 성능을 향상시켰습니다.',
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
      subtitle:
        '가상공간를통해, 공간에 구애받지않고 어디서든 만날수있는 메타버스 프로젝트',
      description:
        '메타버스 서비스를 제공하는 애플리케이션입니다. PC와 앱 두 가지 버전을 제공하며, 가상의 캐릭터를 통해 메타버스를 경험할 수 있습니다.',
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
      subtitle:
        '2022.03 ~ 2023.11 | 창원시 어시장을 모티브로 한 메타버스 커머스 서비스',
      description:
        'NestJS 기반 API 서버의 유지보수 및 기능 개선을 주도. Google Firebase Authentication을 활용하여 유저 인증 및 사용자별 데이터 관리 로직을 구현하고, AWS 인프라(ECS, EC2, S3, RDS 등) 구성 및 운영을 담당했습니다.',
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
