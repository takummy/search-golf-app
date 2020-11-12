import React from "react";

const Loading = ({ isLoading }) => {
  return (
    isLoading ? (
      <div className="loading">
        <div className="loading-image">
          <img
            src="https://media.giphy.com/media/y1ZBcOGOOtlpC/giphy.gif"
            alt="golf-gif"
          />
        </div>
      </div>
    ) : (
      <div></div>
    )
  );
};

export default Loading;
