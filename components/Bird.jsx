import { View } from "react-native";

import React from "react";

function Bird(props) {
  const birdWidth = 50;
  return (
    <View
      style={{
        position: "absolute",
        width: birdWidth,
        height: 60,
        backgroundColor: "blue",
        left: props.birdLeft - birdWidth / 2,
        bottom: props.birdBottom,
      }}
    ></View>
  );
}

export default Bird;
