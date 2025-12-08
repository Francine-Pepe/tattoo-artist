import type { ImageProps, ImageItem } from "../../types";

function Image({ data }: ImageProps) {
  return (
    <section className="image-container">
      {data.map((item: ImageItem) => (
          <img src={item.image} alt={item.alt} key={item.id} />
      ))}
    </section>
  );
}

export default Image;
