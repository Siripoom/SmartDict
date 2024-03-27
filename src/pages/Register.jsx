import { useNavigate } from "react-router-dom";
import "../css/form.css";
import { useState } from "react";

export default function Register() {

    const navigate = useNavigate();
    const [user, setUser] = useState('');
    const [pass, setPass] = useState('');
    const [pass2, setPass2] = useState('')
    const [mail, setMail] = useState('');
    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');

    const chack = (e) => {
        e.preventDefault();

        if (mail == "") {
            alert("Enter you Email")
        } else if (pass == "") {
            alert("Enter you Password")
        } else if (pass2 == "") {
            alert("Enter you Password2")
        } else if (pass !== pass2) {
            alert("Enter Password not match")
        } else if (fname == "") {
            alert("Enter you Firstname")
        } else if (lname == "") {
            alert("Enter you Lastname")
        } else{

        }
    }


    return (
        <div>
            <div className="body">
                <div className="Box">
                    <h1 className="text-center">Register</h1>
                    <br />
                        <div className="mb-3">
                                <div className="label">
                                    <span className="label-text">Email</span>
                                </div>
                                <input type="text" placeholder="Type here" value={mail} className="input input-bordered w-full max-w-xs" size={40} maxLength={50}
                                    onChange={(e) => setMail(e.target.value)} />
                        </div>
                        <div className="mb-3">
                                <div className="label">
                                    <span className="label-text">Password</span>
                                </div>
                                <input type="password" placeholder="Type here" value={pass} className="input input-bordered input-md  w-full max-w-xs" size={40} maxLength={50}
                                    onChange={(e) => setPass(e.target.value)} />
                        </div>
                        <div className="mb-3">
                                <div className="label">
                                    <span className="label-text">Confirm Password</span>
                                </div>
                                <input type="password" placeholder="Type here" value={pass2} className="input input-bordered input-md  w-full max-w-xs" size={40} maxLength={50}
                                    onChange={(e) => setPass2(e.target.value)} />
                        </div>
                       
                        <div className="mb-3">
                                <div className="label">
                                    <span className="label-text">First name</span>
                                </div>
                                <input type="text" placeholder="Type here" value={fname} className="input input-bordered input-md  w-full max-w-xs" size={40} maxLength={50}
                                    onChange={(e) => setFname(e.target.value)} />
                        </div>
                        <div className="mb-3">
                                <div className="label">
                                    <span className="label-text">Last name</span>
                                </div>
                                <input type="text" placeholder="Type here" value={lname} className="input input-bordered input-md w-full max-w-xs" size={40} maxLength={50}
                                    onChange={(e) => setLname(e.target.value)} />
                        </div>
                        <div className="btnRig">
                            <button type="reset" className="btn" onClick={() => navigate('/SignIn')} >Cancel</button>
                            <button type="submit" className="btn" onClick={chack}>Submit</button>
                        </div>
                </div>
            </div>
        </div>
    )

}

