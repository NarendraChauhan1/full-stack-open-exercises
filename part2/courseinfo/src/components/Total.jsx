const Total = ({total}) => {
console.log(total)
const sum = total.reduce((accu, sum) => accu + sum.exercises, 0)
return(
<li>total of {sum} exercises</li>)}

export default Total