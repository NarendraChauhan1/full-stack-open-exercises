import Header from './Header'
import Content from './Content'

const Course = ({ course }) => {
    return (
      <div>
        {
          course.map(courses => 
            <div key={courses.id}>
              <Header header={courses.name} />
              <Content content={courses.parts} />
            </div>
          )
        }
      </div>
    );
  }

export default Course
