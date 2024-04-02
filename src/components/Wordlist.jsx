import React from 'react';
import "../components/style/list.css";
import { AiFillDelete } from "react-icons/ai";
import { FaPen } from "react-icons/fa";
function Wordlist() {
  return (

    <section>
      <div className='header-list'>
      <div className='mylist col-md-12 text-3xl'>
      <h1>:Your List</h1>
      </div>
      <button className="btn-rename btn-ghost"><FaPen /></button>
      </div>
      <hr />
      <br />
    <div className="body-list">
      <div className="card border">
        <div className="card-body">
          <h2 className="card-title">word <i>noun</i> [c] </h2>
          <p>a single unit of language that has meaning and can be spoken or written</p>
          <h4>ENGLISH</h4>
          <button className="btn-delete"><AiFillDelete/></button>
        </div>
      </div>
    </div>
    </section>
  )
}

export default Wordlist;