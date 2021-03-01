import styled from 'styled-components'

const StyledText = styled.div`
    color: pink;
    font-size: ${props => props.fontSize}px;
    &:hover {
        cursor: pointer;
    }
    @media(max-width: 1000px){
        color: black;
    }
`

const ChildStyledText = styled(StyledText)`
    font-weight: bold;
`

export const StyledComponent = () => {
    return (<div>
        <StyledText fontSize={30}>Styled Component</StyledText>
        <ChildStyledText fontSize={30}>Styled Component</ChildStyledText>
    </div>)
}