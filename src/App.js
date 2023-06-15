function App(){
  return (
    <>
    <h1>props </h1>
    <MessageDemo name=" Vitthal" email=" hdhdh@" />
      <MessageDemo name=" shivam" email=" jjjjj@" />
      </>
  );
}

// function MessageDemo(props){
//   return (
//     <>
//     <h1>
//       hello{props.name }{props.email }
//     </h1>
//     </>
//   );
// }
function MessageDemo({name,email}){
  return(
    <>
    <h1>
      hello{email}{name}
    </h1>
    </>
  )
}
export default App;
