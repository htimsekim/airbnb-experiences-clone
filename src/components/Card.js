import star from "../images/star.png";

export default function Card(props) {
  let badgeText;
  if (props.openSpots === 0) {
    badgeText = "SOLD OUT"
  } else if (props.location === "Online") {
    badgeText = "ONLINE"
  }
  console.log(props)
  
  return (
      <div className="card">
        {/* container so i can float text over image */}
        <div className="card--photo__container">
          {badgeText && <div className="card--photo__overlay">
            <span className="card--photo__overlay__text">
              {badgeText}
            </span>
          </div>}
          <img
            src={require(`../images/${props.coverImg}`)}
            alt="katie zaferes"
            className="card--photo"
          />
        </div>
        <div className="card--rating">
          <img
            className="card--rating__star"
            alt="star"
            src={star}
          />
          <span className="card--rating__score">{props.stats.rating}</span>
          <span className="card--rating__reviews">({props.stats.reviewCount})</span>
          <span className="card--rating__interpunct">•</span>
          <span className="card-rating__location">{props.location}</span>
        </div>
        <div className="card--description">
          <span>{props.title}</span>
        </div>
        <div className="card--price">
          <span className="card--price__amount">From ${props.price} / </span>
          <span className="card--price__person">person</span>
        </div>
      </div>
  )
}