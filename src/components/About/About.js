import React from 'react';
import './About.css';
import awsBadge from '../../images/aws.png';
import portfolio from '../../images/portfolio.png';

function About() {
  return (
    <div>
      <section id='colorlib-hero'>
        <div className='hero-content'>
          <img src={portfolio} alt='Profile' className='profile-image' />
        </div>
      </section>
      <section className='colorlib-about' data-section='about'>
        <div className='colorlib-narrow-content'>
          <div className='row'>
            <div className='col-md-12'>
              <div
                className='row row-bottom-padded-sm animate-box fadeInLeft animated'
                data-animate-effect='fadeInLeft'
              >
                <div className='col-md-12'>
                  <div className='about-desc'>
                    <span className='heading-meta'>About Me</span>
                    <div className='heading-with-badge'>
                      <h2 className='colorlib-heading'>Backend Engineer</h2>
                      <img
                        src={awsBadge}
                        alt='AWS Certified Developer'
                        className='aws-badge-small'
                      />
                    </div>
                    <p>
                      <strong>
                        백엔드와 인프라를 중심으로, 필요하면 프론트까지 직접
                        구현하는 백엔드 엔지니어입니다.
                      </strong>
                    </p>
                    <p>
                      <strong>핵심 성과</strong>
                      <br />• VM 2대 + 로드밸런서 수평 확장으로{' '}
                      <strong>TPS 20→102</strong> (부하 테스트 기준)
                      <br />• AWS→KT Cloud 인프라 마이그레이션, TypeORM 0.2→0.3
                      업그레이드
                      <br />
                      • OpenAI Assistant API 기반 AI 챗봇 플랫폼 구축 및
                      서비스화
                      <br />• Socket.io 실시간 통신 서버 구축,{' '}
                      <strong>행사 기간 동시 접속 약 100명</strong> 운영
                      <br />
                      <br />
                      <strong>주요 기술 스택</strong>
                      <br />• <strong>Backend:</strong> NestJS, Express,
                      Node.js, Socket.io
                      <br />• <strong>Database:</strong> MySQL, MongoDB, Redis
                      (세션 저장소)
                      <br />• <strong>Infrastructure:</strong> AWS, KT Cloud,
                      Docker, Jenkins CI/CD
                      <br />• <strong>AI/ML:</strong> OpenAI API, Vector Store,
                      Function Calling
                      <br />
                      <br />
                      <strong>특별한 배경</strong>
                      <br />
                      요리사에서 개발자로 전향한 독특한 이력을 가지고 있습니다.
                      주방에서 배운{' '}
                      <strong>
                        위기 상황 대처능력, 팀워크, 완벽한 타이밍 관리
                      </strong>
                      가 현재 시스템 아키텍처 설계와 장애 대응에 큰 도움이 되고
                      있습니다.
                      <br />
                      <br />
                      <strong>개발 철학</strong>
                      <br />
                      단순히 기능을 구현하는 것이 아닌,{' '}
                      <strong>비즈니스 임팩트를 만드는 개발자</strong>가 되고자
                      합니다. 성능 최적화, 사용자 경험, 그리고 확장 가능한
                      아키텍처를 통해 실질적인 가치를 창출하는 것이 저의
                      목표입니다.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
