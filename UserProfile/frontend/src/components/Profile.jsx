import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';

function Profile() {
  const [user, setUser] = useState({
    name: 'John Doe',
    age: 30,
    address: '123 Main St, City, Country',
    email: 'johndoe@example.com',
    profilePicture: null,
  });
  const [isEditing, setIsEditing] = useState(false);
  const [tempUser, setTempUser] = useState({ ...user });

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    setUser(tempUser);
    setIsEditing(false);
  };

  const handleImageClick = () => {
    if (isEditing) {
      // If in edit mode, allow image upload when clicking the image.
      document.getElementById('profilePictureInput').click();
    }
  };

  const handleProfilePictureChange = (e) => {
    const file = e.target.files[0];
    setTempUser({ ...tempUser, profilePicture: file });
  };

  return (
    <div className="bg-white p-4 rounded shadow">
      <div className="text-center relative inline-block" onClick={handleImageClick}>
        <div className="relative">
          <img
            src={tempUser.profilePicture ? URL.createObjectURL(tempUser.profilePicture) : "profile-placeholder.jpg"}
            alt="Profile"
            className="w-32 h-32 mx-auto rounded-full cursor-pointer"
          />
          {isEditing && (
            <div className="absolute right-0 bottom-0 p-2 bg-white rounded-full cursor-pointer">
              <FontAwesomeIcon icon={faPencilAlt} />
            </div>
          )}
        </div>
      </div>

      <div className="mt-4">
        <h2 className="text-2xl font-bold">User Profile</h2>
        {isEditing ? (
          <form>
            <div className="mt-2">
              <label className="block text-gray-600">Name:</label>
              <input
                type="text"
                value={tempUser.name}
                onChange={(e) => setTempUser({ ...tempUser, name: e.target.value })}
                className="w-full border rounded p-2"
              />
            </div>
            <div className="mt-2">
              <label className="block text-gray-600">Age:</label>
              <input
                type="number"
                value={tempUser.age}
                onChange={(e) => setTempUser({ ...tempUser, age: e.target.value })}
                className="w-full border rounded p-2"
              />
            </div>
            <div className="mt-2">
              <label className="block text-gray-600">Address:</label>
              <input
                type="text"
                value={tempUser.address}
                onChange={(e) => setTempUser({ ...tempUser, address: e.target.value })}
                className="w-full border rounded p-2"
              />
            </div>
            <div className="mt-2">
              <label className="block text-gray-600">Email:</label>
              <input
                type="email"
                value={tempUser.email}
                onChange={(e) => setTempUser({ ...tempUser, email: e.target.value })}
                className="w-full border rounded p-2"
              />
            </div>
            <input
              type="file"
              id="profilePictureInput"
              accept="image/*"
              style={{ display: 'none' }}
              onChange={handleProfilePictureChange}
            />
            <button onClick={handleSaveClick} className="mt-4 bg-blue-500 text-white p-2 rounded">
              Save Changes
            </button>
          </form>
        ) : (
          <div>
            <p>Name: {user.name}</p>
            <p>Age: {user.age}</p>
            <p>Address: {user.address}</p>
            <p>Email: {user.email}</p>
            <button onClick={handleEditClick} className="mt-4 bg-blue-500 text-white p-2 rounded">
              Edit
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Profile;
