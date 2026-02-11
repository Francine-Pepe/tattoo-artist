import SimpleImage from "../components/props/SimpleImage";
import SimpleText from "../components/props/SimpleText";
import { aboutData } from "../data";

function About() {
  return (
    <main className="about-container">
      <SimpleImage
        image={aboutData.image}
        alt={aboutData.alt}
      />
      <SimpleText text={aboutData.text} id={aboutData.id} />
    </main>
  );
}

export default About;
