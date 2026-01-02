import { faHtml5 } from "@fortawesome/free-brands-svg-icons";
import {
  faServer,
  faCode,
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
      name: "React",
      level: "중",
      description: "컴포넌트 기반 UI 구축 및 상태 관리",
    },
    { name: "Next.js", level: "하", description: "SSR 및 라우팅 학습 중" },
    {
      name: "JavaScript",
      level: "중",
      description: "ES6+ 문법 및 비동기 처리",
    },
    { name: "TypeScript", level: "하", description: "타입 시스템 학습 중" },
    { name: "HTML/CSS", level: "중", description: "반응형 웹 디자인" },
    { name: "Java", level: "중", description: "객체지향 프로그래밍" },
    { name: "Spring Boot", level: "중", description: "RESTful API 개발" },
    { name: "MyBatis", level: "중", description: "SQL 매핑 및 동적 쿼리" },
    { name: "Thymeleaf", level: "중", description: "서버 사이드 템플릿 엔진" },
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
      description: "팀 프로젝트 - 주문/결제 시스템",
      image: `${import.meta.env.BASE_URL}profile_images/semi-project.jpg`,
      category: "팀 프로젝트",
      path: "/projects/team/semi",
      tech: ["Spring", "MyBatis", "Oracle"],
      role: "주문/장바구니 담당",
    },
    {
      id: 2,
      title: "커뮤니티 플랫폼",
      description: "팀 프로젝트 - 쪽지/투표 시스템",
      image: `${import.meta.env.BASE_URL}profile_images/final-project.jpg`,
      category: "팀 프로젝트",
      path: "/projects/team/final",
      tech: ["React", "Spring Boot", "Oracle"],
      role: "쪽지/투표 담당",
    },
    {
      id: 3,
      title: "일정 관리 캘린더",
      description: "개인 프로젝트 - CRUD 구현",
      image: `${import.meta.env.BASE_URL}profile_images/solo-schedule.jpg`,
      category: "개인 프로젝트",
      path: "/projects/solo/schedule",
      tech: ["React", "Spring Boot", "Oracle"],
      role: "전체 개발",
    },
  ];

  const filteredProjects =
    selectedCategory === "전체"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  const strengths = [
    {
      icon: faCode,
      title: "문제 해결",
      description:
        "투표 게시판 실시간 그래프 업데이트 오류를 Chart.js 공식 문서를 참고해 데이터 바인딩 방식 수정으로 해결했습니다.",
    },
    {
      icon: faLightbulb,
      title: "커뮤니케이션",
      description:
        "팀 프로젝트에서 매일 30분 회의를 통해 진행 상황을 공유하고 팀원들과 의견을 조율했습니다.",
    },
    {
      icon: faRocket,
      title: "꾸준한 학습",
      description:
        "학원 수업 외 매일 2-3시간 복습하고, 부족한 부분은 유료 강의로 보충하며 학습합니다.",
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
            사용자 관점에서 생각하고 문제를 끝까지 해결하는 개발자입니다. 작은
            기능 하나도 정확히 이해하며 만들고, 왜 이렇게 만드는지 설명할 수
            있는 개발자가 되고 싶습니다.
          </p>
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
            <strong>새로운 도전:</strong> 전기 온수 매트 판매업을 5년간 운영하며
            물리적 공간의 한계를 느꼈습니다. 더 많은 사람들에게 가치를 전달할 수
            있는 개발에 관심을 갖게 되었고, KH정보교육원 6개월 과정을
            이수했습니다.
          </p>
          <p className="why-text">
            <strong>구체적인 성장:</strong> HTML 태그 작성도 어려웠던 초보에서
            React와 Spring Boot로 CRUD 기능을 구현하고 팀 프로젝트를 배포까지
            완료할 수 있게 되었습니다. 팀 프로젝트 2회를 통해 협업 경험도
            쌓았습니다.
          </p>
          <p className="why-text">
            <strong>학습 방식:</strong> 이해 안 되는 부분은 인프런 유료 강의로
            보충하고, 매일 2-3시간 복습하며 꾸준히 실력을 쌓고 있습니다.
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
                React Hook 개념이 어려워 인프런 강의를 3번 반복 수강했습니다.
                useState, useEffect를 10개 이상 예제로 구현하며 체득했고, 현재는
                프로젝트에 자유롭게 활용합니다.
              </p>
              <div className="journey-detail">
                <strong>성과:</strong> Hook 개념 완전 이해 및 프로젝트 적용
              </div>
            </div>
            <div className="journey-item">
              <h3 className="journey-title">실습 중심</h3>
              <p className="journey-text">
                Spring Boot 트랜잭션 학습 후 즉시 주문 시스템에 적용했습니다.
                결제 완료 시 주문 테이블 저장과 장바구니 삭제를 하나의
                트랜잭션으로 묶어 데이터 일관성을 보장했습니다.
              </p>
              <div className="journey-detail">
                <strong>성과:</strong> 트랜잭션 처리로 데이터 무결성 확보
              </div>
            </div>
            <div className="journey-item">
              <h3 className="journey-title">기술 학습</h3>
              <p className="journey-text">
                Next.js 공식 문서를 읽으며 SSR 개념을 학습 중입니다. App Router
                기반 간단한 블로그를 만들어보며 Server Component를 이해하고
                있습니다.
              </p>
              <div className="journey-detail">
                <strong>현황:</strong> Next.js 기본 개념 학습 및 토이 프로젝트
                진행 중
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
              <li>React - 컴포넌트 기반 개발</li>
              <li>Next.js - SSR 학습 중</li>
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
              <li>Spring Boot - RESTful API</li>
              <li>MyBatis - 데이터베이스 연동</li>
              <li>Thymeleaf - SSR 템플릿</li>
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
                  KH정보교육원 2025.05.19 ~ 2025.11.04
                </p>
                <p className="job_description">
                  프론트엔드(React, JavaScript)와 백엔드(Spring Boot, Java)
                  개발을 학습했습니다. 팀 프로젝트 2회, 개인 프로젝트 1회를 통해
                  기획부터 배포까지 전 과정을 경험했습니다.
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
              <p>복잡한 기능 설계 및 최적화 가능</p>
            </div>
            <div className="level-item">
              <span className="level-badge level-mid">중</span>
              <p>혼자서 기능 구현하고 문제 해결 가능</p>
            </div>
            <div className="level-item">
              <span className="level-badge level-low">하</span>
              <p>기본 문법 이해 및 CRUD 구현 가능</p>
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
                  <span className="tool-description">프론트엔드 개발</span>
                </li>
                <li>
                  <strong>IntelliJ IDEA</strong>
                  <span className="tool-description">백엔드 개발</span>
                </li>
                <li>
                  <strong>Oracle SQL Developer</strong>
                  <span className="tool-description">데이터베이스 관리</span>
                </li>
              </ul>
            </section>
            <section className="skills_etc">
              <h3 className="skills_title">협업 및 배포</h3>
              <ul>
                <li>
                  <strong>Git/GitHub</strong>
                  <span className="tool-description">버전 관리 및 협업</span>
                </li>
                <li>
                  <strong>PuTTY</strong>
                  <span className="tool-description">SSH 접속</span>
                </li>
                <li>
                  <strong>FileZilla</strong>
                  <span className="tool-description">FTP 파일 전송</span>
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
              변경 시 자동으로 화면이 업데이트되어 편리했고, 코드 관리와
              유지보수가 수월했습니다.
            </p>
            <div className="tech-usage">
              <strong>활용:</strong> 파이널 프로젝트 (쪽지/투표), 일정 관리
              캘린더
            </div>
          </div>
          <div className="tech-choice-item">
            <h3 className="tech-choice-title">Next.js</h3>
            <p className="tech-choice-text">
              React만으로는 SEO 최적화와 초기 로딩 속도 개선이 어렵다는 것을
              알게 되었습니다. Next.js의 SSR과 SSG 기능으로 이를 해결할 수 있어
              학습을 시작했습니다.
            </p>
            <div className="tech-usage">
              <strong>현황:</strong> 공식 문서 학습 및 토이 프로젝트 진행 중
            </div>
          </div>
          <div className="tech-choice-item">
            <h3 className="tech-choice-title">TypeScript</h3>
            <p className="tech-choice-text">
              JavaScript 사용 중 런타임 에러를 자주 경험했습니다. TypeScript의
              타입 시스템으로 개발 단계에서 에러를 미리 발견할 수 있고, 자동
              완성 기능이 개발 속도를 높여준다는 것을 알게 되어 학습 중입니다.
            </p>
            <div className="tech-usage">
              <strong>현황:</strong> 기본 타입 시스템 학습 중
            </div>
          </div>
          <div className="tech-choice-item">
            <h3 className="tech-choice-title">Spring Boot</h3>
            <p className="tech-choice-text">
              Spring에 비해 초기 설정이 간소화되어 빠르게 개발할 수 있었습니다.
              MyBatis와 연동하여 데이터베이스 작업을 처리할 때 구조가 명확해서
              이해하기 좋았습니다.
            </p>
            <div className="tech-usage">
              <strong>활용:</strong> 모든 프로젝트의 백엔드
            </div>
          </div>
          <div className="tech-choice-item">
            <h3 className="tech-choice-title">Oracle</h3>
            <p className="tech-choice-text">
              학원 교육 과정에서 Oracle SQL Developer를 사용하여 학습했습니다.
              무료 버전으로 로컬 환경에서 CRUD 기능을 구현하며 데이터베이스
              개념을 익혔습니다.
            </p>
            <div className="tech-usage">
              <strong>활용:</strong> 모든 프로젝트 (로컬 개발 환경)
            </div>
          </div>
          <div className="tech-choice-item">
            <h3 className="tech-choice-title">AWS EC2 경험</h3>
            <p className="tech-choice-text">
              개인 프로젝트에서 배포를 시도하며 PuTTY로 EC2 접속, FileZilla로
              JAR 파일 업로드, DB 연결까지 테스트했습니다. HTTPS 인증서 비용
              문제로 실제 배포는 완료하지 못했지만, 배포 과정을 경험했습니다.
            </p>
            <div className="tech-usage">
              <strong>경험:</strong> 일정 관리 캘린더 (배포 테스트)
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
                <li>SQLD 자격증 취득</li>
                <li>Next.js 개인 프로젝트 완성 및 배포</li>
                <li>TypeScript 기본 문법 숙지</li>
                <li>실무 경험 쌓기</li>
                <li>알고리즘 문제 풀이로 논리적 사고력 향상</li>
              </ul>
            </div>
            <div className="goal-item">
              <h3 className="goal-title">지향하는 개발자</h3>
              <ul className="goal-list">
                <li>문제가 생기면 끝까지 해결하는 개발자</li>
                <li>작성한 코드를 명확하게 설명할 수 있는 개발자</li>
                <li>팀원과 함께 성장하는 개발자</li>
                <li>새로운 기술을 적극적으로 학습하는 개발자</li>
                <li>기술 트렌드를 파악하고 필요한 기술을 습득하는 개발자</li>
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
