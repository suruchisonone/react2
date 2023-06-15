import {useRef,useState} from "react";


function App(){
  return (
    <><h1>stateful</h1>
    <ListDemo/>
    </>
  );
}

function ListDemo(){
  let inputref=useRef();
  let [list,setList]=useState(["delhi"]);

  let addlist=()=>{
    // let inputref=document.querySelector("#id1");
    let inputvalue=inputref.current.value;
    let newlist=[...list,inputvalue];
    setList(newlist);
    inputref.current.value="";
  };

  return(
    <>
    <input type="text" id="id1" ref={inputref} placeholder="enter the value"/>
    <input type="button" value="add new list" onClick={addlist}/>

    {/* {list.map((item)=>(<h1>{item}</h1>))} */}
    {list.map((item) => (
        <div>
          <h1>{item}</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore,
            sit laborum quia non hic doloribus id quisquam consequuntur quis
            iusto quod, assumenda vitae, molestias ipsa ex labore quaerat
            ducimus accusamus.
          </p>
          <div>
            <input type="button" value="&#128077;" />
            <input type="button" value="&#128078;" />
          </div>
        </div>
      ))}
    </>
  );
}



export default App;

