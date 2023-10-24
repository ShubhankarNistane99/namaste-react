/*

  Nested elements

  <div id = "parent">
      <div id = "child">
        <h1>I'm a h1 </h1>
        <h2>I'm a h2 </h1>
      </div>
  </div>
*/

const parent = React.createElement("div" , {id : "parent"} ,  
                  React.createElement("div", {id : "child"} , 
                  [
                      React.createElement("h1", {}, "I'm a h1 tag"), 
                      React.createElement("h2", {}, "I'm a h2 tag")
                ])
              );


console.log(parent)

const root = ReactDOM.createRoot(document.getElementById("root"));


root.render(parent);








// const heading = React.createElement("h1", {id : "heading", xyz : "abc"}, "Hello World by React"); 

// console.log(heading);    //this gives heading object and not an element

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);

