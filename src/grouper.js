// read the file
// convert names into an array
// shuffle the array
// iterate through the shuffled array

function shuffle(array) {
  const m = array.length;
  var t, i;

  // While there remain elements to shuffle…
  while (m) {
    // Pick a remaining element…
    i = Math.floor(Math.random() * m--);

    // And swap it with the current element.
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }

  return array;
}

function createGroups(data) {
  var arr = data
    .replace(/[\r\n]+/g, "\n")
    .split("\n");

  for (const i in arr) {
    console.log(arr[i]);
  }
  shuffle(arr);
  console.log(arr);
  let result = {};
  let size = arr.length;
  for (let j = 0, k = 1; j < size; j++, k++) {
    if (!result[arr[j]]) {
      result[arr[j]] = {};
    }
    result[arr[j]]["reviews"] = [];

    const t = [arr[k % size], arr[(k + 1) % size], arr[(k + 2) % size]];
    result[arr[j]]["reviews"] = result[arr[j]]["reviews"].concat(t);
    for (let i = 0; i < 3; i++) {
      if (!result[arr[(k + i) % size]]) {
        result[arr[(k + i) % size]] = {};
      }
      if (!result[arr[(k + i) % size]]["reviewed_by"]) {
        result[arr[(k + i) % size]]["reviewed_by"] = [];
      }
      result[arr[(k + i) % size]]["reviewed_by"].push(arr[j]);
    }
  }

  console.log(result);
  let counter = 1;
  var finalArr = [];
  Object.keys(result)
    .sort()
    .forEach(function(key) {
      finalArr.push(counter + ". " + key + " reviews: ");
      counter++;
      //finalArr.push("--------\n");
      result[key]["reviews"].forEach((element) =>
        finalArr.push("| " + element + " |")
      );
      finalArr.push("\nLooks for reviews from : ");
      //finalArr.push("--------\n");
      result[key]["reviewed_by"].forEach((element) =>
        finalArr.push("| " + element + " |")
      );

      finalArr.push("\n-- -- -- -- -- -- -- -- -- --\n\n");
    });
  console.log(finalArr);
  return finalArr.join("");
}

global.createGroups = createGroups;