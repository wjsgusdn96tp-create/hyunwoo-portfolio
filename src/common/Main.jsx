import { faHtml5 } from "@fortawesome/free-brands-svg-icons";
import { faServer } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const Main = () => {
  // 페이지 로드될 때 URL에 #skills 같은게 있으면 그 위치로 스크롤 이동
  useEffect(() => {
    const hash = window.location.hash; // URL에서 # 뒤에 있는 부분 가져오기
    if (!hash) return; // # 없으면 아무것도 안함

    const section = document.querySelector(hash); // #skills 위치 찾기
    if (section) {
      const top = section.getBoundingClientRect().top + window.scrollY; // 스크롤 위치 계산

      window.scrollTo({
        top,
        behavior: "smooth", // 부드럽게 이동
      });
    }
  }, []); // 페이지 처음 열릴 때 1번만 실행

  // 코딩 기술 목록
  const [codingSkills, setCodingSkills] = useState([
    { name: "HTML", level: "중" },
    { name: "CSS", level: "중" },
    { name: "JAVA", level: "중" },
    { name: "JavaScript", level: "중" },
    { name: "React", level: "중" },
    { name: "NodeJs", level: "중" },
  ]);

  // 프로젝트 분류 목록
  const projectCategories = [
    { name: "All", count: 3 }, // 전체 3개
    { name: "Solo-project", count: 1 }, // 혼자 한 프로젝트 1개
    { name: "Team-project", count: 2 }, // 팀 프로젝트 2개
  ];

  // 현재 선택된 카테고리 (처음엔 All)
  const [selectedCategory, setSelectedCategory] = useState("All");

  // 카테고리 버튼 클릭하면 선택 바꾸기
  const selectCategory = (categoryName) => {
    setSelectedCategory(categoryName);
  };

  // 프로젝트 목록
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

  // 선택된 카테고리에 따라 프로젝트 보여주기
  const filteredProjects =
    selectedCategory === "All"
      ? projects // All이면 전부 보여주기
      : projects.filter((project) => project.category === selectedCategory); // 선택한 것만 보여주기

  return (
    <main>
      {/* 홈 섹션 */}
      <section id="home">
        <div className="home_container">
          {/* 프로필 사진 */}
          <img
            className="home_avatar"
            src={`${import.meta.env.BASE_URL}profile_images/profile.jpg`}
            alt="Profile"
          />
          {/* 제목 */}
          <h2 className="home_title">
            안녕하세요
            <br />
            <strong className="home_title--strong">
              신입 개발자 전현우입니다.
            </strong>
          </h2>
          {/* 소개 */}
          <p className="home_description">
            늦게 시작했지만 누구보다 진지하게 개발에 임하고 있습니다. 모르는
            부분을 그대로 두지 않고 끝까지 해결하는 것을 가장 중요한 태도로
            생각합니다. 작은 기능 하나도 정확히 이해하며 만드는 개발자가 되고
            싶습니다.
          </p>
        </div>
        {/* 구분선 */}
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

      {/* About Me 섹션 */}
      <section id="about" className="section max-container">
        <h2 className="title">About Me</h2>

        {/* 전공 분야 */}
        <ul className="majors">
          <li className="major">
            <FontAwesomeIcon className="major_icon" icon={faHtml5} />
            <p className="major_title">Front-end</p>
            <p>HTML , CSS , JavaScript, TypeScript, React </p>
          </li>
          <li className="major">
            <FontAwesomeIcon className="major_icon" icon={faServer} />
            <p className="major_title"> Back-end</p>
            <p>Java, JavaScript, NodeJs</p>
          </li>
        </ul>

        {/* 교육 이력 */}
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

          <div className="skills">
            {/* 코딩 스킬 목록 */}
            <section className="skills_coding">
              <h3 className="skills_title">Coding Skills</h3>
              <ul>
                {/* codingSkills 배열을 돌면서 하나씩 보여주기 */}
                {codingSkills.map((skill, index) => (
                  <li key={index}>
                    <div>
                      <span>{skill.name}</span>
                      {/* 하/중/상 중에서 skill.level과 같은 것만 active 표시 */}
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

            {/* 사용 툴 */}
            <section className="skills_tools">
              <h3 className="skills_title">Tools</h3>
              <ul>
                <li>Visual Studio Code</li>
                <li>Intellij</li>
                <li>Oracle SQL Developer</li>
              </ul>
            </section>

            {/* 기타 */}
            <section className="skills_etc">
              <h3 className="skills_title">Etc</h3>
              <ul>
                <li>Git</li>
              </ul>
            </section>
          </div>
        </div>
      </section>

      {/* 프로젝트 섹션 */}
      <section id="work" className="section">
        <div className="max-container">
          <h2 className="title">My Work</h2>
          <p className="description">Projects</p>

          {/* 카테고리 버튼들 */}
          <ul className="categories">
            {/* projectCategories 배열을 돌면서 버튼 만들기 */}
            {projectCategories.map((category) => (
              <li key={category.name}>
                <button
                  // 선택된 카테고리면 category--selected 클래스 추가
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

          {/* 프로젝트 목록 */}
          <ul className="projects">
            {/* filteredProjects 배열을 돌면서 프로젝트 카드 만들기 */}
            {filteredProjects.map((project, index) => (
              <li
                className="project"
                key={project.id || `placeholder-${index}`}
              >
                {/* Link로 프로젝트 상세 페이지로 이동 */}
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
