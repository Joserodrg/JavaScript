function criba(n) {
  let primos = [];

  for (let i = 2; i <= n; i++) {
    primos[i] = true;
  }

  for (let i = 2; i * i <= n; i++) {
    if (primos[i]) {
      for (let x = i * i; x <= n; x += i) {
        primos[x] = false;
      }
    }
  }

  let res = [];
  for (let i = 2; i <= n; i++) {
    if (primos[i]) res.push(i);
  }

  return res;
}

//-----------------------------------------------------//

function descFactoresPrimos(a) {
  const primos = criba(a);

  const primosNum1 = [];

  let numA = a;
  for (let i = 0; i < primos.length; i++) {
    const primo = primos[i];

    while (numA % primo === 0) {
      primosNum1.push(primo);
      numA = numA / primo;
    }

    if (numA === 1) {
      break;
    }
  }

  return primosNum1;
}

// console.log(descFactoresPrimos(84));
// console.log(descFactoresPrimos(90));

function group(arr) {
  obj = {};

  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (obj[element]) {
      obj[element].push(element);
    } else {
      obj[element] = [element];
    }
  }
  return obj;
}

function flatten(arr) {
  // TODO
}

function multiply(arr) {
  //
}

//-----------------------------------------------------//

function mcm(n1, n2) {
  const n1Primos = group(descFactoresPrimos(n1));
  const n2Primos = group(descFactoresPrimos(n2));
  console.log(n1Primos);
  console.log(n2Primos);

  const resMcm = {};

  const n1PrimosKeys = Object.keys(n1Primos);
  const n2PrimosKeys = Object.keys(n2Primos);

  for (let i = 0; i < n1PrimosKeys.length; i++) {
    const currentKey = n1PrimosKeys[i];
    const currentValue = n1Primos[currentKey];
    resMcm[currentKey] = [];

    for (let j = 0; j < currentValue.length; j++) {
      resMcm[currentKey].push(currentValue[j]);
    }
  }

  for (let i = 0; i < n2PrimosKeys.length; i++) {
    const currentKey = n2PrimosKeys[i];
    const currentValue = n2Primos[currentKey];

    if (!resMcm[currentKey]) {
      resMcm[currentKey] = [];
    }

    for (let j = 0; j < currentValue.length; j++) {
      if (currentValue.length > resMcm[currentKey].length) {
        resMcm[currentKey] = currentValue;
      }
    }
  }

  // get array of resMcm values
  // input: { '2': [ 2, 2 ], '3': [ 3, 3 ], '5': [ 5, 5 ], '7': [ 7 ] }
  // output: [[2, 2], [3, 3], [5, 5], [7]]



  // return multiply(flatten(output))

  return resMcm;
}

console.log(mcm(84, 450));
