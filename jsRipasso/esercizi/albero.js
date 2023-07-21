let root = {
  v: 1,
  l: {
    v: 2,
    l: null,
    r: {
      v: 5,
      l: null,
      r: null,
    },
  },
  r: {
    v: 6,
    l: {
      v: 4,
      l: {
        v: 8,
        l: null,
        r: null,
      },
      r: null,
    },
    r: null,
  },
};

function sumTreeValues(node) {
  if (node === null) {
    return 0;
  }

  const sumLeft = sumTreeValues(node.l);
//   console.log(node.l, "l");
  const sumRight = sumTreeValues(node.r);

  return node.v + sumLeft + sumRight;
}

const result = sumTreeValues(root);
console.log(result);
