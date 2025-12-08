import type { ImageItem, ImageProps } from "../../types";

function IconsSvg({ data }: ImageProps) {
  return (
    <section className="icons-svg-container">
      {data.map((item: ImageItem) => (
        <a href={item.link} key={item.id} aria-label={item.title}>
          <img src={item.image} alt={item.alt} />
        </a>
      ))}
    </section>
  );
}

export default IconsSvg;
