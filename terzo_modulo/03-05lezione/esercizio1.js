function and(...booleans) {
    for (let i = 0; i < booleans.length; i++) {
      if (!booleans[i]) {
        return false;
      }
    }
    return true;
  }

  console.log(and(true, true, true, false))