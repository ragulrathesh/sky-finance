import Image from "next/image";
import styles from "./page.css";
import { Header } from "./components/header/page";

export default function Home() {
  return (
    <div>
      <div className="family-image">
        <Header/>

      </div>
    </div>
  );
}
