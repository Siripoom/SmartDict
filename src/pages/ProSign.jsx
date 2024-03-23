
export default function ProSign(props) {

    // const user = props.user;
    const user = window.sessionStorage.getItem('user');

    return(
        <div>
            {props.user ?(
                <div>Welcome {user.displayName}
                </div>
            ):(
                <div>
                  {/* <button onClick={props.login}>You not login</button> */}
                  {/* <Link to= "SignIn"><button className="btn">SignIn</button></Link> */}
                </div>
            )}
{/* 
            {props.user ?(
                <div>Welcome {user.displayName}
                <img src = {user.photURL} alt = "user" />
                </div>
            ):(
                <div>
                    <button onClick={props.login}>You not login</button>
                </div>
            )} */}


        </div>
    )

}

