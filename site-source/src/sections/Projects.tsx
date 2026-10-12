import { projects } from '@/data/content';

export default function Projects() {
  return (
    <section id="projects">
      <h2>
        Projects<span className="zh">开源项目</span>
      </h2>
      {projects.map((p) => (
        <div className="project" key={p.name}>
          <div className="project-name">
            {p.name}
            {p.link && (
              <a className="proj-link" href={p.link.url} target="_blank" rel="noreferrer">
                {p.link.label}
              </a>
            )}
          </div>
          <div className="project-desc">{p.description}</div>
        </div>
      ))}
    </section>
  );
}
