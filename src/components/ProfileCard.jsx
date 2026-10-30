import { useState, useEffect } from 'react';

function ProfileCard() {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      // Your details are updated here
      setProfile({
        name: "Abdulbaaqiy Shefiu-Badamosi",
        email: "abdulbaaqiyshefiu@gmail.com",
        city: "ile-ife"
      });
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="card">
      <h2>Component 3: Profile Loader</h2>
      
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="profile-info">
          <p><strong>Name:</strong> {profile.name}</p>
          <p><strong>Email:</strong> {profile.email}</p>
          <p><strong>City:</strong> {profile.city}</p>
        </div>
      )}
    </div>
  );
}

export default ProfileCard;