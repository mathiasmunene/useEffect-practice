export default function Sibling({relative}){
  return(
    <>
    {!relative ? <h2>I have no relatives</h2> : <h2>My relative is {relative}</h2>}
    </>
  )
}
