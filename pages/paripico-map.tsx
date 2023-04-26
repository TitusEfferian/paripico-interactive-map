/* eslint-disable react/jsx-key */

import { useEffect, useState } from "react";
import map, { algorithmMap } from "../helpers/map";
// @ts-ignore
import PF from "pathfinding";
import { Box, Text } from "@mantine/core";
import Head from "next/head";
const WIDTH = 50;
const HEIGHT = 50;
const ParipicoMap = () => {
  const [pathFindingState, setPathFindingState] = useState([]);
  const [selectedGoal, setSelectedGoal] = useState([0, 0]);
  useEffect(() => {
    const grid = new PF.Grid(algorithmMap);
    const finder = new PF.DijkstraFinder();
    const path = finder.findPath(1, 10, selectedGoal[0], selectedGoal[1], grid);
    setPathFindingState(
      selectedGoal[0] === 0 && selectedGoal[1] === 0 ? [] : path
    );
  }, [selectedGoal]);
  return map.map((x, xIndex) => {
    return (
      <div style={{ width: 2550, display: "flex", backgroundColor: "white" }}>
        <Head>
          <meta name="viewport" content="minimum-scale=0.5, initial-scale=0.5, width=device-width" />
      </Head>
        {x.map((y, yIndex) => {
          if (
            pathFindingState.findIndex(
              (x) => x[0] === yIndex && x[1] === xIndex
            ) > -1
          ) {
            return (
              <Box sx={theme=>{
                return{
                  width: WIDTH,
                  height: HEIGHT,
                  backgroundColor:theme.colors.green
                }
              }}></Box>
            );
          }
          if (y === "" || y==='BLOCK') {
            return (
              <Box
                sx={(theme) => {
                  return {
                    width: WIDTH,
                    height: HEIGHT,
                    backgroundColor: theme.colors.grape,
                  };
                }}
              ></Box>
            );
          }
          if (y !== "") {
            return (
              <Box
                onClick={() => {
                  // left
                  if (map[xIndex][yIndex - 1] === "") {
                    setSelectedGoal([yIndex - 1, xIndex]);
                    return;
                  }
                  // up
                  if (map[xIndex - 1][yIndex] === "") {
                    setSelectedGoal([yIndex, xIndex - 1]);
                    return;
                  }

                  // right
                  if (map[xIndex][yIndex + 1] === "") {
                    setSelectedGoal([yIndex + 1, xIndex]);
                    return;
                  }
                  // bottom
                  if (map[xIndex + 1][yIndex] === "") {
                    setSelectedGoal([yIndex, xIndex + 1]);
                    return;
                  }
                }}
                sx={(theme) => {
                  return {
                    width: WIDTH,
                    height: HEIGHT,
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
          return (
            <div
              onClick={() => {
                console.log(yIndex, xIndex);
              }}
              style={{
                width: WIDTH,
                height: HEIGHT,
              }}
            ></div>
          );
        })}
      </div>
    );
  });
};

export default ParipicoMap;
