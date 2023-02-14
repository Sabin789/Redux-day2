
import { Container, Row, Col } from 'react-bootstrap'
import Job from './Job'


import {  useSelector } from 'react-redux'

const CompanySearchResults = () => {


  

const reduxJobs= useSelector((state)=>state.queryList)
 
  return (
    <Container>
      <Row>
        <Col>
          {reduxJobs.map((jobData) => (
            <Job key={jobData._id} data={jobData} />
          ))}
        </Col>
      </Row>
    </Container>
  )
}

export default CompanySearchResults
