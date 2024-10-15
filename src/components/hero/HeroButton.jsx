import theme from "../../theme";
import Button from "../utility/Button";

export default function HeroButton({children,clickHandler}){
    return(
        <Button clickHandler={clickHandler} styles={{
            paddingInline:'2em',
            paddingBlock:'0.7em',
            fontWeight: theme.typography.fontWeight.bold
        }}>{children}</Button>
    )
}