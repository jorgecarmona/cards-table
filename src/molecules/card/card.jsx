import "./card.css";
import {JCButton, JCChip, JCColor, JCTypography} from "../../atoms";

function Card({chipTitle, title, price, color}) {
  return (
    <div className="jc-card-container">
      <div className="color">
        <JCColor color={color} />
      </div>
      <div className="group">
        <div>
          <JCChip text={chipTitle} />
        </div>
        <div>
          <JCTypography text={title} variant="h3" />
        </div>
        <div>
          <JCTypography text={`$${price}`} variant="p" />
        </div>
        <div>
          <JCButton text="Add to Cart" color="rgb(250, 204, 21)" />
        </div>
      </div>
    </div>
  );
}

export default Card;
