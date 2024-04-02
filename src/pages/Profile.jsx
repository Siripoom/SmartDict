import React from 'react';

function Profile() {

  return (
    <div>
      <div className="body">
      <span className="indicator-item badge">tag this list:</span>
      <select className="select select-bordered w-full max-w-xs">
          <option disabled selected>Choose Dictionary</option>
          <option>1</option>
          <option>2</option>
        </select>

        <select className="select select-bordered w-full max-w-xs">
          <option disabled selected>Choose Level</option>
          <option>1</option>
          <option>2</option>
        </select>
        <button className="btn">
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
</button>
        </div>

      </div>

  )
}

export default Profile;