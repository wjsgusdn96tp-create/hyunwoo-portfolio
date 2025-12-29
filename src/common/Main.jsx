import { faHtml5 } from "@fortawesome/free-brands-svg-icons";
import { faServer } from "@fortawesome/free-solid-svg-icons";
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
    { name: "ReactJs", level: "중" },
    { name: "JavaScript", level: "중" },
    { name: "HTML/CSS", level: "중" },
    { name: "Java", level: "중" },
    { name: "SpringBoot", level: "중" },
    { name: "MyBatis", level: "중" },
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
      title: "프로젝트 #1",
      description: "새미 프로젝트 HTML, CSS",
      image: `${import.meta.env.BASE_URL}profile_images/semi-project.jpg`,
      category: "팀 프로젝트",
      path: "/projects/team/semi",
    },
    {
      id: 2,
      title: "프로젝트 #2",
      description: "파이널 프로젝트 HTML, CSS",
      image: `${import.meta.env.BASE_URL}profile_images/final-project.jpg`,
      category: "팀 프로젝트",
      path: "/projects/team/final",
    },
    {
      id: 3,
      title: "프로젝트 #3",
      description: "계획표",
      image: `${import.meta.env.BASE_URL}profile_images/solo-schedule.jpg`,
      category: "개인 프로젝트",
      path: "/projects/solo/schedule",
    },
  ];

  const filteredProjects =
    selectedCategory === "전체"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <main>
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

      <section id="why-developer" className="section max-container">
        <h2 className="title">개발자가 된 이유</h2>
        <div className="why-content">
          <p className="why-text">
            오프라인 비즈니스를 운영하면서 물리적 공간의 한계를 느꼈습니다.
            새로운 분야를 찾던 중 개발을 알게 되었고, 배워볼 만한 가치가 있다고
            판단했습니다.
          </p>
          <p className="why-text">
            처음에는 HTML 태그 하나 작성하는 것도 어려웠지만, 지금은 웹
            애플리케이션을 만들 수 있게 되었습니다. 배울수록 할 수 있는 것이
            늘어나는 과정이 흥미로웠고, 이 분야에서 계속 성장할 수 있겠다는
            확신이 들었습니다.
          </p>
          <p className="why-text">
            부족한 부분을 채우기 위해 꾸준히 공부하고 있습니다.
          </p>
        </div>
      </section>

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
            </div>
            <div className="journey-item">
              <h3 className="journey-title">실습 위주 학습</h3>
              <p className="journey-text">
                이론만 공부하지 않고 직접 코드를 작성하며 학습했습니다. 같은
                기능이라도 여러 번 구현해보면서 동작 원리를 이해하는 데
                집중했습니다.
              </p>
            </div>
            <div className="journey-item">
              <h3 className="journey-title">실무 경험 공유</h3>
              <p className="journey-text">
                현직 개발자에게 코드 리뷰와 조언을 받았습니다. 실무에서 어떻게
                문제를 해결하는지 배우며 실전 감각을 익혔습니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="section max-container">
        <h2 className="title">소개</h2>
        <ul className="majors">
          <li className="major">
            <FontAwesomeIcon className="major_icon" icon={faHtml5} />
            <p className="major_title">프론트엔드</p>
            <p>ReactJs, JavaScript, HTML, CSS</p>
          </li>
          <li className="major">
            <FontAwesomeIcon className="major_icon" icon={faServer} />
            <p className="major_title">백엔드</p>
            <p>Java, SpringBoot, MyBatis</p>
          </li>
        </ul>
        <ul className="jobs">
          <li className="job">
            <div>
              <p className="job_name">
                (디지털컨버전스) React & Spring 활용 자바(Java) 개발자 양성과정
              </p>
              <p className="job_period">KH 교육 이수 2025 05 14 ~ 2025 11 04</p>
            </div>
          </li>
        </ul>
      </section>

      <section id="skills" className="section">
        <div className="max-container">
          <h2 className="title">기술 스택</h2>
          <p className="description">보유 기술</p>
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
                      <span>{skill.name}</span>
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
                <li>Visual Studio Code</li>
                <li>Intellij</li>
                <li>Oracle SQL Developer</li>
              </ul>
            </section>
            <section className="skills_etc">
              <h3 className="skills_title">개발 환경</h3>
              <ul>
                <li>Git</li>
                <li>AWS EC2</li>
                <li>MySQL</li>
              </ul>
            </section>
          </div>
        </div>
      </section>

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
          </div>
          <div className="tech-choice-item">
            <h3 className="tech-choice-title">SpringBoot</h3>
            <p className="tech-choice-text">
              Spring에 비해 초기 설정이 간소화되어 있어 빠르게 개발할 수
              있었습니다. MyBatis와 연동하여 데이터베이스 작업을 처리할 때
              구조가 명확해서 이해하기 좋았습니다.
            </p>
          </div>
          <div className="tech-choice-item">
            <h3 className="tech-choice-title">MySQL</h3>
            <p className="tech-choice-text">
              개인 프로젝트 배포 시 Oracle의 비용 문제로 MySQL을 선택했습니다.
              무료로 사용 가능하고, AWS 프리티어에서 RDS를 통해 쉽게 설정할 수
              있었습니다. 학습 과정에서는 Oracle을 사용했지만, 배포 환경에서는
              MySQL이 더 적합하다고 판단했습니다.
            </p>
          </div>
          <div className="tech-choice-item">
            <h3 className="tech-choice-title">AWS EC2</h3>
            <p className="tech-choice-text">
              프리티어를 활용해 실제 배포 환경을 경험했습니다. 서버를 직접
              설정하고 애플리케이션을 배포하면서 인프라 구성에 대한 이해도를
              높일 수 있었습니다. 프론트엔드는 GitHub Pages로, 백엔드는 EC2로
              분리 배포했습니다.
            </p>
          </div>
        </div>
        <div className="server-architecture">
          <h3 className="architecture-title">서버 구성도</h3>
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

      <section id="goals" className="section">
        <div className="max-container">
          <h2 className="title">목표</h2>
          <p className="description">앞으로의 방향</p>
          <div className="goals-content">
            <div className="goal-item">
              <h3 className="goal-title">당장 해야 할 것</h3>
              <ul className="goal-list">
                <li>SQLD 자격증 취득</li>
                <li>실무 프로젝트 경험 쌓기</li>
                <li>코드 리뷰를 통한 실력 향상</li>
              </ul>
            </div>
            <div className="goal-item">
              <h3 className="goal-title">지향하는 개발자상</h3>
              <ul className="goal-list">
                <li>문제가 생겼을 때 끝까지 해결하는 개발자</li>
                <li>작성한 코드를 명확하게 설명할 수 있는 개발자</li>
                <li>팀원과 함께 성장하는 개발자</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

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
                    <p>{project.description}</p>
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
