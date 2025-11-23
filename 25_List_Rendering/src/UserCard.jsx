import React from 'react'

const UserCard = ({userInfo}) => {
  return (
    <div>
    <p>Id: {userInfo.id}</p>
    <h1>Name: {userInfo.name}</h1>
    <h4>age: {userInfo.age}</h4>
    </div>
  )
}

export default UserCard
