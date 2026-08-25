// Difference: more than one category can be selected at a time, the buttons
// are rendered from an array rather than written out three times, and
// clicking a selected category clears it again.

import React, { useState } from 'react';

function CategorySelector() {
  const [selectedCategories, setSelectedCategories] = useState([]);

  const categoryStyles = {
    readEmails: { backgroundColor: 'orange', color: '#1f2937' },
    sendEmails: { backgroundColor: 'yellow', color: '#1f2937' },
    webParsing: { backgroundColor: 'blue', color: '#ffffff' },
    default: { backgroundColor: 'white', color: '#1f2937' }
  };

  const categories = [
    { key: 'readEmails', label: 'Read Emails' },
    { key: 'sendEmails', label: 'Send Emails' },
    { key: 'webParsing', label: 'Web Parsing' }
  ];

  const validateCategory = (category) => {
    return selectedCategories.includes(category);
  };

  const handleCategoryClick = (category) => {
    setSelectedCategories(prev =>
      prev.includes(category)
        ? prev.filter(item => item !== category)
        : [...prev, category]
    );
  };

  return (
    <div>
      {categories.map(category => (
        <button
          key={category.key}
          type="button"
          style={validateCategory(category.key) ? categoryStyles[category.key] : categoryStyles.default}
          onClick={() => handleCategoryClick(category.key)}
        >
          {category.label}
        </button>
      ))}

      <p>Selected: {selectedCategories.length === 0 ? 'none' : selectedCategories.join(', ')}</p>
    </div>
  );
}

export default CategorySelector;
