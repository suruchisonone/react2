function App()
{
  return(
    <>
    <h1>
      heloo list
      <ListDemo/>
    </h1>

    </>
  );
}
function ListDemo(){
  let data="hello suruchi";
  let list=["","","",""];

  let list1=[];
  for(let i=0;i<10;i++){
    list1.push();
  }
  return(
    <>
    <h1>
      {data}
    </h1>
    {list.map((item)=>(<div><h1>hello</h1></div>))}
    
    </>
  )
}

export default App;