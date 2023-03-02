import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../UserContext/UserContext";
const Login = () => {
  const [error, setError] = useState("");
  const { signIn,setLoading } = useContext(AuthContext);
  const nevigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.target;

    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        form.reset();
        setError("");
        setLoading(false);
        nevigate("/");
      })
      .catch((e) => setError(e.message));
  };
  return (
    <Form onSubmit={handleSubmit} action="">
      <div>
        <label htmlFor="">Email</label> <br />
        <input
          name="email"
          type="text"
          placeholder="Enter your email"
          required
        />
      </div>

      <div>
        <label htmlFor="">Password</label>
        <br />
        <input
          name="password"
          type="password"
          placeholder="Enter your email"
          required
        />
      </div>

      <Button className="btn btn-primary mt-4" type="submit">
        Login
      </Button>
      <p className="text-danger">{error}</p>
     
      
    </Form>
  );
};

export default Login;
