import theme from "../../theme";

export default function Button({children,clickHandler,invert=false,styles=null}){
    const baseStyles = {
        fontFamily: 'inherit',
        backgroundColor: invert? theme.palette.secondary:theme.palette.primary,
        color: invert? theme.palette.text.accent1:theme.palette.text.accent2,
        borderRadius:'100px',
        border:'none',
    };
    const appliedStyles = styles? {
        ...baseStyles,
        ...styles
    } : baseStyles

    return(
        <button onClick={clickHandler} style={appliedStyles}>
            {children}
        </button>
    );
}