import Button from "../utility/Button";

export default function OrderButton({children,clickHandler}){
    return(
        <Button styles={{
            paddingInline:'2em',
            paddingBlock:'0.7em',
        }} clickHandler={clickHandler}>{children}</Button>
    )
}