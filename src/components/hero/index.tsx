import { ReactElement } from "react";
import "./styles.scss";

type HeroProps = {};

export default function Hero(props: HeroProps): ReactElement {
  return (
    <div className="hero">
      <h1>
        Hello, my name is Lucas
        <br />
        I’m a Developer
      </h1>
      <h3>
        Some random text that you will never read. More text to fill the space,
        just don’t read. Really? You still reading this?
      </h3>
      <nav>
        <a href="#work" className="btn-primary">
          Hire Me
        </a>
        <a href="#work" className="btn-secondary">
          My Work
        </a>
      </nav>
    </div>
  );
}
