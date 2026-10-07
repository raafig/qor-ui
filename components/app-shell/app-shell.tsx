import Link from "next/link";
import Image from "next/image";

const navigation = [
  { href: "/experiments", label: "Experiments" },
  { href: "/catalog", label: "Catalog" },
  { href: "/compositions", label: "Compositions" },
] as const;

export function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <header className="site-header"><div className="shell-container header-inner">
        <Link className="brand" href="/" aria-label="QorUI home"><Image className="brand-mark" src="/logo.png" alt="" width={32} height={32} priority /><span>QorUI</span></Link>
        <nav aria-label="Primary navigation"><ul className="primary-nav">{navigation.map((item) => <li key={item.href}><Link href={item.href}>{item.label}</Link></li>)}</ul></nav>
      </div></header>
      <main className="shell-container main-content" id="main-content">{children}</main>
      <footer className="site-footer"><div className="shell-container footer-inner"><span>QorUI</span><span>Empty by design. Ready to grow with real work.</span></div></footer>
    </>
  );
}
