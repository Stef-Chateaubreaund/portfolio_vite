import Tech from "./Tech";
import AboutContainer from "./AboutContainer";
import ProjetosContainer from "./ProjetosContainer";

import "../styles/components/maincontent.sass";


const MainContent = () => {
  return (
    <main id="main-content">
      <AboutContainer />
      <Tech />
      <ProjetosContainer />
    </main>
  );
};

export default MainContent;