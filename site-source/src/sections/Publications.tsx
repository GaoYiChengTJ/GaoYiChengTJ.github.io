import { publications, type Publication } from '@/data/content';

const selectedTitles = new Set([
  'Language may be all omics needs: Harmonizing multimodal data for omics understanding with CellHermes',
  'Causal disentanglement for single-cell representations and controllable counterfactual generation',
  'Benchmarking algorithms for generalizable single-cell perturbation response prediction',
  'Benchmarking multi-slice integration and downstream applications in spatial transcriptomics data analysis',
  'Weakly-supervised peptide-TCR binding prediction facilitates neoantigen identification',
  'Toward subtask decomposition-based learning and benchmarking for genetic perturbation outcome prediction and beyond',
  'Unified cross-modality integration and analysis of T cell receptors and T cell transcriptomes by low-resource-aware representation learning',
  'Pan-Peptide Meta Learning for T-cell receptor–antigen binding recognition',
]);

/** Renders an author string with "Yicheng Gao" (optionally starred) highlighted. */
function Authors({ authors }: { authors: string }) {
  const parts = authors.split(/(Yicheng Gao\*?)/g);
  return (
    <div className="pub-authors">
      {parts.map((p, i) =>
        /Yicheng Gao/.test(p) ? (
          <span key={i} className="me">{p}</span>
        ) : (
          <span key={i}>{p}</span>
        )
      )}
    </div>
  );
}

function Pub({ pub }: { pub: Publication }) {
  return (
    <div className="pub">
      <div className="pub-body">
        <div className="pub-title">{pub.title}</div>
        <Authors authors={pub.authors} />
        <div className="pub-venue">
          {pub.venue}, {pub.year}
          {pub.badges?.map((b) => (
            <span key={b} className="badge-tag">{b}</span>
          ))}
        </div>
        {pub.links?.length ? (
          <div className="pub-links">
            {pub.links.filter((l) => !l.url.includes('github.com')).map((l) => (
              <a key={l.label} href={l.url} target="_blank" rel="noreferrer">
                [{l.label === 'PDF' ? 'Paper' : l.label}]
              </a>
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default function Publications() {
  return (
    <section id="publications">
      <h2>
        Selected Publications
      </h2>
      {publications.filter((p) => selectedTitles.has(p.title)).map((p) => {
        return <Pub key={p.title} pub={p} />;
      })}
      <p style={{ fontSize: '14.5px', color: 'var(--muted)' }}>
        * denotes equal contribution. See my{' '}
        <a
          href="https://scholar.google.com/citations?hl=en&authuser=2&user=MmLFH_MAAAAJ"
          target="_blank"
          rel="noreferrer"
        >
          Google Scholar
        </a>{' '}
        for the full list.
      </p>
    </section>
  );
}
