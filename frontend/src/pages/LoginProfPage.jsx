import Lottie from "react-lottie";
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
import { useNavigate } from "react-router-dom";
import animationData from "../assets/lottie-log-prof.json";
import { useCurrentUserContext } from "../Context/userContext";

const backEnd = import.meta.env.VITE_BACKEND_URL;

function LoginProfPage() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const { setProfessor, setToken } = useCurrentUserContext();
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
      fetch(`${backEnd}/api/login-professor`, requestOptions)
        .then((response) => response.json())
        .then((result) => {
          setProfessor(result.professor);
          setToken(result.token);
          navigate("/home");
        })

        .catch(console.error);
    } else {
      setErrorMessage("Please specify email and password");
    }
  };
  return (
    <div className="">
      <Lottie options={defaultOptions} height={400} width={400} />
      <div className=" flex justify-center items-center mt-20">
        <Card className="w-96">
          <CardHeader
            variant="gradient"
            color="indigo"
            className="mb-4 grid h-28 place-items-center"
          >
            <Typography className="text-center" variant="h3" color="white">
              Professeur, connectez-vous !
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
                label="Mot de passe"
                size="lg"
                id="password"
              />
              <div className="-ml-2.5">
                <Checkbox label="Remember Me" />
              </div>
            </CardBody>
            <Button color="indigo" type="submit" variant="gradient" fullWidth>
              Me Connecter
            </Button>
          </form>
          <CardFooter className="pt-0" />
        </Card>
        <div>{errorMessage}</div>
      </div>
    </div>
  );
}

export default LoginProfPage;
