import type { ImageItem } from "../../types";

function SimpleImage({ image, alt }: ImageItem) {
  return (
    <section >
      <img src={image} alt={alt} />
    </section>
  );
}

export default SimpleImage;
