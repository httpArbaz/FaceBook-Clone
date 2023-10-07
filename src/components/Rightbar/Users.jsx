import React from "react";

function Users({ user }) {
  return (
    <>
      <div className="rightbarFollowing">
        <img
          src={user.profilePicture}
          alt="user"
          className="rightbarFollowingImg"
        />
        <span
          style={{
            marginTop: "10px",
          }}
          className="rightbarFollowingName"
        >
          {user.username}
        </span>
      </div>
    </>
  );
}

export default Users;
