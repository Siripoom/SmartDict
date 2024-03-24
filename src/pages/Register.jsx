import "../css/form.css";

export default function Register() {

    return(
        <div>
            <div className="body">
            <div className="Box">
                <h1 className="text-center">Register</h1>
                <br />
                <div className="mb-3">
                    <input type="text" name="txtUsername" size="50" maxLength="50" placeholder="Enter Your Username"
                        className="form-control" />
                </div>
                <div className="mb-3">
                    <input type="password" name="txtPassword" size="50" maxLength="50" placeholder="Enter Your Password"
                        className="form-control" />
                </div>
                <div className="mb-3">
                    <input type="text" name="mail" size="50" maxLength="50" placeholder="Email"
                        className="form-control" />
                </div>
                <div className="mb-3">
                    <input type="text" name="Fname" size="50" maxLength="50" placeholder="First name"
                        className="form-control" />
                </div>
                <div className="mb-3">
                    <input type="text" name="Lname" size="50" maxLength="50" placeholder="Last name"
                        className="form-control" />
                </div>
                <div className="icon">
                    <button type="reset" className="btn btn-dark" >Cancel</button>
                    <button type="submit" className="btn btn-dark" >Submit</button>
                </div>
            </div>
        </div>

        </div>
    )

}

