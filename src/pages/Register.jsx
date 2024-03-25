import "../css/form.css";

export default function Register() {

    return (
        <div>
            <div className="body">
                <div className="Box">
                    <h1 className="text-center">Register</h1>
                    <br />
                    <div className="mb-3">
                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">Username</span>
                            </div>
                            <input type="text" placeholder="Type here" className="input input-bordered input-md input-info w-full max-w-xs" size={40} maxLength={50} />
                        </label>
                    </div>
                    <div className="mb-3">
                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">Password</span>
                            </div>
                            <input type="text" placeholder="Type here" className="input input-bordered input-md input-info w-full max-w-xs" size={40} maxLength={50} />
                        </label>
                    </div>
                    <div className="mb-3">
                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">Email</span>
                            </div>
                            <input type="text" placeholder="Type here" className="input input-bordered input-md input-info w-full max-w-xs" size={40} maxLength={50} />
                        </label>
                    </div>
                    <div className="mb-3">
                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">First name</span>
                            </div>
                            <input type="text" placeholder="Type here" className="input input-bordered input-md input-info w-full max-w-xs" size={40} maxLength={50} />
                        </label>
                    </div>
                    <div className="mb-3">
                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">Last name</span>
                            </div>
                            <input type="text" placeholder="Type here" className="input input-bordered input-md input-info w-full max-w-xs" size={40} maxLength={50}/>
                        </label>
                    </div>
                    <div className="btnRig">
                        <button type="reset" className="btn btn-error" >Cancel</button>
                        <button type="submit" className="btn btn-success" >Submit</button>
                    </div>
                </div>
            </div>

        </div>
    )

}

