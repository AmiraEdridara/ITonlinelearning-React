// A reusable Card. It takes an onClick for its button, hides the image if
// none was passed, and uses the brand colour from the Tailwind config.

import React from 'react';

const Card = ({ title, description, buttonText, imageUrl, onButtonClick }) => {
  return (
    <div className="max-w-sm rounded-card overflow-hidden shadow-lg m-4 bg-white">
      {imageUrl && (
        <img className="w-full h-40 object-cover" src={imageUrl} alt={title} />
      )}

      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>

      <div className="px-6 pt-4 pb-4">
        <button
          type="button"
          onClick={onButtonClick}
          className="bg-brand hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default Card;
