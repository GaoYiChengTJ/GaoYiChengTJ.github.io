import { experiences } from '@/data/content';

export default function Experience() {
  return (
    <section id="experience">
      <h2>Research Experience <span lang="zh-CN" className="section-zh">科研经历</span></h2>
      {experiences.filter((e) => e.years !== 'Present').map((e) => (
        <div className="edu-item" key={e.place}>
          <div className="edu-years">{e.years}</div>
          <div className="edu-body">
            <div className="edu-school">{e.place}</div>
            {e.detail && <div className="edu-detail">{e.detail}</div>}
          </div>
        </div>
      ))}
    </section>
  );
}
