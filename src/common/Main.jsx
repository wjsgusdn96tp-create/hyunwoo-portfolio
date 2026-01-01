import { faHtml5 } from "@fortawesome/free-brands-svg-icons";
import {
  faServer,
  faCode,
  faDatabase,
  faRocket,
  faLightbulb,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Main = () => {
  useEffect(() => {
    const hash = window.location.hash;
    if (!hash) return;

    const section = document.querySelector(hash);
    if (section) {
      const top = section.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top,
        behavior: "smooth",
      });
    }
  }, []);

  const codingSkills = [
    {
      name: "ReactJs",
      level: "중",
      description: "컴포넌트 기반 UI 구축 및 상태 관리",
    },
    {
      name: "Next.js",
      level: "하",
      description: "서버 사이드 렌더링 및 라우팅 학습 중",
    },
    {
      name: "JavaScript",
      level: "중",
      description: "ES6+ 문법 활용 및 비동기 처리",
    },
    {
      name: "TypeScript",
      level: "하",
      description: "타입 안정성 및 인터페이스 학습 중",
    },
    {
      name: "HTML/CSS",
      level: "중",
      description: "반응형 웹 디자인 및 레이아웃 구성",
    },
    {
      name: "Java",
      level: "중",
      description: "객체지향 프로그래밍 및 자료구조 활용",
    },
    {
      name: "SpringBoot",
      level: "중",
      description: "RESTful API 개발 및 의존성 주입",
    },
    { name: "MyBatis", level: "중", description: "SQL 매핑 및 동적 쿼리 작성" },
  ];

  const projectCategories = [
    { name: "전체", count: 3 },
    { name: "개인 프로젝트", count: 1 },
    { name: "팀 프로젝트", count: 2 },
  ];

  const [selectedCategory, setSelectedCategory] = useState("전체");

  const changeCategory = (categoryName) => {
    setSelectedCategory(categoryName);
  };

  const projects = [
    {
      id: 1,
      title: "드럼통코리아 쇼핑몰",
      description: "팀 프로젝트 - 주문/결제 시스템 구현",
      image: `${import.meta.env.BASE_URL}profile_images/semi-project.jpg`,
      category: "팀 프로젝트",
      path: "/projects/team/semi",
      tech: ["Spring", "MyBatis", "JavaScript"],
      role: "주문/장바구니 기능 담당",
    },
    {
      id: 2,
      title: "커뮤니티 플랫폼",
      description: "팀 프로젝트 - 쪽지/투표 시스템 개발",
      image: `${import.meta.env.BASE_URL}profile_images/final-project.jpg`,
      category: "팀 프로젝트",
      path: "/projects/team/final",
      tech: ["React", "Spring Boot", "Chart.js"],
      role: "쪽지/투표 기능 담당",
    },
    {
      id: 3,
      title: "일정 관리 캘린더",
      description: "개인 프로젝트 - 풀스택 개발 및 배포",
      image: `${import.meta.env.BASE_URL}profile_images/solo-schedule.jpg`,
      category: "개인 프로젝트",
      path: "/projects/solo/schedule",
      tech: ["React", "Spring Boot", "AWS EC2"],
      role: "기획부터 배포까지 전체 담당",
    },
  ];

  const filteredProjects =
    selectedCategory === "전체"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  const strengths = [
    {
      icon: faCode,
      title: "문제 해결 능력",
      description:
        "에러가 발생하면 포기하지 않고 구글링, 공식 문서, 커뮤니티를 통해 끝까지 해결합니다.",
    },
    {
      icon: faLightbulb,
      title: "빠른 학습력",
      description:
        "새로운 기술이나 라이브러리를 접했을 때 공식 문서를 읽고 빠르게 적용합니다.",
    },
    {
      icon: faRocket,
      title: "성장 마인드",
      description:
        "현재 부족한 부분을 인정하고, 매일 조금씩 나아지려고 노력합니다.",
    },
  ];

  const achievements = [
    {
      title: "팀 프로젝트 완수",
      count: "2",
      description: "세미 및 파이널 프로젝트 완료",
    },
    {
      title: "개인 프로젝트 배포",
      count: "1",
      description: "AWS EC2 활용 실제 서비스 배포",
    },
    {
      title: "학습 시간",
      count: "1000+",
      description: "KH 교육원 6개월 과정 이수",
    },
  ];

  return (
    <main>
      {/* 홈 섹션 */}
      <section id="home">
        <div className="home_container">
          <img
            className="home_avatar"
            src={`${import.meta.env.BASE_URL}profile_images/profile.jpg`}
            alt="Profile"
          />
          <h2 className="home_title">
            안녕하세요
            <br />
            <strong className="home_title--strong">
              신입 개발자 전현우입니다.
            </strong>
          </h2>
          <p className="home_description">
            누구보다 진지하게 개발에 임하고 있습니다. 모르는 부분을 그대로 두지
            않고 끝까지 해결하는 것을 가장 중요한 태도로 생각합니다. 작은 기능
            하나도 정확히 이해하며 만드는 개발자가 되고 싶습니다.
          </p>

          {/* 주요 성과 */}
          <div className="achievements">
            {achievements.map((achievement, index) => (
              <div key={index} className="achievement-item">
                <div className="achievement-count">{achievement.count}</div>
                <div className="achievement-title">{achievement.title}</div>
                <div className="achievement-description">
                  {achievement.description}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="home_divider">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
      </section>

      {/* 개발자가 된 이유 섹션 */}
      <section id="why-developer" className="section max-container">
        <h2 className="title">개발자가 된 이유</h2>
        <p className="description">비즈니스에서 개발로의 전환</p>
        <div className="why-content">
          <p className="why-text">
            <strong>물리적 한계를 느낌:</strong> 오프라인 비즈니스를 운영하면서
            물리적 공간의 한계를 느꼈습니다. 새로운 분야를 찾던 중 개발을 알게
            되었고, 배워볼 만한 가치가 있다고 판단했습니다.
          </p>
          <p className="why-text">
            <strong>성장의 재미를 발견:</strong> 처음에는 HTML 태그 하나
            작성하는 것도 어려웠지만, 지금은 웹 애플리케이션을 만들 수 있게
            되었습니다. 배울수록 할 수 있는 것이 늘어나는 과정이 흥미로웠고, 이
            분야에서 계속 성장할 수 있겠다는 확신이 들었습니다.
          </p>
          <p className="why-text">
            <strong>꾸준한 학습:</strong> 부족한 부분을 채우기 위해 꾸준히
            공부하고 있습니다. 현직 개발자에게 코드 리뷰를 받고, 필요하면 유료
            강의도 찾아보며 실무 감각을 익히고 있습니다.
          </p>
        </div>
      </section>

      {/* 강점 섹션 */}
      <section id="strengths" className="section">
        <div className="max-container">
          <h2 className="title">저의 강점</h2>
          <p className="description">개발자로서 가진 역량</p>
          <div className="strengths-content">
            {strengths.map((strength, index) => (
              <div key={index} className="strength-item">
                <FontAwesomeIcon
                  className="strength-icon"
                  icon={strength.icon}
                />
                <h3 className="strength-title">{strength.title}</h3>
                <p className="strength-description">{strength.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 학습 과정 섹션 */}
      <section id="journey" className="section">
        <div className="max-container">
          <h2 className="title">학습 과정</h2>
          <p className="description">어떻게 학습했는가</p>
          <div className="journey-content">
            <div className="journey-item">
              <h3 className="journey-title">반복 학습</h3>
              <p className="journey-text">
                수업만으로는 완전히 이해하기 어려운 부분이 많았습니다. 강의
                영상을 반복해서 보고, 필요하면 유료 강의도 찾아보며 개념을
                확실히 이해하려고 노력했습니다.
              </p>
              <div className="journey-detail">
                <strong>구체적 방법:</strong> 하루에 2-3시간씩 복습하며 이해될
                때까지 반복
              </div>
            </div>
            <div className="journey-item">
              <h3 className="journey-title">실습 위주 학습</h3>
              <p className="journey-text">
                이론만 공부하지 않고 직접 코드를 작성하며 학습했습니다. 같은
                기능이라도 여러 번 구현해보면서 동작 원리를 이해하는 데
                집중했습니다.
              </p>
              <div className="journey-detail">
                <strong>구체적 방법:</strong> 배운 내용을 즉시 미니 프로젝트로
                적용
              </div>
            </div>
            <div className="journey-item">
              <h3 className="journey-title">실무 경험 공유</h3>
              <p className="journey-text">
                현직 개발자에게 코드 리뷰와 조언을 받았습니다. 실무에서 어떻게
                문제를 해결하는지 배우며 실전 감각을 익혔습니다.
              </p>
              <div className="journey-detail">
                <strong>구체적 방법:</strong> 주 1회 코드 리뷰 세션 및 멘토링
              </div>
            </div>
            <div className="journey-item">
              <h3 className="journey-title">최신 기술 학습</h3>
              <p className="journey-text">
                현재 Next.js와 TypeScript를 학습하고 있습니다. React만으로는
                부족한 SSR, SEO 최적화를 위해 Next.js를 선택했고, 안정적인 코드
                작성을 위해 TypeScript를 공부 중입니다.
              </p>
              <div className="journey-detail">
                <strong>구체적 방법:</strong> 공식 문서 기반 학습 및 토이
                프로젝트 진행
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 소개 섹션 */}
      <section id="about" className="section max-container">
        <h2 className="title">소개</h2>
        <p className="description">보유 역량</p>
        <ul className="majors">
          <li className="major">
            <FontAwesomeIcon className="major_icon" icon={faHtml5} />
            <p className="major_title">프론트엔드</p>
            <p className="major_desc">사용자 인터페이스 구현</p>
            <ul className="major_tech_list">
              <li>ReactJs - 컴포넌트 기반 개발</li>
              <li>Next.js - SSR 및 SEO 최적화 (학습 중)</li>
              <li>JavaScript/TypeScript - 동적 기능 구현</li>
              <li>HTML/CSS - 반응형 디자인</li>
            </ul>
          </li>
          <li className="major">
            <FontAwesomeIcon className="major_icon" icon={faServer} />
            <p className="major_title">백엔드</p>
            <p className="major_desc">서버 로직 및 API 개발</p>
            <ul className="major_tech_list">
              <li>Java - 객체지향 프로그래밍</li>
              <li>SpringBoot - RESTful API</li>
              <li>MyBatis - 데이터베이스 연동</li>
            </ul>
          </li>
        </ul>

        {/* 교육 이력 */}
        <div className="education-section">
          <h3 className="education-title">교육 이력</h3>
          <ul className="jobs">
            <li className="job">
              <div className="job-content">
                <p className="job_name">
                  (디지털컨버전스) React & Spring 활용 자바(Java) 개발자
                  양성과정
                </p>
                <p className="job_period">
                  KH 교육원 이수 2025.05.14 ~ 2025.11.04
                </p>
                <p className="job_description">
                  6개월 풀타임 부트캠프 과정으로 프론트엔드와 백엔드 개발 역량을
                  학습했습니다. 팀 프로젝트 2회를 통해 협업 경험을 쌓았으며,
                  개인 프로젝트를 통해 기획부터 배포까지의 전체 과정을
                  경험했습니다.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </section>

      {/* 기술 스택 섹션 */}
      <section id="skills" className="section">
        <div className="max-container">
          <h2 className="title">기술 스택</h2>
          <p className="description">보유 기술 및 숙련도</p>
          <div className="skill-level-guide">
            <div className="level-item">
              <span className="level-badge level-high">상</span>
              <p>혼자서 프로젝트 개발, 운영, 배포까지 가능</p>
            </div>
            <div className="level-item">
              <span className="level-badge level-mid">중</span>
              <p>기본적인 CRUD 기능 구현 가능</p>
            </div>
            <div className="level-item">
              <span className="level-badge level-low">하</span>
              <p>기본 문법을 이해하고 간단한 코드 작성 가능</p>
            </div>
          </div>
          <div className="skills">
            <section className="skills_coding">
              <h3 className="skills_title">코딩 스킬</h3>
              <ul>
                {codingSkills.map((skill, index) => (
                  <li key={index}>
                    <div>
                      <div className="skill-name-wrapper">
                        <span className="skill-name">{skill.name}</span>
                        <span className="skill-description">
                          {skill.description}
                        </span>
                      </div>
                      <div className="skill_levels">
                        <span className={skill.level === "하" ? "active" : ""}>
                          하
                        </span>
                        <span className={skill.level === "중" ? "active" : ""}>
                          중
                        </span>
                        <span className={skill.level === "상" ? "active" : ""}>
                          상
                        </span>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </section>
            <section className="skills_tools">
              <h3 className="skills_title">개발 도구</h3>
              <ul>
                <li>
                  <strong>Visual Studio Code</strong>
                  <span className="tool-description">
                    프론트엔드 개발 (React, Next.js)
                  </span>
                </li>
                <li>
                  <strong>IntelliJ IDEA</strong>
                  <span className="tool-description">
                    백엔드 개발 (Spring Boot)
                  </span>
                </li>
                <li>
                  <strong>Oracle SQL Developer</strong>
                  <span className="tool-description">데이터베이스 관리</span>
                </li>
              </ul>
            </section>
            <section className="skills_etc">
              <h3 className="skills_title">개발 환경</h3>
              <ul>
                <li>
                  <strong>Git/GitHub</strong>
                  <span className="tool-description">버전 관리 및 협업</span>
                </li>
                <li>
                  <strong>AWS EC2</strong>
                  <span className="tool-description">서버 배포 및 운영</span>
                </li>
                <li>
                  <strong>Vercel</strong>
                  <span className="tool-description">
                    Next.js 배포 플랫폼 (학습 중)
                  </span>
                </li>
                <li>
                  <strong>MySQL</strong>
                  <span className="tool-description">관계형 데이터베이스</span>
                </li>
              </ul>
            </section>
          </div>
        </div>
      </section>

      {/* 기술 스택 선택 이유 섹션 */}
      <section id="tech-choice" className="section max-container">
        <h2 className="title">기술 스택 선택 배경</h2>
        <p className="description">사용 경험과 장점</p>
        <div className="tech-choice-content">
          <div className="tech-choice-item">
            <h3 className="tech-choice-title">React</h3>
            <p className="tech-choice-text">
              컴포넌트 단위로 UI를 관리할 수 있어 재사용성이 높았습니다. State
              변경 시 자동으로 화면이 업데이트되는 점이 편리했고, 코드 관리와
              유지보수 측면에서 장점이 있다고 느꼈습니다.
            </p>
            <div className="tech-usage">
              <strong>활용 프로젝트:</strong> 파이널 프로젝트, 일정 관리 캘린더
            </div>
          </div>
          <div className="tech-choice-item">
            <h3 className="tech-choice-title">Next.js</h3>
            <p className="tech-choice-text">
              React만으로는 SEO 최적화와 초기 로딩 속도 개선이 어렵다는 것을
              알게 되었습니다. Next.js의 서버 사이드 렌더링(SSR)과 정적 사이트
              생성(SSG) 기능을 통해 이러한 문제를 해결할 수 있어 학습을
              시작했습니다. App Router와 Server Component 개념이 처음에는
              어려웠지만, 공식 문서를 따라가며 점차 이해하고 있습니다.
            </p>
            <div className="tech-usage">
              <strong>학습 현황:</strong> 공식 문서 기반 학습 및 토이 프로젝트
              진행 중
            </div>
          </div>
          <div className="tech-choice-item">
            <h3 className="tech-choice-title">TypeScript</h3>
            <p className="tech-choice-text">
              JavaScript를 사용하면서 런타임 에러를 자주 만났습니다.
              TypeScript의 타입 시스템을 통해 개발 단계에서 에러를 미리 발견할
              수 있고, 코드 자동 완성 기능이 개발 속도를 높여준다는 것을 알게
              되어 학습 중입니다. 처음에는 타입 정의가 번거롭게 느껴졌지만, 점차
              안정적인 코드 작성의 중요성을 깨닫고 있습니다.
            </p>
            <div className="tech-usage">
              <strong>학습 현황:</strong> 기본 타입 시스템 및 인터페이스 활용
              연습 중
            </div>
          </div>
          <div className="tech-choice-item">
            <h3 className="tech-choice-title">SpringBoot</h3>
            <p className="tech-choice-text">
              Spring에 비해 초기 설정이 간소화되어 있어 빠르게 개발할 수
              있었습니다. MyBatis와 연동하여 데이터베이스 작업을 처리할 때
              구조가 명확해서 이해하기 좋았습니다.
            </p>
            <div className="tech-usage">
              <strong>활용 프로젝트:</strong> 모든 프로젝트의 백엔드
            </div>
          </div>
          <div className="tech-choice-item">
            <h3 className="tech-choice-title">MySQL</h3>
            <p className="tech-choice-text">
              개인 프로젝트 배포 시 Oracle의 비용 문제로 MySQL을 선택했습니다.
              무료로 사용 가능하고, AWS 프리티어에서 RDS를 통해 쉽게 설정할 수
              있었습니다. 학습 과정에서는 Oracle을 사용했지만, 배포 환경에서는
              MySQL이 더 적합하다고 판단했습니다.
            </p>
            <div className="tech-usage">
              <strong>활용 프로젝트:</strong> 일정 관리 캘린더 (배포 환경)
            </div>
          </div>
          <div className="tech-choice-item">
            <h3 className="tech-choice-title">AWS EC2 / Vercel</h3>
            <p className="tech-choice-text">
              프리티어를 활용해 실제 배포 환경을 경험했습니다. Spring Boot
              백엔드는 EC2에 배포하여 서버 설정을 직접 경험했고, Next.js
              프로젝트는 Vercel을 통해 간편하게 배포할 수 있다는 것을 학습
              중입니다. 각 플랫폼의 특성에 맞는 배포 전략을 이해하고 있습니다.
            </p>
            <div className="tech-usage">
              <strong>활용 프로젝트:</strong> EC2 - 일정 관리 캘린더 백엔드 /
              Vercel - Next.js 학습 프로젝트 (예정)
            </div>
          </div>
        </div>

        {/* 서버 구성도 */}
        <div className="server-architecture">
          <h3 className="architecture-title">서버 구성도</h3>
          <p className="architecture-description">
            개인 프로젝트 배포 환경 구조
          </p>
          <div className="architecture-diagram">
            <div className="architecture-layer">
              <div className="architecture-box frontend">
                <h4>프론트엔드</h4>
                <p>GitHub Pages</p>
                <p>React</p>
              </div>
            </div>
            <div className="architecture-arrow">↓ HTTPS 통신 ↓</div>
            <div className="architecture-layer">
              <div className="architecture-box backend">
                <h4>백엔드</h4>
                <p>AWS EC2</p>
                <p>SpringBoot</p>
              </div>
            </div>
            <div className="architecture-arrow">↓ JDBC 연결 ↓</div>
            <div className="architecture-layer">
              <div className="architecture-box database">
                <h4>데이터베이스</h4>
                <p>MySQL</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 목표 섹션 */}
      <section id="goals" className="section">
        <div className="max-container">
          <h2 className="title">목표</h2>
          <p className="description">앞으로의 방향</p>
          <div className="goals-content">
            <div className="goal-item">
              <h3 className="goal-title">단기 목표 (6개월 이내)</h3>
              <ul className="goal-list">
                <li>SQLD 자격증 취득하여 데이터베이스 지식 공식 인증</li>
                <li>Next.js로 개인 프로젝트 완성 후 Vercel 배포</li>
                <li>TypeScript 기본 문법 완벽 숙지 및 실무 적용</li>
                <li>실무 프로젝트 경험 쌓기 위한 취업 성공</li>
                <li>코드 리뷰를 통한 실력 향상 및 베스트 프랙티스 습득</li>
                <li>알고리즘 문제 풀이를 통한 논리적 사고력 향상</li>
              </ul>
            </div>
            <div className="goal-item">
              <h3 className="goal-title">지향하는 개발자상</h3>
              <ul className="goal-list">
                <li>문제가 생겼을 때 끝까지 해결하는 끈기 있는 개발자</li>
                <li>작성한 코드를 명확하게 설명할 수 있는 개발자</li>
                <li>팀원과 함께 성장하며 긍정적 영향을 주는 개발자</li>
                <li>
                  새로운 기술을 두려워하지 않고 적극적으로 학습하는 개발자
                </li>
                <li>
                  최신 트렌드를 파악하고 필요한 기술을 빠르게 습득하는 개발자
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 프로젝트 섹션 */}
      <section id="work" className="section">
        <div className="max-container">
          <h2 className="title">프로젝트</h2>
          <p className="description">작업물</p>
          <ul className="categories">
            {projectCategories.map((category) => (
              <li key={category.name}>
                <button
                  className={`category ${
                    selectedCategory === category.name
                      ? "category--selected"
                      : ""
                  }`}
                  onClick={() => changeCategory(category.name)}
                >
                  {category.name}
                  <span className="category_count">{category.count}</span>
                </button>
              </li>
            ))}
          </ul>
          <ul className="projects">
            {filteredProjects.map((project) => (
              <li className="project" key={project.id}>
                <Link to={project.path}>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="project_img"
                  />
                  <div className="project_metadata">
                    <h3 className="project_title">{project.title}</h3>
                    <p className="project_description">{project.description}</p>
                    <div className="project_tech_tags">
                      {project.tech.map((tech, index) => (
                        <span key={index} className="project_tech_tag">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <p className="project_role">{project.role}</p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
};

export default Main;
