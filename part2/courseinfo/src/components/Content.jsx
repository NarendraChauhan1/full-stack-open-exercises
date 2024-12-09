const Content = ({content}) => {
    return (<ul>
        {content.map(data => <li key={data.id}>{data.name + " " + data.exercises}</li>)}
    </ul>)
}

export default Content