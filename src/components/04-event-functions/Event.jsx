const Event = () => {
    // js
    const showAlert = ()=>{
        alert('hello men')
    }
    return (
        <div>
            <h1>heading</h1>
            <img src="https://images.unsplash.com/photo-1782902260162-ae2e48ecfc24?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" srcset="" />
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum, voluptatibus?</p>
            <button onClick={showAlert}>button</button>
        </div>
    )
}

export default Event;