import { FaStar } from "react-icons/fa";

function Cards(cardProps) {
  console.log(cardProps);
  let badgeText;
  if (cardProps.element.openSpots === 0) {
    badgeText = "Sold out";
  } else if (cardProps.element.location === "Online")
    badgeText = cardProps.element.location;
  return (
    <div className="card">
      {badgeText && <p className="status">{badgeText}</p>}
      <img
        src={`./images/${cardProps.element.coverImg}`}
        className="card-img"
        alt="swimmer"
      />
      <p className="first-row">
        <span className="star-span">
          <FaStar />
        </span>
        {cardProps.element.stars}
        <span className="text-span">(6){cardProps.element.location}</span>
      </p>
      <p className="second-row">{cardProps.element.description}</p>
      <p className="third-row">
        <span className="bold-span">From $ {cardProps.element.price}</span>/
        person
      </p>
    </div>
  );
}

export default Cards;
