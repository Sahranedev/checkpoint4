import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Checkbox,
  Button,
} from "@material-tailwind/react";
import { NavLink, useNavigate } from "react-router-dom";
import { useCurrentUserContext } from "../Context/userContext";

const backEnd = import.meta.env.VITE_BACKEND_URL;

function LoginPage() {
  const { setUser, setToken } = useCurrentUserContext();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const body = JSON.stringify({
      email,
      password,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body,
    };

    if (email && password) {
      // on appelle le back
      fetch(`${backEnd}/api/login`, requestOptions)
        .then((response) => response.json())
        .then((result) => {
          setUser(result.user);
          setToken(result.token);
          navigate("/home");
        })

        .catch(console.error);
    } else {
      setErrorMessage("Please specify email and password");
    }
  };
  return (
    <div className="h-[100vh] flex justify-center items-center">
      <Card className="w-96">
        <CardHeader
          variant="gradient"
          color="indigo"
          className="mb-4 grid h-28 place-items-center"
        >
          <Typography variant="h3" color="white">
            Identifie toi
          </Typography>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardBody className="flex flex-col gap-4">
            <Input
              onChange={(e) => setEmail(e.target.value)}
              label="Email"
              size="lg"
              id="email"
            />
            <Input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              label="Password"
              size="lg"
              id="password"
            />
            <div className="-ml-2.5">
              <Checkbox label="Remember Me" />
            </div>
          </CardBody>
          <Button type="submit" variant="gradient" fullWidth>
            Sign In
          </Button>
        </form>
        <CardFooter className="pt-0">
          <Typography variant="small" className="mt-6 flex justify-center">
            Don't have an account?
            <NavLink to="/registration">
              <Typography
                as="a"
                href="#signup"
                variant="small"
                color="blue"
                className="ml-1 font-bold"
              >
                Sign up
              </Typography>{" "}
            </NavLink>
            <NavLink to="/login-professeur">
              <Typography
                as="a"
                href="/"
                variant="small"
                color="purple"
                className="ml-1 font-bold"
              >
                Professeur
              </Typography>{" "}
            </NavLink>
          </Typography>
        </CardFooter>
      </Card>
      <div>{errorMessage}</div>
    </div>
  );
}

export default LoginPage;
