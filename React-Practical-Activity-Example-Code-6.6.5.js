// Three cards rendered from an array, each with an id used as its key and
// a click handler reporting which one was pressed.

import React from 'react';
import Card from './components/Card';

const App = () => {
  const cardData = [
    {
      id: 'react',
      title: "React Development",
      description: "Learn how to build web applications with React and Tailwind CSS.",
      buttonText: "Learn More",
      imageUrl: "https://example.com/react-image.jpg"
    },
    {
      id: 'tailwind',
      title: "Tailwind CSS Mastery",
      description: "Master the art of rapid UI development with Tailwind CSS.",
      buttonText: "Explore",
      imageUrl: "https://example.com/tailwind-image.jpg"
    },
    {
      id: 'vite',
      title: "Building with Vite",
      description: "See why the dev server starts before you have finished blinking.",
      buttonText: "Get Started",
      imageUrl: "https://example.com/vite-image.jpg"
    }
  ];

  const handleCardClick = (title) => {
    console.log('Card clicked:', title);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-8">My Card Application</h1>

      <div className="flex flex-wrap justify-center">
        {cardData.map(card => (
          <Card
            key={card.id}
            title={card.title}
            description={card.description}
            buttonText={card.buttonText}
            imageUrl={card.imageUrl}
            onButtonClick={() => handleCardClick(card.title)}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
