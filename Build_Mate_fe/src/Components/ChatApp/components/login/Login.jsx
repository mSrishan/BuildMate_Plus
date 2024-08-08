import React, { useState } from "react";
import { toast } from "react-toastify";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../lib/firebase";
import { doc, setDoc } from "firebase/firestore";
import upload from "../../lib/upload";
import "./login.css";
import avatarImage from '../../public/avatar.png';

const Login = () => {
  const [avatar, setAvatar] = useState({ file: null, url: "" });
  const [loading, setLoading] = useState(false);

  const handleAvatar = (e) => {
    if (e.target.files[0]) {
      setAvatar({
        file: e.target.files[0],
        url: URL.createObjectURL(e.target.files[0]),
      });
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
  
    const formData = new FormData(e.target);
    const { username, email, password } = Object.fromEntries(formData);
  
    if (!username || !email || !password) {
      toast.error("All fields are required.");
      setLoading(false);
      return;
    }
  
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      const imgUrl = avatar.file ? await upload(avatar.file, 'profile_images') : "";
  
      await setDoc(doc(db, "users", res.user.uid), {
        username,
        email,
        avatar: imgUrl,
        id: res.user.uid,
        blocked: [],
      });
  
      await setDoc(doc(db, "userchats", res.user.uid), {
        chats: [],
      });
  
      toast.success("Account created!");
    } catch (err) {
      console.log(err);
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };
  

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target);
    const { email, password } = Object.fromEntries(formData);

    if (!email || !password) {
      toast.error("All fields are required.");
      setLoading(false);
      return;
    }

    try {
      await signInWithEmailAndPassword(auth, email, password);
      toast.success("Logged in successfully!");
    } catch (err) {
      console.log(err);
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="loginChat">
      <div className="item">
        <h2>Welcome Back</h2>
        <form onSubmit={handleLogin}>
          <input type="email" placeholder="Email" name="email" aria-label="Email" required />
          <input type="password" placeholder="Password" name="password" aria-label="Password" required />
          <button type="submit" disabled={loading}>
            {loading ? "Loading" : "Sign In"}
          </button>
        </form>
      </div>
      <div className="separator"></div>
      <div className="item">
        <h2>Create an Account</h2>
        <form onSubmit={handleRegister}>
          <label htmlFor="file">
            <img src={avatar.url || avatarImage} alt="Upload Avatar" />
            Upload an Image
          </label>
          <input type="file" id="file" style={{ display: "none" }} onChange={handleAvatar} aria-label="Upload Avatar" />
          <input type="text" placeholder="Username" name="username" aria-label="Username" required />
          <input type="email" placeholder="Email" name="email" aria-label="Email" required />
          <input type="password" placeholder="Password" name="password" aria-label="Password" required />
          <button type="submit" disabled={loading}>
            {loading ? "Loading" : "Sign Up"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
