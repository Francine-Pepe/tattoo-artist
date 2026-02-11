import type { TextItem } from "../../types";

function SimpleText({ id, text }: TextItem) {
  return (
    <section className="text-container">
      <section className="text-content">
        <p id={id}>{text}</p>
      </section>
    </section>
  );
}

export default SimpleText;
