import Ballpit from '../components/Ballpit'

const Blender = () => {
  return (
    <>
      <div
        style={{
          position: "relative",
          overflow: "hidden",
          minHeight: "0vh",
          maxHeight: "88vh",
          width: "100%",
        }}
      >
        <Ballpit
          count={30}
          gravity={1}
          friction={0.8}
          wallBounce={0.95}
          followCursor={true}
        />
      </div>
    </>
  );
};
export default Blender;
