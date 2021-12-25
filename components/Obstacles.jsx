import React from "react";
import { View } from "react-native";

function Obstacles(props) {
  return (
    <>
      <View
        style={{
          position: "absolute",
          backgroundColor: props.color,
          width: props.obstaclesWidth,
          height: props.obstaclesHeight,
          left: props.obstaclesLeft,
          bottom: props.randomBottom + props.obstaclesHeight + props.gap,
        }}
      />
      <View
        style={{
          position: "absolute",
          backgroundColor: props.color,
          width: props.obstaclesWidth,
          height: props.obstaclesHeight,
          left: props.obstaclesLeft,
          bottom: props.randomBottom,
        }}
      />
    </>
  );
}

export default Obstacles;
