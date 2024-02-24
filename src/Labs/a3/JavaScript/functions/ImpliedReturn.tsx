function ImpliedReturn(){
    const multiply = (a: number, b: number) => a * b;
const fourTimesFive = multiply(4, 5);
console.log(fourTimesFive);

return(
    <div>
        <h3>Implied Return</h3>
        <div>4Times5 = {fourTimesFive}</div>
        <div>multiply(4, 5) = {multiply(4, 5)}</div>
    </div>
)
}

export default ImpliedReturn