export interface Publication {
  title: string;
  venue: string;
  tag?: string; // short venue abbreviation shown as a tag
  badges?: string[];
  authors: string; // "Yicheng Gao" will be highlighted
  year: number;
  links?: { label: string; url: string }[];
}

/** All publications, newest first. */
export const publications: Publication[] = [
  // ---- 2025 ----
  {
    title:
      'Language may be all omics needs: Harmonizing multimodal data for omics understanding with CellHermes',
    venue: 'bioRxiv',
    tag: 'bioRxiv',
    authors:
      'Yicheng Gao, Weixu Wang, Yuheng Zhao, Kejing Dong, Caihua Shan, Weizhong Zheng, Till Richter, Zekai Li, Siming Chen, Fabian J. Theis, Qi Liu',
    year: 2025,
    links: [
      { label: 'PDF', url: '/paper/biorxiv.pdf' },
      { label: 'Code', url: 'https://github.com/theislab/CellHermes' },
    ],
  },
  {
    title:
      'Causal disentanglement for single-cell representations and controllable counterfactual generation',
    venue: 'Nature Communications',
    tag: 'Nat. Commun.',
    badges: ['Research Highlight'],
    authors: 'Yicheng Gao*, Kejing Dong*, Caihua Shan, Dongsheng Li, Qi Liu',
    year: 2025,
    links: [
      { label: 'PDF', url: '/paper/NC.pdf' },
      { label: 'Code', url: 'https://github.com/bm2-lab/CausCell' },
    ],
  },
  {
    title:
      'Benchmarking algorithms for generalizable single-cell perturbation response prediction',
    venue: 'Nature Methods',
    tag: 'Nat. Methods',
    authors:
      'Zhiting Wei*, Yiheng Wang*, Yicheng Gao*, Shuguang Wang*, Ping Li, Duanmiao Si, Yuli Gao, Siqi Wu, Danlu Li, Kejing Dong, Xingbo Yang, Chen Tang, Shaliu Fu, Xiaohan Chen, Wannian Li, Yuzhou You, Chen Zhang, Aibin Liang, Guohui Chuai, Qi Liu',
    year: 2025,
  },
  {
    title:
      'Benchmarking multi-slice integration and downstream applications in spatial transcriptomics data analysis',
    venue: 'Genome Biology',
    tag: 'Genome Biol.',
    authors:
      'Kejing Dong*, Yicheng Gao*, Qi Zou, Yan Cui, Chuangyi Han, Senlin Lin, Zhikang Wang, Chen Tang, Xiaojie Cheng, Fangliangzi Meng, Xiaohan Chen, Shuguang Wang, Xuan Jin, Jingya Yang, Chen Zhang, Guohui Chuai, Zhiyuan Yuan, Qi Liu',
    year: 2025,
  },
  {
    title:
      'Weakly-supervised peptide-TCR binding prediction facilitates neoantigen identification',
    venue: 'Cell Systems',
    tag: 'Cell Syst.',
    authors:
      'Yuli Gao*, Yicheng Gao*, Siqi Wu*, Danlu Li, Chi Zhou, Fangliangzi Meng, Kejing Dong, Xueying Zhao, Ping Li, Aibin Zhang, Qi Liu',
    year: 2025,
  },
  // ---- 2024 ----
  {
    title:
      'Toward subtask decomposition-based learning and benchmarking for genetic perturbation outcome prediction and beyond',
    venue: 'Nature Computational Science',
    tag: 'Nat. Comput. Sci.',
    badges: ['Research Highlight'],
    authors:
      'Yicheng Gao*, Zhiting Wei*, Kejing Dong*, Ke Chen*, Jingya Yang, Guohui Chuai, Qi Liu',
    year: 2024,
    links: [
      { label: 'Paper', url: 'https://www.nature.com/articles/s43588-024-00698-1' },
      { label: 'Code', url: 'https://github.com/bm2-lab/STAMP' },
    ],
  },
  {
    title:
      'Unified cross-modality integration and analysis of T cell receptors and T cell transcriptomes by low-resource-aware representation learning',
    venue: 'Cell Genomics',
    tag: 'Cell Genom.',
    badges: ['Featured Article'],
    authors:
      'Yicheng Gao*, Kejing Dong*, Yuli Gao, Xuan Jin, Jingya Yang, Gang Yan, Qi Liu',
    year: 2024,
    links: [
      { label: 'PDF', url: '/paper/CG.pdf' },
      { label: 'Code', url: 'https://github.com/bm2-lab/UniTCR' },
    ],
  },
  {
    title:
      'PerturBase: a comprehensive database for single-cell perturbation data analysis and visualization',
    venue: 'Nucleic Acids Research',
    tag: 'NAR',
    authors: 'Zhiting Wei*, Duanmiao Si*, Bin Duan*, Yicheng Gao*, Qian Yu, Ling Guo, Qi Liu',
    year: 2024,
  },
  {
    title: 'Delineating the cell types with transcriptional kinetics',
    venue: 'Nature Computational Science',
    tag: 'Nat. Comput. Sci.',
    authors: 'Yicheng Gao, Qi Liu',
    year: 2024,
  },
  {
    title: 'Foundation models in molecular biology',
    venue: 'Biophysics Reports',
    tag: 'Biophys. Rep.',
    authors: 'Yunda Si, Jiawei Zou, Yicheng Gao, Guohui Chuai, Qi Liu',
    year: 2024,
  },
  // ---- 2023 ----
  {
    title: 'Pan-Peptide Meta Learning for T-cell receptor–antigen binding recognition',
    venue: 'Nature Machine Intelligence',
    tag: 'Nat. Mach. Intell.',
    badges: ['Research Highlight', 'ESI Highly Cited'],
    authors:
      'Yicheng Gao*, Yuli Gao*, Yuxiao Fan, Chengyu Zhu, Zhiting Wei, Chi Zhou, Guohui Chuai, Qinchang Chen, He Zhang, Qi Liu',
    year: 2023,
    links: [
      { label: 'PDF', url: '/paper/NMI.pdf' },
      { label: 'Code', url: 'https://github.com/bm2-lab/PanPep' },
    ],
  },
  {
    title:
      'Reply to: The pitfalls of negative data bias for the T-cell epitope specificity challenge',
    venue: 'Nature Machine Intelligence',
    tag: 'Nat. Mach. Intell.',
    authors: 'Yicheng Gao*, Yuli Gao*, Kejing Dong, Siqi Wu, Qi Liu',
    year: 2023,
  },
  {
    title:
      'Privacy-preserving integration of multiple institutional data for single-cell type identification with scPrivacy',
    venue: 'Science China Life Sciences',
    tag: 'SCLS',
    authors:
      'Shaoqi Chen, Bin Duan, Chenyu Zhu, Chen Tang, Shuguang Wang, Yicheng Gao, Shaliu Fu, Lixin Fan, Qiang Yang, Qi Liu',
    year: 2023,
  },
  // ---- 2021 ----
  {
    title: 'Integrating multiple references for single-cell assignment',
    venue: 'Nucleic Acids Research',
    tag: 'NAR',
    authors:
      'Bin Duan, Shaoqi Chen, Xiaohan Chen, Chenyu Zhu, Chen Tang, Shuguang Wang, Yicheng Gao, Shaliu Fu, Qi Liu',
    year: 2021,
  },
  // ---- 2019 ----
  {
    title: 'An ensemble strategy to predict prognosis in ovarian cancer based on gene modules',
    venue: 'Frontiers in Genetics',
    tag: 'Front. Genet.',
    authors: 'Yicheng Gao, Xionghui Zhou, Wen Zhang',
    year: 2019,
  },
];

export interface Project {
  name: string;
  link?: { label: string; url: string };
  description: string;
}

export const projects: Project[] = [
  {
    name: 'CellHermes: Language-based Omics Understanding Agent',
    link: { label: '[GitHub]', url: 'https://github.com/theislab/CellHermes' },
    description:
      'An LLM-agent system harmonizing multimodal data for omics understanding, bridging natural language reasoning and single-cell analysis.',
  },
  {
    name: 'CausCell: Causal Disentanglement for Single-cell Representations',
    link: { label: '[GitHub]', url: 'https://github.com/bm2-lab/CausCell' },
    description:
      'Causal disentanglement of single-cell representations enabling controllable counterfactual generation. Published in Nature Communications (Research Highlight).',
  },
  {
    name: 'STAMP: Subtask Decomposition for Perturbation Prediction',
    link: { label: '[GitHub]', url: 'https://github.com/bm2-lab/STAMP' },
    description:
      'Subtask decomposition-based learning and benchmarking for genetic perturbation outcome prediction. Published in Nature Computational Science (Research Highlight).',
  },
  {
    name: 'UniTCR: Unified Cross-modality TCR Analysis',
    link: { label: '[GitHub]', url: 'https://github.com/bm2-lab/UniTCR' },
    description:
      'Low-resource-aware representation learning unifying T cell receptors and transcriptomes. Published in Cell Genomics (Featured Article).',
  },
  {
    name: 'PanPep: Pan-Peptide Meta Learning for TCR–Antigen Recognition',
    link: { label: '[GitHub]', url: 'https://github.com/bm2-lab/PanPep' },
    description:
      'Meta-learning framework for T-cell receptor–antigen binding recognition. Published in Nature Machine Intelligence (Research Highlight, ESI Highly Cited).',
  },
];

export interface NewsItem {
  date: string;
  text: string;
  highlight?: string; // substring of text to highlight
}

export const news: NewsItem[] = [
  { date: 'Sep 2025', text: 'Our work accepted by Genome Biology', highlight: 'Genome Biology' },
  { date: 'Sep 2025', text: 'Our work accepted by Cell Systems', highlight: 'Cell Systems' },
  { date: 'Jul 2025', text: "Joined Fabian Theis's lab at Helmholtz Munich as a visiting scholar", highlight: "Fabian Theis's lab" },
  { date: 'Jun 2025', text: 'Our work accepted by Nature Communications and highlighted!', highlight: 'Nature Communications' },
  { date: 'Jun 2025', text: 'Awarded the "Potential Qingyuan Scholar" of CAAI', highlight: '"Potential Qingyuan Scholar"' },
  { date: 'May 2025', text: 'Supported by Shanghai Interdisciplinary Innovation Foundation, 50K RMB' },
  { date: 'Jan 2025', text: 'Supported by NSFC, 300K RMB', highlight: 'NSFC' },
  { date: 'Oct 2024', text: 'Awarded "Academic Pioneer" at Tongji University (Top 0.05%, ranked 1st)', highlight: '"Academic Pioneer"' },
  { date: 'Oct 2024', text: 'Our article in Nature Computational Science was highlighted!', highlight: 'Nature Computational Science' },
  { date: 'Oct 2024', text: 'Awarded "Stars of Tomorrow" at Microsoft Research', highlight: '"Stars of Tomorrow"' },
  { date: 'Sep 2024', text: 'Our work accepted by Nucleic Acids Research', highlight: 'Nucleic Acids Research' },
  { date: 'Aug 2024', text: 'Our work accepted by Nature Computational Science', highlight: 'Nature Computational Science' },
  { date: 'Aug 2024', text: 'One letter accepted by Nature Computational Science' },
  { date: 'May 2024', text: 'Article in Cell Genomics annotated as Featured Article', highlight: 'Featured Article' },
  { date: 'Apr 2024', text: 'Our work accepted by Cell Genomics', highlight: 'Cell Genomics' },
  { date: 'Jan 2024', text: 'Our work in Nature Machine Intelligence selected as ESI highly cited', highlight: 'ESI highly cited' },
  { date: 'Dec 2023', text: 'Joined Microsoft Research Asia as an intern', highlight: 'Microsoft Research Asia' },
  { date: 'Sep 2023', text: 'One letter accepted by Nature Machine Intelligence' },
  { date: 'Mar 2023', text: 'Article in Nature Machine Intelligence was highlighted!', highlight: 'Nature Machine Intelligence' },
  { date: 'Jan 2023', text: 'Our article accepted by Nature Machine Intelligence', highlight: 'Nature Machine Intelligence' },
  { date: 'Sep 2020', text: 'Joined BM2 Lab at Tongji University', highlight: 'BM2 Lab' },
];

export const researchInterests = [
  'AI virtual cell construction: cell disentanglement and counterfactual generation',
  'Genetic perturbation outcome prediction and benchmarking',
  'Multi-modal representation learning for single-cell omics',
  'Protein–protein interaction and TCR–antigen binding modeling',
  'Bridging LLMs and single-cell omics; agent systems for biology',
];

export interface AwardGroup {
  year: string;
  items: string[];
}

export const awards: AwardGroup[] = [
  {
    year: '2025',
    items: [
      'National Scholarship for PhD Students',
      'CAAI "Rising Scientist Honorable Mention"',
      'Shanghai Interdisciplinary Innovation Foundation',
      'National Natural Science Foundation of China (NSFC)',
    ],
  },
  {
    year: '2024',
    items: [
      '"Academic Pioneer Award" at Tongji University',
      '"Stars of Tomorrow" at Microsoft Research',
      'National Scholarship for PhD Students',
    ],
  },
  { year: '2023', items: ['National Scholarship for PhD Students'] },
];

export interface EduItem {
  years: string;
  place: string;
  detail?: string;
}

export const education: EduItem[] = [
  {
    years: '2020 – 2026',
    place: 'Tongji University',
    detail: 'Ph.D. in Bioinformatics · Advisor: Prof. Qi Liu, BM2 Lab',
  },
];

export const experiences: EduItem[] = [
  {
    years: 'Present',
    place: 'Tongji University — Shanghai Research Institute for Intelligent Autonomous Systems',
    detail: 'Research Professor, PI and Ph.D. Supervisor · 同济大学自主智能无人系统科学中心百人计划特聘研究员、博士生导师',
  },
  {
    years: 'Aug 2025 – Feb 2026',
    place: 'Helmholtz Munich — Theis Lab',
    detail: 'Supervised by Prof. Fabian J. Theis',
  },
  {
    years: 'Dec 2023 – Oct 2024',
    place: 'Microsoft Research Asia',
    detail: 'Research Intern, AI/ML Group · Mentored by Dr. Caihua Shan and Dr. Dongsheng Li',
  },
  {
    years: 'Summer 2019 & 2020',
    place: 'BGI Genomics',
    detail: 'Algorithm Engineer Intern',
  },
];
