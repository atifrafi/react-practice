const JsxPassAsProps = ({children, name='guest'}) => {
    return (
        <>
        <h2>jsx pass as a props</h2>
        <p>{name}</p>
        <div>
            {children}
        </div>
        </>
    )
}

export default JsxPassAsProps;