"use client";
import { Empty } from "keep-react";
import notFoundImg from "../../assets/404 image.png";

const NotFound = () => {
    return (
    <Empty
      title="Oops! You seem to be lost"
      content="Don't worry, you're not wrong, we are!"
      buttonText="Go To Home Page"
      redirectBtnSize="md"
      redirectUrl="/"
      className="bg-black text-white h-screen"
      image={
        <img
          src={notFoundImg}
          alt="404 not found"
        />
      }
    />
  );
}

export default NotFound;