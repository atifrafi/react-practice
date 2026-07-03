// note : 
// default props kya hai?
// agr parent component se child component ko koi bhi props pass nhi kia ho
// lakin child component mein kuch na kuch show karna parha tu default props ka use krta hai
// ya default props ki example hai name='xyz'
// agr parent component se props nhi mila child component ko tu ya xyz wala props chala ga
// agr parent component se props mil jaye tu ya default props overwrite hojaye ga.

const DefaultProps = ({name='xyz'}) => {
    return (
        <>
        <h1>Default Props</h1>
        <h3>name is {name}</h3>
        </>
    )
}

export default DefaultProps;

