/* eslint-disable react/jsx-key */

import { useEffect, useState } from "react";
import map from "../helpers/map";
// @ts-ignore
import PF from "pathfinding";
import { Box, Text } from "@mantine/core";
const ParipicoMap = () => {
  const [pathFindingState, setPathFindingState] = useState([]);
  const [selectedGoal, setSelectedGoal] = useState([0, 0]);
  // useEffect(() => {
  //   const grid = new PF.Grid(map)
  //   const finder = new PF.AStarFinder()
  //   const path = finder.findPath(6, 29, selectedGoal[0], selectedGoal[1], grid)
  //   setPathFindingState(
  //     selectedGoal[0] === 0 && selectedGoal[1] === 0 ? [] : path
  //   )
  // }, [selectedGoal])
  return map.map((x, xIndex) => {
    return (
      <div style={{ width: 10000, display: "flex", backgroundColor: "white" }}>
        {x.map((y, yIndex) => {
          if (y === "" || y === 0) {
            return (
              <Box
                sx={(theme) => {
                  return {
                    width: 50,
                    height: 50,
                    backgroundColor: theme.colors.grape,
                  };
                }}
              ></Box>
            );
          }
          if (y !== 0) {
            return (
              <Box
                onClick={() => {
                  // bottom
                  if (map[xIndex + 1][yIndex] === 0) {
                    setSelectedGoal([yIndex, xIndex + 1]);
                    return;
                  }
                  // up
                  if (map[xIndex - 1][yIndex] === 0) {
                    setSelectedGoal([yIndex, xIndex - 1]);
                    return;
                  }
                  // right
                  if (map[xIndex][yIndex + 1] === 0) {
                    setSelectedGoal([yIndex + 1, xIndex]);
                    return;
                  }
                  // left
                  if (map[xIndex][yIndex - 1] === 0) {
                    setSelectedGoal([yIndex - 1, xIndex]);
                    return;
                  }
                }}
                // style={{ width: 50, height: 50, backgroundColor: 'pink', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                sx={(theme) => {
                  return {
                    width: 50,
                    height: 50,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  };
                }}
              >
                <Text>{y}</Text>
              </Box>
            );
          }
          if (
            pathFindingState.findIndex(
              (x) => x[0] === yIndex && x[1] === xIndex
            ) > -1
          ) {
            return (
              <div
                style={{
                  width: 50,
                  height: 50,
                  // border: '1px solid black',
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "green",
                }}
              ></div>
            );
          }
          // if (xIndex === 29 && yIndex === 6) {
          //   return <h1>entry</h1>
          // }
          return (
            <div
              onClick={() => {
                console.log(yIndex, xIndex);
              }}
              style={{
                width: 50,
                height: 50,
              }}
            ></div>
          );
        })}
      </div>
    );
  });
};

export default ParipicoMap;
