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

  // 코딩 기술 목록
  const [codingSkills, setCodingSkills] = useState([
    { name: "ReactJs", level: "중" },
    { name: "JavaScript", level: "중" },
    { name: "HTML/CSS", level: "중" },
    { name: "Java", level: "중" },
    { name: "SpringBoot", level: "중" },
    { name: "MyBatis", level: "중" },
  ]);

  const projectCategories = [
    { name: "All", count: 3 },
    { name: "Solo-project", count: 1 },
    { name: "Team-project", count: 2 },
  ];

  const [selectedCategory, setSelectedCategory] = useState("All");

  const selectCategory = (categoryName) => {
    setSelectedCategory(categoryName);
  };

  const projects = [
    {
      id: 1,
      title: "Project #1",
      description: "새미 프로젝트 HTML, CSS",
      image: `${import.meta.env.BASE_URL}profile_images/semi-project.jpg`,
      category: "Team-project",
      path: "/projects/team/semi",
    },
    {
      id: 2,
      title: "Project #2",
      description: "파이널 프로젝트 HTML, CSS",
      image: `${import.meta.env.BASE_URL}profile_images/final-project.jpg`,
      category: "Team-project",
      path: "/projects/team/final",
    },
    {
      id: 3,
      title: "Project #3",
      description: "계획표",
      image: `${import.meta.env.BASE_URL}profile_images/solo-schedule.jpg`,
      category: "Solo-project",
      path: "/projects/solo/schedule",
    },
  ];

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

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
            늦게 시작했지만 누구보다 진지하게 개발에 임하고 있습니다. 모르는
            부분을 그대로 두지 않고 끝까지 해결하는 것을 가장 중요한 태도로
            생각합니다. 작은 기능 하나도 정확히 이해하며 만드는 개발자가 되고
            싶습니다.
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

      {/* Why Developer 섹션 */}
      <section id="why-developer" className="section max-container">
        <h2 className="title">Why Developer?</h2>
        <div className="why-content">
          <p className="why-text">
            자영업을 하면서 성장의 한계를 느꼈습니다. 매일 반복되는 일상 속에서
            더 이상 발전할 수 없다는 생각이 들었고, 새로운 분야를 찾고
            있었습니다.
          </p>
          <p className="why-text">
            개발이라는 분야는 끊임없이 배우고 성장할 수 있는 곳입니다. 새로운
            기술이 계속 나오고, 문제를 해결하는 방법도 다양합니다. 시대 변화
            속에서 도태되지 않고 계속 발전할 수 있다는 점이 가장 큰
            매력이었습니다.
          </p>
          <p className="why-text">
            늦게 시작했지만 포기하지 않고 꾸준히 노력하면 반드시 성장할 수
            있다고 믿습니다.
          </p>
        </div>
      </section>

      {/* My Journey 섹션 */}
      <section id="journey" className="section">
        <div className="max-container">
          <h2 className="title">My Journey</h2>
          <p className="description">학습 과정</p>

          <div className="journey-content">
            <div className="journey-item">
              <h3 className="journey-title">독학과 반복 학습</h3>
              <p className="journey-text">
                학원 수업만으로는 부족하다고 생각해서 강의 영상을 반복해서
                봤습니다. 이해가 안 되는 부분은 유료 강의까지 찾아보며 개념을
                확실하게 만들었습니다.
              </p>
            </div>

            <div className="journey-item">
              <h3 className="journey-title">직접 만들며 배우기</h3>
              <p className="journey-text">
                강의만 듣지 않고 직접 코드를 작성하며 배웠습니다. 같은 기능도
                여러 번 만들어보면서 왜 이렇게 작동하는지 이해하려고
                노력했습니다.
              </p>
            </div>

            <div className="journey-item">
              <h3 className="journey-title">현직 개발자에게 배우기</h3>
              <p className="journey-text">
                모르는 것이 생기면 현직 개발자 친구에게 적극적으로 질문했습니다.
                실무에서 어떻게 문제를 해결하는지, 어떤 방식으로 코드를
                작성하는지 조언을 들으며 실무 감각을 키웠습니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Me 섹션 */}
      <section id="about" className="section max-container">
        <h2 className="title">About Me</h2>

        <ul className="majors">
          <li className="major">
            <FontAwesomeIcon className="major_icon" icon={faHtml5} />
            <p className="major_title">Front-end</p>
            <p>ReactJs, JavaScript, HTML, CSS</p>
          </li>
          <li className="major">
            <FontAwesomeIcon className="major_icon" icon={faServer} />
            <p className="major_title">Back-end</p>
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

      {/* 스킬 섹션 */}
      <section id="skills" className="section">
        <div className="max-container">
          <h2 className="title">My Skills</h2>
          <p className="description">Skills & Attributes</p>

          {/* 레벨 설명 */}
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
              <h3 className="skills_title">Coding Skills</h3>
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
              <h3 className="skills_title">Tools</h3>
              <ul>
                <li>Visual Studio Code</li>
                <li>Intellij</li>
                <li>Oracle SQL Developer</li>
              </ul>
            </section>

            <section className="skills_etc">
              <h3 className="skills_title">Environment</h3>
              <ul>
                <li>Git</li>
                <li>AWS EC2</li>
                <li>Oracle Database</li>
              </ul>
            </section>
          </div>
        </div>
      </section>

      {/* Problem Solving 섹션 */}
      <section id="problem-solving" className="section max-container">
        <h2 className="title">Problem Solving</h2>
        <p className="description">문제 해결 경험</p>

        <div className="problem-content">
          <h3 className="problem-title">상태 관리 오류 해결</h3>
          <p className="problem-text">
            프로젝트 막바지에 데이터 렌더링 오류가 계속 발생했습니다. 이틀 동안
            자료를 찾아보고 직접 해결을 시도했지만 원인을 찾을 수 없었습니다.
          </p>
          <p className="problem-text">
            문제점을 정리해서 현직 개발자에게 질문했고, State가 비동기로
            업데이트된다는 특성을 고려하지 않았다는 것을 알게 되었습니다.
          </p>
          <p className="problem-text">
            useEffect와 의존성 배열을 사용해서 구조를 바꿨고, 오류를 해결할 수
            있었습니다. 이 경험을 통해 문제의 근본 원인을 분석하는 능력을
            키웠습니다.
          </p>
        </div>
      </section>

      {/* Future Goals 섹션 */}
      <section id="goals" className="section">
        <div className="max-container">
          <h2 className="title">Future Goals</h2>
          <p className="description">앞으로의 목표</p>

          <div className="goals-content">
            <div className="goal-item">
              <h3 className="goal-title">단기 목표</h3>
              <ul className="goal-list">
                <li>SQLD 자격증 취득</li>
                <li>실무 프로젝트 경험 쌓기</li>
                <li>코드 리뷰 받으며 성장하기</li>
              </ul>
            </div>

            <div className="goal-item">
              <h3 className="goal-title">장기 목표</h3>
              <ul className="goal-list">
                <li>문제를 끝까지 해결하는 개발자</li>
                <li>코드를 설명할 수 있는 개발자</li>
                <li>팀과 함께 성장하는 개발자</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 프로젝트 섹션 */}
      <section id="work" className="section">
        <div className="max-container">
          <h2 className="title">My Work</h2>
          <p className="description">Projects</p>

          <ul className="categories">
            {projectCategories.map((category) => (
              <li key={category.name}>
                <button
                  className={`category ${
                    selectedCategory === category.name
                      ? "category--selected"
                      : ""
                  }`}
                  onClick={() => selectCategory(category.name)}
                >
                  {category.name}{" "}
                  <span className="category_count">{category.count}</span>
                </button>
              </li>
            ))}
          </ul>

          <ul className="projects">
            {filteredProjects.map((project, index) => (
              <li
                className="project"
                key={project.id || `placeholder-${index}`}
              >
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
