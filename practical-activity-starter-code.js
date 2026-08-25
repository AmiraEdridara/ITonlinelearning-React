// Difference: the placeholders are filled in - ProfileCard actually renders
// the profile, App maps over the array, and there are three profiles rather
// than one plus a comment.

// ProfileCard.js
import React from 'react';

const ProfileCard = ({ image, name, jobTitle, bio }) => {
  return (
    <div className="profile-card">
      <img className="profile-image" src={image} alt={`${name}, ${jobTitle}`} />
      <h2 className="profile-name">{name}</h2>
      <p className="profile-job-title">{jobTitle}</p>
      <p className="profile-bio">{bio}</p>
    </div>
  );
};

export default ProfileCard;

// App.js
import React from 'react';
import ProfileCard from './ProfileCard';

const App = () => {
  const profiles = [
    {
      id: 1,
      image: "https://example.com/image1.jpg",
      name: "John Doe",
      jobTitle: "Frontend Developer",
      bio: "Passionate about creating user-friendly web applications."
    },
    {
      id: 2,
      image: "https://example.com/image2.jpg",
      name: "Priya Shah",
      jobTitle: "Automation Engineer",
      bio: "Builds the bots that do the boring parts of everyone else's day."
    },
    {
      id: 3,
      image: "https://example.com/image3.jpg",
      name: "Marco Silva",
      jobTitle: "QA Analyst",
      bio: "Finds the one input nobody thought to try."
    }
  ];

  return (
    <div className="app">
      <h1>Team Profiles</h1>
      <div className="profile-list">
        {profiles.map(profile => (
          <ProfileCard
            key={profile.id}
            image={profile.image}
            name={profile.name}
            jobTitle={profile.jobTitle}
            bio={profile.bio}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
