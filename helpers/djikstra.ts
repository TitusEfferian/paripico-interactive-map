type Coordinates = [number, number];

function getNeighbors(row: number, col: number, map: string[][]): Coordinates[] {
  const neighbors: Coordinates[] = [];

  if (row > 0) neighbors.push([row - 1, col]);
  if (row < map.length - 1) neighbors.push([row + 1, col]);
  if (col > 0) neighbors.push([row, col - 1]);
  if (col < map[0].length - 1) neighbors.push([row, col + 1]);

  return neighbors.filter(([r, c]) => map[r][c] === '');
}

function reconstructPath(cameFrom: { [key: string]: string }, start: Coordinates, end: Coordinates): Coordinates[] {
  const path: Coordinates[] = [end];
  let current = end;

  while (current.some((v, i) => v !== start[i])) {
    current = cameFrom[current.join(',')].split(',').map(Number) as Coordinates;
    path.unshift(current);
  }

  return path;
}

function findShortestPath(map: string[][], start: Coordinates, end: Coordinates): Coordinates[] | null {
  const distances = Array.from({ length: map.length }, () =>
    Array.from({ length: map[0].length }, () => Infinity)
  );
  distances[start[0]][start[1]] = 0;

  const visited = new Set();
  const unvisited = new Set(
    map.flatMap((row, r) => row.map((_, c) => [r, c])).map(JSON.stringify)
  );

  const cameFrom: { [key: string]: string } = {};

  let currentNode: Coordinates | null = start;

  while (currentNode) {
    const [row, col] = currentNode;

    for (const [r, c] of getNeighbors(row, col, map)) {
      if (!visited.has(JSON.stringify([r, c]))) {
        const tentativeDistance = distances[row][col] + 1;

        if (tentativeDistance < distances[r][c]) {
          distances[r][c] = tentativeDistance;
          cameFrom[[r, c].join(',')] = [row, col].join(',');
        }
      }
    }

    visited.add(JSON.stringify(currentNode));
    unvisited.delete(JSON.stringify(currentNode));

    const unvisitedArray: Coordinates[] = [...unvisited].map(JSON.parse);

    if (unvisitedArray.length === 0) {
      currentNode = null;
    } else {
      currentNode = unvisitedArray.reduce(
        (minNode, node) =>
          distances[node[0]][node[1]] < distances[minNode[0]][minNode[1]]
            ? node
            : minNode,
        unvisitedArray[0]
      );

      if (distances[currentNode[0]][currentNode[1]] === Infinity) {
        currentNode = null;
      }
    }
  }

  if (distances[end[0]][end[1]] === Infinity) {
    return null;
  }

  return reconstructPath(cameFrom, start, end);
}

// const start: Coordinates = [3, 0];
// const end: Coordinates = [3, 4];
// console.log(findShortestPath(map, start, end));
export default findShortestPath;
