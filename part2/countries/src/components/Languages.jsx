const Languages = ({ langs }) => {
  return (
    <ul>
      {Object.entries(langs).map(([key, value]) => {
        return <li key={key}>{value}</li>
      })}
    </ul>
  )
}

export default Languages
