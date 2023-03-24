const para = document.createElement("p");
const node = document.createTextNode("This is new.");

para.appendChild(node);


const h6 = document.createElement('h6');
h6.innerHTML = "<h1>This is H6 from javasciprt</h1>";
let root = document.getElementById('root');


const heading = React.createElement('h1',{'id':'Heading'},'this is awesome');

const reactRoot  = ReactDOM.createRoot(document.getElementById('root'))
reactRoot.render(heading)



root.appendChild(h6);




