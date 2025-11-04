import LetterGlitch from "../components/LetterGlitch";

const WebDeveloper = () => {
  return (
    <>
      <div>
        <LetterGlitch
          glitchSpeed={50}
          centerVignette={true}
          outerVignette={false}
          smooth={true}
        />
      </div>
      
    </>
  );
};
export default WebDeveloper;
