import React from 'react';

const UserCard = ({ personDetails }) => {
  console.log(personDetails);
  
  return (
    <div className="bg-blue-500 text-white p-4 m-3 rounded-lg">
      <h1>ID: {personDetails.id}</h1>
      <h1>Name: {personDetails.name}</h1>
      <h1>Age: {personDetails.age}</h1>
    </div>
  );
};

export default UserCard;
