// @ts-nocheck
import { Divider } from "@mui/material";

import "./login.css";
import { FacebookOutlined } from "@mui/icons-material";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/firebase";
import { toast } from "react-toastify";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("User logged in Successfully");
      window.location.href = "/";
      toast.success("User logged in Successfully", {
        position: "top-center",
      });
    } catch (error) {
      console.log(error.message);

      toast.error(error.message, {
        position: "bottom-center",
      });
    }
  };

  return (
    <div className="contain">
      <div className="box5">
        <div className="head">
          <h1>Welcome Back!</h1>
          <p>
            Welcome back in your fishing world ! . Explore more Products and buy
            your needs .
          </p>
        </div>
      </div>
      <div className="box2">
        <div className="log">
          <h1>Login</h1>
          <div className="divider" />

          <form className="log1" onSubmit={handleSubmit}>
            <label>E-mail Address</label>
            <input type="email" value={email} onChange={(e) =>
              setEmail(e.target.value)
            }name="email" required/>

            <label>Password</label>
            <input value={password} onChange={(e) => 
              setPassword(e.target.value)
            } type="password" name="password" required/>

            <p>
              Did&apos;n Have an Account? <Link className="btn-hover" to={"/signup"}>Sign Up</Link>
            </p>

            <button type="submit" className="login">Login</button>
          </form>

          <div className="or">
            <Divider>
              <span className="orr">or</span>
            </Divider>
          </div>

          <form style={{ width: "100%" }}>
            <div className="log3">
              <button className="google">
                <img
                  src="public\image\2.png"
                  width={"20px"}
                  height={"20px"}
                  style={{ marginRight: "15px" }}
                  alt="logo"
                />
                Login With Google
              </button>
              <button className="face"><FacebookOutlined sx={{mr: 2, fontSize:'30px'}}/> Login With Facebook</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
