// @ts-nocheck
import { Divider } from "@mui/material";

import "./SignUp.css";
import { FacebookOutlined } from "@mui/icons-material";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { auth, db } from "../../firebase/firebase";
import { setDoc, doc } from "firebase/firestore";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");

  const navigate = useNavigate();
  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      const user = auth.currentUser;
      // console.log(user);
      if (user) {
        await setDoc(doc(db, "Users", user.uid), {
          email: user.email,
          firstName: fname,
          lastName: lname,
        });
      }
      // console.log("User Registered Successfully!!");
      toast.success("User Registered Successfully!!", {
        position: "top-center",
      });
      navigate("/login");
    } catch (error) {
      // console.log(error.message);
      toast.error(error.message, {
        position: "bottom-center",
      });
    }
  };

  return (
    <div className="contain">
      <div className="box1">
        <div className="head">
          <h1>Create Your Account</h1>
          <p>Join us for more products and, buy what you want from us !</p>
        </div>
      </div>
      <div className="box2">
        <div className="log">
          <h1>Sign Up</h1>
          <div className="divider" />
          <form className="log1" onSubmit={handleRegister}>
            <div className="name">
              <div className="name1">
                <label>First Name</label>
                <input
                  type="text"
                  onChange={(e) => setFname(e.target.value)}
                  name="fname"
                  required
                />
              </div>
              <div className="name1">
                <label>Last Name</label>
                <input
                  type="text"
                  onChange={(e) => setLname(e.target.value)}
                  name="lname"
                  required
                />
              </div>
            </div>

            <label form="email">E-mail Address</label>
            <input
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              name="email"
              required
            />

            <label form="password">Password</label>
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              name="password"
              required
            />

            <p>
              Do You Have an Account?{" "}
              <Link className="btn-hover" to={"/login"}>
                Login
              </Link>
            </p>

            <button type="submit" className="sign">
              Sign Up
            </button>
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
              <button className="face">
                <FacebookOutlined sx={{ mr: 2, fontSize: "30px" }} /> Login With
                Facebook
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
