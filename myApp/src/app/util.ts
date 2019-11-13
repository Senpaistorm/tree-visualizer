// return a list of nodes that contains the top and left offsets
export const parse = (tree) => {
  if (!tree) { return; }
  let depth = 0;
  let bfs = [tree];
  let newQueue;
  let treeNodes = [];
  let cur;
  while (bfs.length > 0) {
    newQueue = [...bfs];
    // compute queue size and screen width
    const size = Math.pow(2, depth);
    const width = getWidth();
    bfs = [];
    let leftOffset = 0;
    while (newQueue.length > 0) {
      cur = newQueue.splice(0, 1)[0];
      if (cur) {
        treeNodes.push({
          value: cur.value,
          top: depth * 80,
          left: leftOffset * width / size + width / size / 2 - 20,
        });
        bfs.push(cur.left);
        bfs.push(cur.right);
      } else {
        bfs.push(null);
        bfs.push(null);
      }
      leftOffset += 1;
    }
    depth = depth + 1;
    if (bfs.filter(n => n).length === 0) {
      break;
    }
  }
  getWidth();
  return treeNodes;
};

export const getEdges = (tree) => {
  if (!tree) { return; }
  const bfs = [tree];
  const edgeList = [];
  let cur;

  while (bfs.length > 0) {
    cur = bfs.splice(0, 1)[0];
    if (cur.left) {
      bfs.push(cur.left);
      edgeList.push({
        from: cur,
        to: cur.left
      });
    }
    if (cur.right) {
      bfs.push(cur.right);
      edgeList.push({
        from: cur,
        to: cur.right
      });
    }
  }
  return edgeList;
};

const getWidth = () => {
  const rect = document.getElementById('tree-editor').getBoundingClientRect();
  return rect.width;
};
