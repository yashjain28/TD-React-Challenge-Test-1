import React, { Component, Fragment } from 'react';
import './App.css';
import './grouper.js';
function shuffle(array) {
  var m = array.length;
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
  var arr = data.replace(/[\r\n]+/g, "\n").split("\n");

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

class App extends Component {
  
  constructor() {
    super();
    this.state = {
      text: `
      output shown here
      `
    };
    this.pug = '';
  }

  

  onChange(event) {
    const transformedData = createGroups(event.target.value); 
    this.pug = event.target.value
    
    this.setState({
      [event.target.name]: transformedData,
    });
  }
  
  render() {
    const  pugged  = this.pug;
    const { text } = this.state;
    return (
      <Fragment>
        <div className="work-area">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <h2 className="editable">Input (editable field)</h2>
                <textarea rows="30" cols="60" onChange={this.onChange.bind(this)} name="text" value={pugged} />
              </div>
              <div className="col-md-6">
                <h2 className="non-editable">Output</h2>
                <textarea rows="30" cols="60" readOnly value={text} />
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default App;
