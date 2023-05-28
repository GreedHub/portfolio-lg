import { ReactElement } from "react";
import "./styles.scss";

type HeaderProps = {};

export default function Header(props: HeaderProps): ReactElement {
  return (
    <header>
      <a href="#landing">
        <span id="name">Lucas</span>
        <span id="job-title">, developer</span>
      </a>
      <nav>
        <a href="#landing">Home</a>
        <a href="#skills">Skills</a>
        <a href="#portfolio">Portfolio</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}
