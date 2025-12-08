import type { TextProps, TextItem } from "../../types";

function Text({ data }: TextProps) {
  return (
    <section className="text-container">
      {data.map((item: TextItem) => (
        <section key={item.id}>
          <h1>{item.heading}</h1>
          <h2>{item.subHeading}</h2>
          <p>{item.text}</p>
        </section>
      ))}
    </section>
  );
}

export default Text;
