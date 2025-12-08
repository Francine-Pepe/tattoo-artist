import { type IconProps } from "../../types";

function Icons(props: IconProps) {
  return (
    <section className="icon-container">
      <span className="material-symbols-outlined">{props.name}</span>
    </section>
  );
}

export default Icons;
