import Link from 'next/link';
import { useState } from 'react';

const Navigation = () => {
  return (
    <div className="bg-gray-900 h-full w-64 flex flex-col text-gray-100">
      <nav>
        <ul>
          <li>
            <Link href="/">
              <p className="block py-2 px-4">Home</p>
            </Link>
          </li>
          <li>
            <Link href="/projects">
              <p className="block py-2 px-4">Our work</p>
            </Link>
          </li>
          <li>
            <Link href="/services">
              <p className="block py-2 px-4">What we do</p>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <p className="block py-2 px-4">About us</p>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <p className="block py-2 px-4">Contact us</p>
            </Link>
          </li>
        </ul>
        <p>Follow us</p>
        <a
          href="https://twitter.com/rulebreakers___"
          rel="noreferrer"
          target="_blank"
          className="cursor-pointer hover:bg-clip-text hover:bg-orange-gradient hover:text-transparent transition-bg duration-200"
        >
        Instagram
        </a>
        <a
          href="https://twitter.com/rulebreakers___"
          rel="noreferrer"
          target="_blank"
          className="cursor-pointer hover:bg-clip-text hover:bg-orange-gradient hover:text-transparent transition-bg duration-200"
        >
        LinkdIn
        </a>
        <a
          href="https://twitter.com/rulebreakers___"
          rel="noreferrer"
          target="_blank"
          className="cursor-pointer hover:bg-clip-text hover:bg-orange-gradient hover:text-transparent transition-bg duration-200"
        >
        X
        </a>
      </nav>
    </div>
  );
};

export default Navigation;