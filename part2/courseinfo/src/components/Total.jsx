const Total = ({total}) => {
console.log(total)
return(
<li>{`total of ${total.reduce((zero, content) => zero + content.exercises, 0)} exercises`}</li>)}

export default Total