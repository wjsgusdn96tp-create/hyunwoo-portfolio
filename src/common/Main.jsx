import { faHtml5 } from "@fortawesome/free-brands-svg-icons";
import { faServer } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Link } from "react-router-dom";

const Main = () => {
  const [codingSkills, setCodingSkills] = useState([
    { name: "HTML", percentage: 15 },
    { name: "CSS", percentage: 23 },
    { name: "JavaScript", percentage: 17 },
    { name: "React", percentage: 25 },
    { name: "NodeJs", percentage: 18 },
  ]);
  // 프로젝트 카테고리
  const projectCategories = [
    { name: "All", count: 2 },
    { name: "Solo-project", count: 0 },
    { name: "Team-project", count: 2 },
  ];
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleCategorySelect = (categoryName) => {
    setSelectedCategory(categoryName);
  };
  // Main.jsx 파일 등 projects 배열이 정의된 곳

  const projects = [
    {
      id: 1,
      title: "Project #1",
      description: "새미 프로젝트 HTML, CSS",
      // ⭐ 이미지 경로 추가: 각 프로젝트의 썸네일 경로를 입력
      image: "/profile_images/semi-project.jpg", // 예시 경로
    },
    {
      id: 2,
      title: "Project #2",
      description: "파이널 프로젝트 HTML, CSS",
      // ⭐ 이미지 경로 추가: 각 프로젝트의 썸네일 경로를 입력
      image: "/profile_images/final-project.jpg", // 예시 경로
    },
    // 프로젝트가 추가될 때마다 여기에 이미지 경로를 넣어줍니다.
  ];
  return (
    <main>
      {/* Home Section */}
      <section id="home">
        <img
          className="home_avatar"
          src="/profile_images/profile.jpg"
          alt="Profile"
        />
        <h2 className="home_title">
          안녕하세요
          <br />
          <strong className="home_title--strong">
            신입 개발자 전현우입니다.
          </strong>
        </h2>
        <p className="home_description">자신 소개하는 글 </p>
        <Link
          className="home_contact"
          to="#content" // 푸터(Contact)로 이동
        >
          연락하기
        </Link>
      </section>

      {/* About Section */}
      <section id="about" className="section max-container">
        <h2 className="title">About Me</h2>
        <p className="description">내 소개글 작성</p>
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
        <ul className="jobs">
          <li className="job">
            <img src="profile_images/khlogo.jpg" />
            <div>
              <p className="job_name">수료 학생 (KH 교육원)</p>
              <p className="job_period">2025 05 14 ~ 2025 11 04</p>
            </div>
          </li>
        </ul>
      </section>
      {/* Skills */}
      <section id="skills" className="section">
        <div className="max-container">
          <h2 className="title">My Skills</h2>
          <p className="description">Skills & Attributes</p>
          <p>내가 배운 기술들 소개</p>
          <div className="skills">
            <section className="skills_coding">
              <h3 className="skills_title">Coding Skills</h3>
              <ul>
                {codingSkills.map((skill, index) => (
                  <li key={index}>
                    <div>
                      <span>{skill.name}</span>
                      <span>{`${skill.percentage}%`}</span>
                    </div>
                    {/* 게이지 바: skill.percentage 값을 style 속성에 동적으로 적용 */}
                    <div>
                      <div style={{ width: `${skill.percentage}%` }}></div>
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
              </ul>
            </section>
            <section className="skills_etc">
              <h3 className="skills_title">Etc</h3>
              <ul>
                <li>Git</li>
              </ul>
            </section>
          </div>
        </div>
      </section>

      {/* Work */}
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
                  onClick={() => handleCategorySelect(category.name)}
                >
                  {category.name}{" "}
                  <span className="category_count">{category.count}</span>
                </button>
              </li>
            ))}
          </ul>
          <ul className="projects">
            {projects.map((project, index) => (
              <li
                className="project"
                key={project.id || `placeholder-${index}`}
              >
                {/* 프로젝트 상세 페이지/외부 링크는 a 태그 유지 */}
                <Link href="#" target="_blank">
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
