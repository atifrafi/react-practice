// note:
// ya styled component react ki thirdparty library hai
// iski help se hum dynamic styling bhi kar sakta hai

import styled from 'styled-components'

const Heading = styled.h2`
    background-color: blue;
`
const Paragraph = styled.p`
    font-size: 42px;
    background-color: orange;
`
const Buttton = styled.button`
    padding: 16px;
    font-size: 18px;
    background-color: gray;
    color: white;
`

const TextCom = ()=>{
    
    return (
        <>
        <Heading>this is heading</Heading>
        <Paragraph>this is paragraph</Paragraph>
        <Buttton>click now</Buttton>
        </>
    )
}

export default TextCom;