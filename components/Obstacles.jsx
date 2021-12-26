import React from "react";
import { Image } from "react-native";

function Obstacles(props) {
  return (
    <>
      <Image
        style={{
          position: "absolute",
          width: props.obstaclesWidth,
          height: props.obstaclesHeight,
          left: props.obstaclesLeft,
          bottom: props.randomBottom + props.obstaclesHeight + props.gap,
        }}
        source={require("../imges/obstacleTop.png")}
      />
      <Image
        style={{
          position: "absolute",
          width: props.obstaclesWidth,
          height: props.obstaclesHeight,
          left: props.obstaclesLeft,
          bottom: props.randomBottom,
        }}
        source={require("../imges/obstacle.png")}
      />
    </>
  );
}

export default Obstacles;
