import React from 'react';
import './Education.css';

function Education() {
  return (
    <section className='colorlib-education' data-section='education'>
      <div className='colorlib-narrow-content'>
        <div className='row'>
          <div className='col-md-6 col-md-offset-3 col-md-pull-3 animate-box fadeInLeft animated'>
            <span className='heading-meta'>Education</span>
            <h2 className='colorlib-heading'>Education</h2>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-12 animate-box fadeInLeft animated'>
            <p>
              창동고등학교 (2009.02 - 2012.03)
              <br />
              코드스테이츠 SEB 33기 수료 (소프트 엔지니어 풀스택 커리큘럼)
              <br />
              토스 Learners high 1기 ( 2024.12.17 - 2025.01.17 )
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
