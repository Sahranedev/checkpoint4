import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Tooltip,
} from "@material-tailwind/react";
import { useCurrentUserContext } from "../Context/userContext";
import twitter from "../assets/miniature-twitter.jpg";

function ProfileCard() {
  const { professor } = useCurrentUserContext();

  return (
    <Card className="w-96 ml-4 mt-20 md:w-1/2 ">
      <CardHeader floated={false} className="h-80 md:h-auto">
        <img src={professor.avatar} alt="" />
      </CardHeader>
      <CardBody className="text-center">
        <Typography variant="h4" color="blue-gray" className="mb-2" />
        {professor.firstname} {professor.lastname}
        <Typography color="blue" className="font-medium" textGradient>
          Grand Maître JS
        </Typography>
      </CardBody>
      <CardFooter className="flex justify-center gap-7 pt-2">
        <Tooltip content="Like">
          <Typography
            as="a"
            href="#facebook"
            variant="lead"
            color="blue"
            textGradient
          >
            <i className="fab fa-facebook" />
          </Typography>
        </Tooltip>
        <Tooltip content="Follow">
          <Typography
            src={twitter}
            variant="lead"
            color="light-blue"
            textGradient
          />
        </Tooltip>
        <Tooltip content="Follow">
          <Typography
            as="a"
            href="#instagram"
            variant="lead"
            color="purple"
            textGradient
          >
            <i className="fab fa-instagram" />
          </Typography>
        </Tooltip>
      </CardFooter>
    </Card>
  );
}

export default ProfileCard;
