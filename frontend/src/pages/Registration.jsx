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
import animationData from "../assets/lottie-registration.json";

function Registration() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const navigate = useNavigate();
  const [firstname, setFirstname] = useState();
  const [lastname, setLastname] = useState();
  const [email, setEmail] = useState();
  const [city, setCity] = useState();
  const [password, setPassword] = useState();
  const sendUser = (e) => {
    e.preventDefault();
    /* This is a header for the fetch */
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    /* It's an object that will be sent in the body of request */
    const bodyRaw = JSON.stringify({
      firstname,
      lastname,
      email,
      city,
      password,
    });

    /* fetch to suscribe at makesense */
    fetch(`http://localhost:5000/api/users`, {
      method: "POST",
      headers: myHeaders,
      body: bodyRaw,
      redirect: "follow",
    })
      .then((response) => {
        if (response.ok) {
          alert("Votre inscription à été prise en compte");
          navigate("/");
        }
      })
      .catch((error) => {
        console.warn(error); /* 
        alert("Vous êtes déjà inscrit");
        navigate("/"); */
      });
  };

  return (
    <div>
      {" "}
      <Lottie options={defaultOptions} height={300} width={300} />
      <div className="flex justify-center items-center">
        <Card className="w-96">
          <CardHeader
            variant="gradient"
            color="indigo"
            className="mb-4 grid h-28 place-items-center"
          >
            <Typography variant="h3" color="white">
              Inscris toi !
            </Typography>
          </CardHeader>
          <form onSubmit={sendUser}>
            <CardBody className="flex flex-col gap-4">
              <Input
                onChange={(e) => setFirstname(e.target.value)}
                label="Prénom"
                size="lg"
              />
              <Input
                onChange={(e) => setLastname(e.target.value)}
                label="Nom"
                size="lg"
              />
              <Input
                onChange={(e) => setCity(e.target.value)}
                label="Ville"
                size="lg"
              />
              <Input
                onChange={(e) => setEmail(e.target.value)}
                label="Email"
                size="lg"
              />
              <Input
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                label="Mot de passe"
                size="lg"
              />
              <div className="-ml-2.5">
                <Checkbox label="Remember Me" />
              </div>
            </CardBody>
            <CardFooter className="pt-0">
              <Button color="indigo" type="submit" variant="gradient" fullWidth>
                S'inscrire
              </Button>
            </CardFooter>
          </form>
        </Card>
      </div>
    </div>
  );
}

export default Registration;
