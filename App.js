/*
<div id="parent">
  <div id="child">
    <h1></h1>
  </div>
</div>
 */ 

/*const heading = React.createElement(
    "h1",
    {id:"heading"},
    "Hello World, From React!"
)
console.log(heading);//object*/
const parent = React.createElement('div',
    {id : "parent"},
    [React.createElement('div',
        {id :"child"},
        [React.createElement('h1',{}, "I'am h1 tag"),React.createElement('h2',{},"I'm h2 tag")]
    ),
    React.createElement('div',
        {id :"child2"},
        [React.createElement('h1',{}, "I'am h1 tag"),React.createElement('h2',{},"I'm h2 tag")]
    )]
)
console.log(parent);//object

const root = ReactDOM.createRoot(document.getElementById("root"))
//root.render(heading)
root.render(parent)


//This heading is an object here, it's not a html tag
//The job of root.render function is ,to take this object,create that H1 tah that browser understands and put that inside the root element
//when u did React.createElement(), it creates an object, js object, which is a React element.