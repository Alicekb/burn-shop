import { motion, AnimatePresence } from "framer-motion";
import { SliderImage } from "./styles";

const CustomImage = ({ imgUrl, imgAlt }) => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0.5 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <a href="#">
          <SliderImage
            cloudName="aliceb"
            publicId={`burn-shop/banners/${imgUrl}`}
            alt={imgAlt}
          />
        </a>
      </motion.div>
    </AnimatePresence>
  );
};

export default CustomImage;
