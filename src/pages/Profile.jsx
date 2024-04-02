import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style/profile.css";
import { auth } from "../firebase_config";
import { updateProfile } from "firebase/auth";

function Profile(props) {
  const { user } = props;
  const [firstName, setFirstName] = useState(
    user.displayName.split(" ")[0] || ""
  );
  const [lastName, setLastName] = useState(
    user.displayName.split(" ")[1] || ""
  );
  const [alertMessage, setAlertMessage] = useState(""); // Step 2: Define state variable for alert message
  const navigate = useNavigate();

  const handleSave = async (e) => {
    e.preventDefault();
    try {
      await updateProfile(auth.currentUser, {
        displayName: `${firstName} ${lastName}`,
      });
      //   const updatedUser = {...user, displayName: `${firstName} ${lastName}`};
      //   props.setUser(updatedUser);
      navigate("/");
      setAlertMessage("Profile updated successfully"); // Step 3: Set alert message
      setTimeout(() => {
        setAlertMessage(""); // Step 5: Clear alert message after a certain duration
      }, 3000); // 3000 milliseconds = 3 seconds
    } catch (error) {
      console.error("Error updating profile", error);
    }
  };

  return (
    <div>
      {alertMessage && <div className="alert">{alertMessage}</div>}{" "}
      {/* Step 4: Render alert message */}
      <div className="body my-5">
        <div className="Box">
          <h1 className="text-center text-4xl font-bold">My Profile</h1>
          <div>
            <div className="flex justify-around my-2">
              <div className="avatar m-auto">
                <div className="w-32 rounded">
                  <img src={user.photoURL} alt="User Avatar" />
                </div>
              </div>
            </div>
            <div className="stats shadow">
              <div className="stat place-items-center">
                <div className="stat-title">Name</div>
                <div className="stat-value">{user.displayName}</div>
                {/* <div className="stat-desc">
                  From January 1st to February 1st
                </div> */}
              </div>

              <div className="stat place-items-center">
                <div className="stat-title">Email</div>
                <div className="stat-value">{user.email}</div>
                {/* <div className="stat-desc">↘︎ 90 (14%)</div> */}
              </div>
            </div>
            {/* <div className="badge badge-neutral mx-3 text-2xl">
              {user.displayName}
            </div>
            <div className="badge badge-neutral text-2xl">{user.email}</div> */}
            <br />
            <div className="flex justify-center items-center h-full">
              <div className="">
                <div className="mb-3">
                  <div className="label">
                    <span className="label-text">First Name</span>
                  </div>
                  <input
                    type="text"
                    placeholder="Type here"
                    className="input input-bordered w-full max-w-xs"
                    size={40}
                    maxLength={50}
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <div className="label">
                    <span className="label-text">Last Name</span>
                  </div>
                  <input
                    type="text"
                    placeholder="Type here"
                    className="input input-bordered input-md w-full max-w-xs"
                    size={40}
                    maxLength={50}
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </div>
              </div>
            </div>

            <div className="btnProfile justify-center">
              <div style={{ display: "flex", justifyContent: "center" }}>
                <button className="btn" onClick={handleSave}>
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
