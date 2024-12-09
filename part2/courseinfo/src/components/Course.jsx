import Header from './Header'
import Content from './Content'

const Course = ({course}) => {
    return (
        <div>
            <Header header={course[0].name}/>
            <Content content={course[0].parts}/>
            <Header header={course[1].name}/>
            <Content content={course[1].parts}/>
        </div>
    )
}

export default Course