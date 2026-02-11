import IconsSvg from "../components/props/IconsSvg";
import Image from "../components/props/Image";
import Text from "../components/props/Text";
import { footerTextData, socialMediaData, footerBgData } from "../data";

function Footer() {
  return (
    <>
      <footer className="footer-container">
        <section className="footer-bg-image">
          <Image data={footerBgData} />
        </section>
      </footer>
      <footer className="footer-content-wrapper">
        <section className="footer-content">
          <Text data={footerTextData} />
          <IconsSvg data={socialMediaData} />
        </section>
      </footer>
    </>
  );
}

export default Footer;
