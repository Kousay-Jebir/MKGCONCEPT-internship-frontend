import Button from "../utility/Button";

export default function ContactButton({children,clickHandler}){
    return(
        <Button styles={{
            paddingInline:'1.75em',
            paddingBlock:'0.7em',
            display:'block'
        }} clickHandler={clickHandler}>Send</Button>
    )
}