import { news } from '@/data/content';

function renderText(text: string, highlight?: string) {
  if (!highlight || !text.includes(highlight)) return text;
  const [before, after] = text.split(highlight);
  return (
    <>
      {before}
      <span className="news-hl">{highlight}</span>
      {after}
    </>
  );
}

export default function News() {
  return (
    <section id="news">
      <h2>
        News<span className="zh">近期动态</span>
      </h2>
      <ul className="dash-list">
        {news.map((n, i) => (
          <li key={i}>
            <span className="news-date">[{n.date}]</span> {renderText(n.text, n.highlight)}
          </li>
        ))}
      </ul>
    </section>
  );
}
