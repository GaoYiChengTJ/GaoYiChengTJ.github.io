const links = [
  { href: '#about', label: 'About' },
  { href: '#news', label: 'News' },
  { href: '#publications', label: 'Publications' },
  { href: '#projects', label: 'Projects' },
  { href: '#awards', label: 'Awards' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  return (
    <header className="site-header">
      <div className="nav-inner">
        <a href="#about" className="nav-name">Yicheng Gao</a>
        <nav className="main-nav">
          {links.map((l) => (
            <a key={l.href} href={l.href}>{l.label}</a>
          ))}
        </nav>
      </div>
    </header>
  );
}
