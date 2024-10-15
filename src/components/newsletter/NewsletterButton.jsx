import Button from "../utility/Button";

export default function NewsLetterButton({children,clickHandler,mobileStyles=null}){
    const appliedStyles = !mobileStyles? {paddingInline:'2em',
        paddingBlock:'0.7em',} : {
            paddingInline:'2em',
            paddingBlock:'0.7em',
            ...mobileStyles
        }
    return(
        <Button clickHandler={clickHandler} type='submit' styles={appliedStyles}>
            {children}
        </Button>
    )
}