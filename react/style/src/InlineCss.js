const style = ({ fontSize }) => ({
    color: 'blue',
    fontSize: fontSize
})

export const InlineCss = () => {
    return (<div style={style({ fontSize: 20 })}>Inline CSS</div>)
}
