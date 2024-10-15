import theme from "../../theme";

export default function Button({children,clickHandler,invert=false,styles=null,type=null}){
    const baseStyles = {
        fontFamily: 'inherit',
        backgroundColor: invert? theme.palette.secondary:theme.palette.primary,
        color: invert? theme.palette.text.accent1:theme.palette.text.accent2,
        borderRadius:'100px',
        border:'none',
        cursor:'pointer'
    };
    const appliedStyles = styles? {
        ...baseStyles,
        ...styles
    } : baseStyles

    return(
        <button onClick={clickHandler} style={appliedStyles} type={type? type:'button'}>
            {children}
        </button>
    );
}