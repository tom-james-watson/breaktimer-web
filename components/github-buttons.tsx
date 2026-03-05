"use client";
/* eslint-disable @next/next/no-img-element */

export default function GithubButtons() {
  return (
    <div className="source-badges">
      <a
        className="shields-badge"
        href="https://github.com/tom-james-watson/breaktimer-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="https://img.shields.io/github/stars/tom-james-watson/breaktimer-app?logo=github&style=social"
          alt="GitHub stars badge"
          width={128}
          height={20}
        />
      </a>
      <a className="shields-badge" href="#download">
        <img
          src="https://img.shields.io/github/downloads/tom-james-watson/breaktimer-app/total?logo=github&style=social"
          alt="GitHub downloads badge"
          width={160}
          height={20}
        />
      </a>
    </div>
  );
}
