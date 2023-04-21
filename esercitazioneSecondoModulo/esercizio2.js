let arr_obj = [
  {
    maggiorenne: null,
    type: "boolean",
  },
  {
    nome: null,
    type: "string",
  },
  {
    cognome: "Rossi",
    type: "string",
  },
];

function default_value(arr_obj) {
  arr_obj.forEach(function (obj) {
    const objKeys = Object.keys(obj);
    objKeys.forEach(function (k) {
      if (obj[k] === null) {
        switch (obj.type) {
          case "boolean":
            obj[k] = false;
            break;
          case "string":
            obj[k] = "";
            break;
          case "number":
            obj[k] = 0;
            break;
          case "array":
            obj[k] = [];
            break;
          case "object":
            obj[k] = {};
            break;
        }
      }
    });
  });
  return arr_obj;
}

console.log(default_value(arr_obj));
