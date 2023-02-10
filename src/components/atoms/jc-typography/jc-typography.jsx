import "./jc-typography.css";

function JCTypography({text, variant = "h1"}) {
  let tag;

  switch (variant) {
    case "h2":
      tag = <h2>{text}</h2>;
      break;
    case "h3":
      tag = <h3>{text}</h3>;
      break;
    case "p":
      tag = <p>{text}</p>;
      break;
    default:
      tag = <h1>{text}</h1>;
  }

  return <div className="typography-container">{tag}</div>;
}

export default JCTypography;
