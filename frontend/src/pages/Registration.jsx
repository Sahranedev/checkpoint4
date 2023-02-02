import React from "react";
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

function Registration() {
  return (
    <div className="h-[100vh] w-[100vw] flex justify-center items-center">
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
        <CardBody className="flex flex-col gap-4">
          <Input label="Nom" size="lg" />
          <Input label="Prénom" size="lg" />
          <Input label="Email" size="lg" />
          <Input type="password" label="Mot de passe" size="lg" />
          <div className="-ml-2.5">
            <Checkbox label="Remember Me" />
          </div>
        </CardBody>
        <CardFooter className="pt-0">
          <Button variant="gradient" fullWidth>
            Sign In
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}

export default Registration;
