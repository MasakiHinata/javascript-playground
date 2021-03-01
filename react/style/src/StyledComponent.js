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

const StyledItem = styled.div`
    width: 300px;
    height: 100px;
    background-color: green;
`

const StyledList = styled.div`    
    & ${StyledItem}:first-child {
        margin-top: 0px;
    }

    & ${StyledItem} {
        margin-top: 16px;
    }
`

export const StyledComponent = () => {
    return (<div>
        <StyledText fontSize={30}>Styled Component</StyledText>
        <ChildStyledText fontSize={30}>Styled Component</ChildStyledText>
        <StyledList>
            <StyledItem />
            <StyledItem />
            <StyledItem />
        </StyledList>
    </div>)
}
