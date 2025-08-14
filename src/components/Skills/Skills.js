import React from 'react';
import './Skills.css';
import awsBadge from '../../images/aws.png';

function Skills() {
  return (
    <section className='colorlib-skills' data-section='skills'>
      <div className='colorlib-narrow-content'>
        <div className='row'>
          <div className='col-md-6 col-md-offset-3 col-md-pull-3 animate-box fadeInLeft'>
            <span className='heading-meta'>TECH SKILLS</span>
            <h2 className='colorlib-heading animate-box fadeInUp'>
              What I Can Do Now
            </h2>
          </div>
        </div>

        <div className='row'>
          <div className='col-md-12 animate-box fadeInLeft'>
            <p>
              비전공자로서 IT에 처음 발을 디뎠지만, 부트캠프를 통해 체계적으로
              학습하며 빠르게 성장할 수 있었습니다.
            </p>

            <h3>부트캠프에서 학습한 내용</h3>
            <ul>
              <li>JavaScript 기반 풀스택 과정</li>
              <li>
                React를 중심으로 한 프론트엔드 교육 (Redux, Styled Components
                등)
              </li>
              <li>
                Node.js를 활용한 백엔드 교육 (Express, MySQL, Mongoose 등)
              </li>
            </ul>

            <h3>살린에서 담당한 주요 업무</h3>
            <ul>
              <li>
                <strong>API 개발:</strong> Nest.js를 기반으로 메타버스 서비스에
                필요한 주요 API를 설계 및 구현
              </li>
              <li>
                <strong>실시간 통신:</strong> Socket.io를 활용한 1:1 채팅 서비스
                개발 및 최적화
              </li>
              <li>
                <strong>인프라 관리:</strong> AWS 및 KT Cloud를 활용한 인프라
                구축 및 유지보수
              </li>
              <li>
                <strong>CI/CD 관리:</strong> GitLab CI/CD 파이프라인 설계 및
                유지보수
              </li>
              <li>
                <strong>OPEN AI:</strong> openAI에서 제공하는 기능, assistant,
                vectorStore등을 이용한 기능구현
              </li>
            </ul>

            <p>
              또한, WebGL 콘텐츠 배포를 위한 클라우드 스토리지 설정 및 최적화를
              담당하며, 메타버스 서비스를 위한 안정적인 환경을 구축했습니다.
            </p>

            <h3>자격증</h3>
            <div className='certification-section'>
              <ul>
                <li>
                  <strong>AWS Certified Developer - Associate</strong> (2025)
                </li>
              </ul>
              <img
                src={awsBadge}
                alt='AWS Certified Developer - Associate'
                className='aws-badge'
              />
            </div>

            <h3>기타 주요 기술 경험</h3>
            <ul>
              <li>
                <strong>배포 자동화:</strong> 프론트엔드/백엔드 모두 GitLab push
                시 Jenkins를 통해 자동 배포되도록 파이프라인 구축
              </li>
              <li>
                <strong>DevOps 환경 구성:</strong> Jenkins, GitLab, Docker를
                활용한 사내 DevOps 플랫폼 유지보수 및 운영
              </li>
              <li>
                <strong>레거시 개선:</strong> TypeORM 0.2에서 0.3으로의 버전
                업그레이드를 통해 빌드 속도 개선 및 코드 안정성 향상
              </li>
              <li>
                <strong>KT Cloud 마이그레이션:</strong> AWS 기반 프로젝트를 KT
                Cloud로 이전하며 각종 서비스 불일치를 해결한 경험
              </li>
              <li>
                <strong>React CMS 유지보수:</strong> 사내 CMS 페이지 기능 추가
                및 API 연동 최적화
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
