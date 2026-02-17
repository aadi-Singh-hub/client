'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/courses', label: 'Courses' },
  { href: '/workflow', label: 'Workflow' },
  { href: '/career-support', label: 'Career Support' },
  { href: '/contact', label: 'Contact' }
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('bharatskills-theme');
    if (saved === 'dark') {
      document.body.classList.add('dark-mode');
      setDarkMode(true);
    }
  }, []);

  const toggleTheme = () => {
    const next = !darkMode;
    setDarkMode(next);
    document.body.classList.toggle('dark-mode', next);
    localStorage.setItem('bharatskills-theme', next ? 'dark' : 'light');
  };

  return (
    <header className="navbar-wrap">
      <nav className="container navbar">
        <Link href="/" className="brand">BharatSkills Foundation</Link>
        <button className="menu-btn" onClick={() => setOpen(!open)} aria-label="Toggle menu">☰</button>
        <div className={`nav-links ${open ? 'open' : ''}`}>
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className={pathname === item.href ? 'active' : ''} onClick={() => setOpen(false)}>
              {item.label}
            </Link>
          ))}
          <button className="theme-btn" onClick={toggleTheme} aria-label="Toggle dark mode">
            {darkMode ? '☀️' : '🌙'}
          </button>
        </div>
      </nav>
    </header>
  );
}
