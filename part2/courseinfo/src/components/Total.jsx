const Total = ({total}) => {
console.log(total)
const sum = total.reduce((accu, sum) => accu + sum.exercises, 0)
return(
<b>total of {sum} exercises</b>)}

export default Total