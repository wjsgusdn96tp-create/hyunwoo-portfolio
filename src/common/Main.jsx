import { faHtml5 } from "@fortawesome/free-brands-svg-icons";
import { faServer } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const Main = () => {
  const [codingSkills, setCodingSkills] = useState([
    { name: "HTML", percentage: 15 },
    { name: "CSS", percentage: 23 },
    { name: "JavaScript", percentage: 17 },
    { name: "React", percentage: 18 },
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
      image: `${import.meta.env.BASE_URL}profile_images/semi-project.jpg`,
      category: "Team-project",
    },
    {
      id: 2,
      title: "Project #2",
      description: "파이널 프로젝트 HTML, CSS",
      image: `${import.meta.env.BASE_URL}profile_images/final-project.jpg`,
      category: "Team-project",
    },
    // 나중에 솔로 프로젝트 생기면 이렇게 추가
    // {
    //   id: 3,
    //   title: "Project #3",
    //   description: "솔로 프로젝트 예시",
    //   image: "/profile_images/solo-project.jpg",
    //   category: "Solo-project", // 솔로 프로젝트
    // },
  ];
  // 선택된 카테고리에 따라 필터링된 프로젝트 목록
  const filteredProjects =
    selectedCategory === "All"
      ? projects // All이면 전부 다
      : projects.filter((project) => project.category === selectedCategory);
  // 만약 선택된 카테고리가 "All" 이면 → projects 배열 전체 사용
  // 아니면 → project.category 가 "Solo-project" 또는 "Team-project" 인 것만 골라서 사용

  // Home 영역 DOM을 직접 가리키기 위한 ref
  const homeRef = useRef(null);
  // Home 섹션을 아래로 스크롤할수록 점점 투명하게 만드는 효과
  useEffect(() => {
    const home = homeRef.current;
    if (!home) return; // 혹시라도 ref가 연결 안 되어 있으면 종료
    // Home 영역의 높이(px)
    const homeHeight = home.offsetHeight;

    const handleScroll = () => {
      // 스크롤 비율에 따라 1 → 0으로 줄어드는 값
      const rawOpacity = 1 - window.scrollY / homeHeight;
      // 0보다 작아지거나 1보다 커지는 것을 방지하기 위해 0~1로 자르기
      const opacity = Math.max(0, Math.min(1, rawOpacity));

      home.style.opacity = opacity;
    };
    // 스크롤 이벤트 등록
    window.addEventListener("scroll", handleScroll);

    // 컴포넌트가 사라질 때 이벤트 제거
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <main>
      {/* Home Section */}
      <section id="home">
        <div className="home_container" ref={homeRef}>
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
          <Link
            className="home_contact"
            to="#content" // 푸터(Contact)로 이동
          >
            Contact
          </Link>
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
            <img src={`${import.meta.env.BASE_URL}profile_images/khlogo.jpg`} />
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
            {filteredProjects.map((project, index) => (
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
