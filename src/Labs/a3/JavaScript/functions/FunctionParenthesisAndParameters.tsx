function FuntionParenthesisAndParameters(){
    const square  = (a: number) => a * a;
const plusOne = (a: number) => a + 1;
const twoSquared = square(2);
const threePlusOne = plusOne(3);

return(
    <div>
        <h3>Parenthesis and parameters</h3>
        <div>twoSquared = {twoSquared}</div>
        <div>square(2) = {square(2)}</div>
        <div>threePlusOne = {threePlusOne}</div>
        <div>plusOne(3) = {plusOne(3)}</div>
    </div>
)
}
export default FuntionParenthesisAndParameters