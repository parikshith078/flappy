import React, { useState, useEffect } from "react";
import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
} from "react-native";
import { backgroundColor } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";
import Bird from "./components/Bird";
import Obstacles from "./components/Obstacles";

export default function App() {
  const screenWidth = Dimensions.get("screen").width;
  const screenheight = Dimensions.get("screen").height;
  const birdLeft = screenWidth / 2;
  const [birdBottom, setBirdBottom] = useState(screenheight / 2);
  const [obstaclesLeft, setObstaclesLeft] = useState(screenWidth);
  const [obstaclesLeft2, setObstaclesLeft2] = useState(
    screenWidth + screenWidth / 2 + 30
  );
  const [randomBottom, setRandomBottom] = useState(0);
  const [randomBottom2, setRandomBottom2] = useState(0);
  const obstaclesWidth = 90;
  const obstaclesHeight = 350;
  const gap = 200;
  const gravity = 3;
  let gameTimerId;
  let obstaclesLeftTimerId;
  let obstaclesLeft2TimerId;
  const [isGameOver, setIsGameOver] = useState(false);
  const [socre, setScore] = useState(0);

  // start bird falling
  useEffect(() => {
    if (birdBottom > 0) {
      gameTimerId = setInterval(() => {
        setBirdBottom((birdBottom) => birdBottom - gravity);
      }, 30);
    }
    return () => {
      clearInterval(gameTimerId);
    };
  }, [birdBottom]);

  // start first obstacles
  useEffect(() => {
    if (obstaclesLeft > -obstaclesWidth) {
      obstaclesLeftTimerId = setInterval(() => {
        setObstaclesLeft((obstaclesLeft) => obstaclesLeft - 5);
      }, 30);
      return () => {
        clearInterval(obstaclesLeftTimerId);
      };
    } else {
      setObstaclesLeft(screenWidth);
      setRandomBottom(-Math.random() * 100 + 10);
      setScore((socre) => socre + 1);
    }
  }, [obstaclesLeft]);

  // start 2nd obstacles
  useEffect(() => {
    if (obstaclesLeft2 > -obstaclesWidth) {
      obstaclesLeft2TimerId = setInterval(() => {
        setObstaclesLeft2((obstaclesLeft2) => obstaclesLeft2 - 5);
      }, 30);
      return () => {
        clearInterval(obstaclesLeft2TimerId);
      };
    } else {
      setRandomBottom2(-Math.random() * 100 + 10);
      setObstaclesLeft2(screenWidth);
      setScore((socre) => socre + 1);
    }
  }, [obstaclesLeft2]);

  // check for collisions
  useEffect(() => {
    if (
      ((birdBottom < randomBottom + obstaclesHeight + 30 ||
        birdBottom > randomBottom + obstaclesHeight + gap - 30) &&
        obstaclesLeft > screenWidth / 2 - 30 &&
        obstaclesLeft < screenWidth / 2 + 30) ||
      ((birdBottom < randomBottom2 + obstaclesHeight + 5 ||
        birdBottom > randomBottom2 + obstaclesHeight + gap - 5) &&
        obstaclesLeft2 > screenWidth / 2 - 30 &&
        obstaclesLeft2 < screenWidth / 2 + 30)
    ) {
      console.log("game over");
      gameOver();
    }
  });

  function gameOver() {
    clearInterval(gameTimerId);
    clearInterval(obstaclesLeftTimerId);
    clearInterval(obstaclesLeft2TimerId);
    setIsGameOver(true);
  }

  function jump() {
    if (!isGameOver && birdBottom < screenheight) {
      setBirdBottom((birdBottom) => birdBottom + 50);
    }
  }

  return (
    <TouchableWithoutFeedback onPress={jump}>
      <View style={styles.container}>
        <Text>{socre}</Text>
        <Bird birdBottom={birdBottom} birdLeft={birdLeft} />
        <Obstacles
          obstaclesWidth={obstaclesWidth}
          obstaclesHeight={obstaclesHeight}
          obstaclesLeft={obstaclesLeft}
          randomBottom={randomBottom}
          gap={gap}
          color={"green"}
        />
        <Obstacles
          obstaclesWidth={obstaclesWidth}
          randomBottom={randomBottom2}
          obstaclesHeight={obstaclesHeight}
          obstaclesLeft={obstaclesLeft2}
          gap={gap}
          color={"red"}
        />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#3DB2FF",
    alignItems: "center",
    justifyContent: "center",
  },
});
