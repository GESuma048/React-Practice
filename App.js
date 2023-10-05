const heading1 = React.createElement("h1",{"id":"heading"}, "Hello World From React");
console.log(heading1);    

const parent = React.createElement(
    "div",{"id" : "parent"}, React.createElement("div",{"id":"child"},[
        React.createElement("h1", {}, "Its h1"),
        React.createElement("h2", {}, "Its h2") 
    ])
);

console.log(parent);






const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);