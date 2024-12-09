import Total from './Total'

const Content = ({content}) => {
    return (<ul>
        {content.map(data => <li key={data.id}>{data.name + " " + data.exercises}</li>)}
        <Total total={content}/>
    </ul>)
}

export default Content