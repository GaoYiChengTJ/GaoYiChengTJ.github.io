import { awards } from '@/data/content';

export default function Awards() {
  return (
    <section id="awards">
      <h2>
        Awards &amp; Grants <span lang="zh-CN" className="section-zh">荣誉奖励</span>
      </h2>
      {awards.map((group) => (
        <div className="edu-item" key={group.year}>
          <div className="edu-years award-year">{group.year}</div>
          <div className="edu-body">
            <ul className="dash-list">
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </section>
  );
}
