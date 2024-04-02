import React from 'react';24
import '../components/style/profile.css';

function Profile() {

  return (
    <div>
      <div className="body">
        <div className="Box">
          <h1 className="text-center">My Profile</h1>
          <br />
          <hr />
          <br />

          <div>
          <h1 className='about-profile'><ins>About me </ins></h1> 

          <div className="pic">
            <div className="w-24 shadow-md">
              <img src="https://scontent-bkk1-2.xx.fbcdn.net/v/t1.15752-9/416242559_345930398501785_8735749436621081379_n.png?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeF-eJ4DcQYJ6groP2NFY-78qnMPySLYOLWqcw_JItg4tYYuSEnokZmzlfKLXvfMrM4N89YCYNqBqy7cjFudx_Sb&_nc_ohc=tpjCx5XNjNAAX9_UFHI&_nc_ht=scontent-bkk1-2.xx&oh=03_AdQFnJHi6Jas3m9zBsaAFpGU9wR0h9wZHo2bwIya_ZJY5g&oe=66331D2A" />
            </div>
          </div>

          <div className="mb-3">
            <div className="label">
              <span className="label-text">First Name</span>
            </div>
            <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" size={40} maxLength={50} />
          </div>
          <div className="mb-3">
            <div className="label">
              <span className="label-text">Last Name</span>
            </div>
            <input type="text" placeholder="Type here" className="input input-bordered input-md  w-full max-w-xs" size={40} maxLength={50} />
          </div>
          <div className="mb-3">
            <div className="label">
              <span className="label-text">Email</span>
            </div>
            <input type="email" placeholder="Type here" className="input input-bordered input-md  w-full max-w-xs" size={40} maxLength={50} />
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}

export default Profile;