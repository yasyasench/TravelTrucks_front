const RatingStars = ({ rating }) => {
  const stars = [];

  for (let i = 0; i < 5; i++) {
    stars.push(
      <svg key={i} width={16} height={16}>
        <use href={`/sprite.svg#icon-star${i < rating ? "-yellow" : ""}`}></use>
      </svg>
    );
  }

  return <div>{stars}</div>;
};

export default RatingStars;
