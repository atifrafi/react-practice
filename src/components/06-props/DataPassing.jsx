// note :
// props kya hai ?
// props ki help se hum data ko ek component se dosra component ma pass karta hai
// important point data ka flow parent component se child component hota hai
// props mein hum kisi bhi type ka data pass krsakta hai (array , object , let ,const etc.)

const DataPassing = ({name,age,hobbies}) => {
    const {cars , type} = hobbies;
    return (
        <>
        {/* <h1>hello {props.name}</h1>  */}
        <h1>name: {name}</h1>
        <h1>age: {age}</h1>
        {/* object destructuring */}
        <p>hobbies: {cars}</p>
        <p>hobbies: {type}</p>
        {/* <p>hobbies: {hobbies.cars}</p>
        <p>hobbies: {hobbies.type}</p> */}
        </>
    )
}

export default DataPassing;