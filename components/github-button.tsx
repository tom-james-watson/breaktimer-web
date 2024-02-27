"use client";

import React from "react";
import GitHubButton from "react-github-btn";

export default function GithubButton() {
  return (
    <GitHubButton
      href="https://github.com/tom-james-watson/breaktimer-app"
      data-color-scheme="no-preference: light; light: light; dark: dark;"
      data-size="large"
      data-show-count="true"
      aria-label="Star tom-james-watson/breaktimer-app on GitHub"
    >
      Star
    </GitHubButton>
  );
}
