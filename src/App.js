import {useState} from "react";


function App(){
  return (
    <><h1>helllo</h1>
    <ListDemo/>
    </>
  );
}
function ListDemo(){

  let [list,setlist]=useState(["delhi"]);

  let addItemAction = () => {
    // why didn u use push method, push method update the same object
    // setter method requires immutable object.
    // We have to pass new list.
    let newList = [...list, "pune","banglore"];
    console.log(newList);
    setlist(newList);
};
return (
  <> 
  <input type="button" value="add list" onClick={addItemAction}/>
  {list.map((item)=>(<h1>hello {item}</h1>))}
  </>
);

}
export default App;

