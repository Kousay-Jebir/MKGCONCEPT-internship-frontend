import Button from "../utility/Button";

export default function NewsLetterButton({children,clickHandler}){
    return(
        <Button clickHandler={clickHandler} type='submit' styles={{
            paddingInline:'2em',
            paddingBlock:'0.7em',
        }}>
            {children}
        </Button>
    )
}