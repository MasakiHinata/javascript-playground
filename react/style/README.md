## React Style

## CSS Module

```
XXX.js
XXX.module.js
```

```jsx
import React from 'react';
import styles from './CssModule.module.css'

export const CssModule = () => {
    return (<div className={styles.text}>
        CSS Module
    </div>)
}
```

## Inline CSS

```jsx
const style = ({ fontSize }) => ({
    color: 'blue',
    fontSize: fontSize
})

export const InlineCss = () => {
    return (<div style={style({ fontSize: 20 })}>Inline CSS</div>)
}
```

## StyledComponent

### Install

```bash
yarn add styled-components
```

```jsx
import styled from 'styled-components'

const StyledText = styled.div`
    color: pink;
		font-size: ${props => props.fontSize}px;
`

export const StyledComponent = () => {
    return (<div>
        <StyledText fontSize={30}>Styled Component</StyledText>
    </div>)
}
```

### 継承

```jsx
const ChildStyledText = styled(StyledText)`
    font-weight: bold;
`

export const StyledComponent = () => {
    return (<div>
        <ChildStyledText fontSize={30}>Styled Component</ChildStyledText>
    </div>)
}
```

### パラメータ

```jsx
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
```

```jsx
const StyledList = styled.div`    
    & ${StyledItem}:first-child {
        margin-top: 0px;
    }

    & ${StyledItem} {
        margin-top: 16px;
    }
`
```

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/62ef0423-2d2e-43d5-9741-373845b91240/_2021-03-01_12.16.14.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/62ef0423-2d2e-43d5-9741-373845b91240/_2021-03-01_12.16.14.png)