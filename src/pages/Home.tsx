import { NavLink } from "react-router-dom";
import Image from "../components/props/Image";
import Text from "../components/props/Text";
import { homeImageData, textData, homeWorkItems } from "../data";

function Home() {
  return (
    <main className="home-container container">
      <Image data={homeImageData} />
      <section className="home-text">
        <Text data={textData} />
      </section>

      <section className="home-link-container">
        <NavLink to={"/work"}>
          <Image data={homeWorkItems} />
          <h1>Work</h1>
        </NavLink>
      </section>
    </main>
  );
}

export default Home;
