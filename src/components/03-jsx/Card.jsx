// note :
// - JSX kya hai javascript syntax xml
// - ya html or js ka mixture hai
// - jsx ki help se html mein js likh sakta hai using { } curly braces
//--------------------------------------
// learn this things ?
//  1-understanding curly braces {} in JSX
//  2-variable & operator in JSX
//  3-conditional rendering in JSX
//  4-object with JSX
//  5-array with JSX
//  6-js functions in JSX
//  7-js events in React
//
//--------------------------------------


function Card() {
    // js ka part hai.
    const name = "annie";
    let login = true;
    let carBrands = { 
        brand: 'toyota',
        color: 'red'
    }
    let fruits = ['apple','banana','lemon']
    function multipliction(n1 , n2){
        return n1 * n2
    }

  return (
    // return ka andar jsx hai
    // agr jsx mein js likhni hai tu {curly braces use kro}
    <div>
        <h1>name is {name}</h1>
        <p>sum any two digits {2 + 8}</p>
        <p>{login ? 'welcome' : 'please login'}</p>
        <p>{login && 'logged in'}</p>
        <p>{carBrands.color} {carBrands.brand} is running</p>
        <p>{fruits[0]}</p>
        {fruits.map((elem,index,arr)=>{
            return <p>
                {arr[index]}
                {/* {elem}
                {index} */}
            </p>
        })}
        <p>{multipliction(10,5)}</p>
        <button onClick={()=>(alert('clicked button'))}>press button</button>
        
    </div>
  );
}

export default Card;
