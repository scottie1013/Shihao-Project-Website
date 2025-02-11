'use client';

import Link from 'next/link';

export default function Navbar() {
  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth'
    });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="bg-white/90 w-full px-8 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link href="/" className="text-gray-800 text-xl font-light hover:text-black transition-colors">
            {'<Shihao />'}
          </Link>
          
          <div className="flex items-center gap-12">
            <Link href="#projects" className="text-gray-600 hover:text-gray-800 transition-colors">
              Projects
            </Link>
            <a 
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-800 transition-colors duration-300"
            >
              Resume
            </a>
            <Link href="#about" className="text-gray-600 hover:text-gray-800 transition-colors">
              About
            </Link>
            <Link href="#skills" className="text-gray-600 hover:text-gray-800 transition-colors">
              Skills
            </Link>
            <button 
              onClick={scrollToBottom}
              className="text-gray-600 hover:text-gray-800 transition-colors"
            >
              Contact
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}