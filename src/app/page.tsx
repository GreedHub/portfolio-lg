import Image from "next/image";
import styles from "./page.module.scss";
import Header from "../components/header";
import Hero from "../components/hero";

export default function Home() {
  return (
    <>
      <Header />
      <div className="fake1"></div>
      <div className="fake2"></div>
      <main>
        <Hero />
      </main>
    </>
  );
}
