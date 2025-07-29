"use client";

export default function GithubButtons() {
  return (
    <div className="github-buttons">
      <a
        href="https://github.com/tom-james-watson/breaktimer-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="https://img.shields.io/github/stars/tom-james-watson/breaktimer-app?logo=github&style=social"
          alt="GitHub stars"
        />
      </a>
      <a
        href="https://github.com/tom-james-watson/breaktimer-app/releases"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="https://img.shields.io/github/downloads/tom-james-watson/breaktimer-app/total?logo=github&style=social"
          alt="GitHub downloads"
        />
      </a>
    </div>
  );
}
