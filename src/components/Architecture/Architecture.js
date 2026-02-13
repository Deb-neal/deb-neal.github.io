import React from 'react';

import gcpArchitecture from '../../images/gcp 아키텍처.png';
import infra from '../../images/infra.png';
import './Architecture.css';

function Architecture() {
  const architectures = [
    {
      image: gcpArchitecture,
      title: 'AI Highlight - GCP 프록시 인프라 아키텍처',
      project: 'AI Highlight',
      description:
        'GCP VM 7대 기반 프록시 풀을 구축하여 IP 순환 및 Failover를 처리합니다. 유튜브 영상 다운로드 시 IP 차단 문제를 해결하고, 다운로드 성공률 95% 이상을 달성했습니다.',
      details: [
        'User → AWS(.NET API) → GCP Proxy Pool → YouTube → MySQL → Response',
        'ALB / Nginx / API Gateway (HTTPS Endpoint)',
        '.NET API Server - 요약 처리 + 프록시 라우팅',
        'GCP 프록시 풀 (VM x 7) - IP 순환 / Failover',
        'MySQL (RDS 또는 EC2) - 데이터 저장',
        'CloudWatch - 로그 / 모니터링',
      ],
    },
    {
      image: infra,
      title: 'AWS 클라우드 인프라 아키텍처',
      project: '공통프로젝트',
      description:
        'AWS VPC 기반 인프라 구성으로 Prod/Dev 서버 분리, RDS(MySQL) 이중화, S3 파일 저장소, VPN 터널을 통한 보안 접속 환경을 구축했습니다.',
      details: [
        'Users → Internet Gateway → Router → VPC 내부 라우팅',
        'Availability Zone: Prod_General Server / Dev_General Server (EC2 T2)',
        'Amazon MySQL RDS (prod) / RDS (dev) 이중화 구성',
        'S3 Standard - Resource File Save',
        'VPN Connection - CA+Certificate+Private Key 기반 보안 터널',
        'OpenVPN Configuration - 로컬 개발 환경 연결',
      ],
    },
  ];

  return (
    <section className='colorlib-about' data-section='architecture'>
      <div className='architecture-content'>
        <div className='architecture-header'>
          <span className='heading-meta'>Infrastructure</span>
          <h2 className='colorlib-heading'>Architecture</h2>
        </div>

        <div className='architecture-grid'>
          {architectures.map((arch, index) => (
            <div key={index} className='architecture-card'>
              <div className='architecture-card-header'>
                <span className='architecture-project-badge'>
                  {arch.project}
                </span>
                <h3 className='architecture-title'>{arch.title}</h3>
              </div>
              <div className='architecture-image-wrapper'>
                <img
                  src={arch.image}
                  alt={arch.title}
                  className='architecture-image'
                />
                <div className='architecture-overlay'>
                  <p className='architecture-description'>{arch.description}</p>
                  <ul className='architecture-details'>
                    {arch.details.map((detail, i) => (
                      <li key={i}>{detail}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Architecture;
