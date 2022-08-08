import {
    DiHtml5,
    DiCss3,
    DiJsBadge,
    DiNodejsSmall,
    DiMysql,
    DiReact,
    DiDatabase,
    DiPython,
    DiMongodb,
    DiGithubBadge,
    DiGitBranch
} from "react-icons/di";

import "../styles/components/tech.sass";
/// why is the react icon not going awayyyyyyyy
const technologies = [
    { id: "html", name: "HTML5", icon: <DiHtml5 /> },
    { id: "css", name: "CSS3", icon: <DiCss3 /> },
    { id: "js", name: "JavaScript", icon: <DiJsBadge /> },
    { id: "node", name: "Node.js", icon: <DiNodejsSmall /> },
    { id: "mysql", name: "MySQL", icon: <DiMysql /> },
    { id: "react", name: "React", icon: <DiReact /> },
    { id: "database", name: "Database", icon: <DiDatabase /> },
    { id: "python", name: "Python", icon: <DiPython /> },
    { id: "mongo", name: "MongoDB", icon: <DiMongodb /> },
    { id: "git", name: "GitHub", icon: <DiGithubBadge /> },
    { id: "gitbranch", name: "GitBranch", icon: <DiGitBranch/> },
];

const Tech= () => {
    return (
        <section className="technologies-container">
            <h2>Tecnologias</h2>
            <div className="technologies-grid">
                {technologies.map((tech) => (
                    <div className="technology-card" id={tech.id} key={tech.id}>
                        {tech.icon}
                        <div className="technology-info">
                            <h6>{tech.name}</h6>
                            {/* <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p> */}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Tech;