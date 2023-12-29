import React from 'react';

const ProfileView = ({ user }) => {
  return (
    <div>
      <p>Bienvenido, {user}!</p>
    </div>
  );
};

export default ProfileView;