import { div } from "framer-motion/client";
import Masonry from "../components/Masonry";
import items from "../items";

const ChristoferPhotography = () => {
  return (
    <div className="containerPhoto">
      <div>
        <Masonry
          items={items}
          ease="power3.out"
          duration={0.6}
          stagger={0.05}
          animateFrom="bottom"
          scaleOnHover={true}
          hoverScale={0.95}
          blurToFocus={true}
          colorShiftOnHover={false}
        />
      </div>
    </div>
  );
};

export default ChristoferPhotography;
