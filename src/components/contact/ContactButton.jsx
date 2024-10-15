import Button from "../utility/Button";

export default function ContactButton({children,clickHandler}){
    return(
        <Button styles={{
            paddingInline:'1.75em',
            paddingBlock:'0.7em',
        }} clickHandler={clickHandler}>{children}</Button>
    )
}