import Button from "../utility/Button";

export default function OrderButton({children,clickHandler,invert=false}){
    return(
        <Button styles={{
            paddingInline:'4em',
            paddingBlock:'0.7em',
        }} clickHandler={clickHandler} invert={invert}>{children}</Button>
    )
}