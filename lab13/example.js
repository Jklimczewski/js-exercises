// console.log("test");

// Promise

const isPositive = (a) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof a === 'number') {
        if (a > 0) {
          resolve(true);
        } else {
          resolve(false);
        }
      } else {
        reject("Nie podano liczby");
      }
    }, 2000);
  });
}

// isPositive('ghj').then((res) => {
//   console.log(res);
// }).catch((err) => {
//   console.log(err);
// });

// Callbacks

// const func1 = (x, cb) => {
//     setTimeout(() => {
//       console.log("Funkcja 1");
//       // inkrementujemy x
//       cb(x + 1);
//     }, 4000);
// }

// const func2 = (x, cb) => {
//     setTimeout(() => {
//       console.log("funkcja 2");
//        // inkrementujemy x
//        cb(x + 1);
//     }, 2000);
// }

// const cb = (data) => {
//   console.log("Rezultat", data);
// }

// func1(1, (data) => {
//   console.log("Wykonanie funkcji 1", data);
//   func2(data, (data) => {
//     console.log("Wykonanie funkcji 2", data);
//     cb(data);
//   });
// });

// Promise all

const func1 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(2);
    }, 4000);
  });
}

const func2 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(true);
    }, 2000);
  });
}

const func3 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("tmp");
    }, 2000);
  });
}

Promise.all([func1(), func2(), func3()]).then((data) => {
  console.log(data);
});

