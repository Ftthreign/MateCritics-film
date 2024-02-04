import { useState } from "react";
import Star from "./Star";
import { IStarRating } from "../../../common/types/ratings";
const containerStyle = {
  display: "flex",
  alignItems: "center",
  gap: "16px",
};

const starContainerStyle = {
  display: "flex",
};

function StarRating({
  maxRating = 5,
  color = "#fcc419",
  size = 48,
  className = "",
  messages = [],
  defaultRating = 0,
  onSetRating,
  reset = false,
}: IStarRating) {
  const [rating, setRating] = useState(defaultRating);
  const [tempRating, setTempRating] = useState(0);
  const textStyle = {
    lineHeight: "0",
    margin: "0",
    color,
    fontSize: `${size / 1.5}px`,
  };

  const handleRating = (index: number) => {
    setRating(index);
    onSetRating && onSetRating(index);
  };

  const handleReset = () => {
    if (reset) {
      setRating(defaultRating);
      setTempRating(0);
      onSetRating && onSetRating(0);
    }
  };

  return (
    <div style={containerStyle} className={className}>
      <div style={starContainerStyle}>
        {Array.from({ length: maxRating }, (_, index) => (
          <Star
            key={index}
            onRate={() => handleRating(index + 1)}
            onHoverIn={() => setTempRating(index + 1)}
            onHoverOut={() => setTempRating(rating)}
            full={tempRating ? tempRating >= index + 1 : rating >= index + 1}
            color={color}
            size={size}
          />
        ))}
      </div>
      <p style={textStyle}>
        {messages[tempRating - 1] || tempRating || rating || ""}
      </p>
      {reset && (messages[tempRating - 1] || tempRating) ? (
        <button onClick={() => handleReset()}>Reset</button>
      ) : (
        ""
      )}
    </div>
  );
}

export default StarRating;
