import { Image } from "react-native";

import React from "react";

function Bird(props) {
  const birdWidth = 90;
  return (
    <Image
      style={{
        position: "absolute",
        width: birdWidth,
        height: 60,
        left: props.birdLeft - birdWidth / 2,
        bottom: props.birdBottom,
      }}
      source={require("../imges/bird.png")}
    />
  );
}

export default Bird;
