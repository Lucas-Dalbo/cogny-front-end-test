import React from 'react';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <>
      <hr className={ styles.line } />
      <h3 className={ styles.author }>Lucas Dalbo Fernandes</h3>
      <div className={ styles.links }>
        <a
          href="https://github.com/Lucas-Dalbo"
          target="_blank"
          rel="noreferrer"
        >
          <span className="fa-brands fa-square-github" />
        </a>
        <a href="https://www.linkedin.com/in/lucasdalbofernandes/" target="_blank" rel="noreferrer">
          <span className="fa-brands fa-linkedin" />
        </a>
      </div>
    </>
  );
}
