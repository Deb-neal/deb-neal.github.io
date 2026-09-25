import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <section className='colorlib-home' data-section='home'>
      <div className='colorlib-narrow-content'>
        <div className='home-header'>
          <span className='status-badge'>
            <span className='status-dot'></span>
            Available for new opportunities
          </span>
          <h1>
            Backend Engineer <span className='accent-name'>안민수</span>
          </h1>
          <h2>백엔드 · 인프라 · AI 엔지니어 • AWS Certified Developer</h2>
        </div>

        <div className='home-content'>
          <p>
            <strong>
              데이터와 코드로 비즈니스 성과를 만드는 백엔드 엔지니어입니다.
            </strong>
            <br />
            단일 VM을 수평 확장 구조로 전환하고 부하 테스트로 검증하는 등, 직접
            확인한 결과로 증명하는 개발자입니다.
          </p>

          <div className='terminal-section'>
            <div className='terminal-box'>
              <div className='terminal-header'>
                <div className='terminal-dots'>
                  <div className='terminal-dot red'></div>
                  <div className='terminal-dot yellow'></div>
                  <div className='terminal-dot green'></div>
                </div>
                <div className='terminal-title'>Terminal — minsu@server</div>
              </div>

              <div className='command-line'>
                <span className='prompt'>minsu@server:~$</span>
                <span className='command'> cat ./achievements.txt</span>
              </div>
              <div className='output'>
                ✅ VM 수평 확장 + 로드밸런서로 TPS 20→102 (부하 테스트 기준)
                <br />
                ✅ AWS→KT Cloud 마이그레이션 | TypeORM 0.2→0.3 업그레이드
                <br />✅ OpenAI 기반 AI 챗봇 플랫폼 구축 및 서비스화 완료
              </div>

              <div className='command-line'>
                <span className='prompt'>minsu@server:~$</span>
                <span className='command'> ls ./tech_stack --current</span>
              </div>
              <div className='output'>
                NestJS Express Socket.io | MySQL MongoDB Redis | AWS KT-Cloud
                Docker | OpenAI-API
              </div>

              <div className='command-line'>
                <span className='prompt'>minsu@server:~$</span>
                <span className='command'> git log --oneline --graph</span>
              </div>
              <div className='output'>
                * d4c8a92 feat: AI 챗봇 Function Calling 구현
                <br />
                * b7e3f15 infra: VM 수평 확장 + Redis 세션 공유 구성
                <br />* a1c9e47 infra: KT Cloud 인프라 마이그레이션 성공
              </div>
            </div>
          </div>

          <div className='tech-stack'>
            <h3>🚀 Core Technologies & Achievements</h3>
            <div className='tech-grid'>
              <div className='tech-item'>
                <i className='fa fa-server'></i>
                <span>
                  NestJS
                  <br />
                  <small>메타버스 API 서버</small>
                </span>
              </div>
              <div className='tech-item'>
                <i className='fa fa-database'></i>
                <span>
                  Redis
                  <br />
                  <small>세션 저장소</small>
                </span>
              </div>
              <div className='tech-item'>
                <i className='fa fa-cloud'></i>
                <span>
                  AWS
                  <br />
                  <small>인프라 마이그레이션</small>
                </span>
              </div>
              <div className='tech-item'>
                <i className='fa fa-robot'></i>
                <span>
                  OpenAI
                  <br />
                  <small>AI 챗봇 플랫폼</small>
                </span>
              </div>
              <div className='tech-item'>
                <i className='fa fa-bolt'></i>
                <span>
                  Socket.io
                  <br />
                  <small>실시간 통신</small>
                </span>
              </div>
              <div className='tech-item'>
                <i className='fa fa-cubes'></i>
                <span>
                  Docker
                  <br />
                  <small>CI/CD 구축</small>
                </span>
              </div>
            </div>
          </div>

          <div className='cta-section'>
            <div className='cta-buttons'>
              <Link to='/projects' className='cta-btn primary-btn'>
                🎯 성과가 담긴 프로젝트 보기
              </Link>
              <Link to='/contact' className='cta-btn secondary-btn'>
                💬 함께 일하고 싶다면
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
