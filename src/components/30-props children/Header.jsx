const Header = (props)=>{
    return (
        <>
            <h1>Header</h1>
            {/* normal props */}
            <h2>car name is {props.name}</h2>
            {/* children props */}
            {props.children}
        </>
    )
}

export default Header;