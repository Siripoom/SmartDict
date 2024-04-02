import { useNavigate } from "react-router-dom";
import "../css/form.css";
import { useState } from "react";
import { auth, storage, db } from "../firebase_config";
import {
  createUserWithEmailAndPassword,
  updateProfile,
  signOut,
} from "firebase/auth";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import {
  addDoc,
  collection,
  getDocs,
  doc,
  deleteDoc,
  refEqual,
} from "firebase/firestore";
export default function Register() {
  const navigate = useNavigate();
  const ColletionRef = collection(db, "/myWord");
  const [loading, setLoading] = useState(false); // State for loading indicator
  const [pass, setPass] = useState("");
  const [pass2, setPass2] = useState("");
  const [mail, setMail] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [photo, setPhoto] = useState(null); // State for photo file

  const handleSignup = async (e) => {
    e.preventDefault();

    if (mail == "") {
      alert("Enter you Email");
    } else if (pass == "") {
      alert("Enter you Password");
    } else if (pass2 == "") {
      alert("Enter you Password2");
    } else if (pass !== pass2) {
      alert("Enter Password not match");
    } else if (fname == "") {
      alert("Enter you Firstname");
    } else if (lname == "") {
      alert("Enter you Lastname");
    } else {
      try {
        setLoading(true); // Start loading
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          mail,
          pass
        );
        // User creation successful

        const profileUpdates = {
          displayName: fname + lname,
        };

        await updateProfile(userCredential.user, profileUpdates);

        if (photo) {
          // If a photo is selected
          const storageRef = ref(
            storage,
            `users/${userCredential.user.uid}/profile.jpg`
          );
          await uploadBytes(storageRef, photo); // Upload photo to Storage
          // Get download URL after upload
          const photoURL = await getDownloadURL(storageRef);
          profileUpdates.photoURL = photoURL;
          await updateProfile(userCredential.user, profileUpdates); // Update profile with photoURL
        }

        console.log("User created and profile updated:", userCredential.user);
        setMail("");
        setPass("");
        setPass2("");
        setFname("");
        setLname("");
        setPhoto(null);
        //sign out then alert to user and go to path '/'
        signOut(auth).then(() => {
          alert(`Register successful please sign in.`);
          navigate("/");
        });
      } catch (error) {
        alert(error.message);
      }
    }
  };

  const handlePhotoChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setPhoto(e.target.files[0]); // Store selected file
    } else {
      setPhoto(null);
    }
  };
  return (
    <div style={{ position: "relative", minHeight: "100vh" }}>
      <form onSubmit={handleSignup}>
        {loading && (
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          >
            <div className="loading loading-dots loading-lg"></div>
          </div>
        )}
        <div className="body my-5">
          <div className="Box">
            <h1 className="text-center text-4xl font-bold">Register</h1>

            <br />
            <div className="mb-3">
              <div className="label">
                <span className="label-text">Email</span>
              </div>
              <input
                type="email"
                placeholder="Type here"
                value={mail}
                className="input input-bordered w-full max-w-xs"
                size={40}
                maxLength={50}
                onChange={(e) => setMail(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <div className="label">
                <span className="label-text">Password</span>
              </div>
              <input
                type="password"
                placeholder="Type here"
                value={pass}
                className="input input-bordered input-md  w-full max-w-xs"
                size={40}
                maxLength={50}
                onChange={(e) => setPass(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <div className="label">
                <span className="label-text">Confirm Password</span>
              </div>
              <input
                type="password"
                placeholder="Type here"
                value={pass2}
                className="input input-bordered input-md  w-full max-w-xs"
                size={40}
                maxLength={50}
                onChange={(e) => setPass2(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <div className="label">
                <span className="label-text">First name</span>
              </div>
              <input
                type="text"
                placeholder="Type here"
                value={fname}
                className="input input-bordered input-md  w-full max-w-xs"
                size={40}
                maxLength={50}
                onChange={(e) => setFname(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <div className="label">
                <span className="label-text">Last name</span>
              </div>
              <input
                type="text"
                placeholder="Type here"
                value={lname}
                className="input input-bordered input-md w-full max-w-xs"
                size={40}
                maxLength={50}
                onChange={(e) => setLname(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <div className="label">
                <span className="label-text">Upload profile</span>
              </div>
              <input
                type="file"
                className="file-input file-input-bordered file-input-sm w-full max-w-xs"
                onChange={handlePhotoChange}
                id="photo"
              />
            </div>
            <div className="btnRig">
              <button
                type="reset"
                className="btn"
                onClick={() => navigate("/SignIn")}
              >
                Cancel
              </button>
              <button type="submit" className="btn">
                Submit
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
