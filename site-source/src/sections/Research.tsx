import { researchInterests } from '@/data/content';

export default function Research() {
  return (
    <section id="research">
      <h2>
        Research Interests<span className="zh">研究方向</span>
      </h2>
      <ul className="dash-list">
        {researchInterests.map((r) => (
          <li key={r}>{r}</li>
        ))}
      </ul>
    </section>
  );
}
