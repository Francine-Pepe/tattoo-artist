import IconsSvg from "../components/props/IconsSvg";
import Text from "../components/props/Text";
import { footerTextData, socialMediaData } from "../data";

function Footer() {
  return (
    <footer className="footer-container">
        <Text data={footerTextData} />
        <IconsSvg data={socialMediaData} />
    </footer>
  )
}

export default Footer