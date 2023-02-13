import { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Job from './Job'
import { useParams } from 'react-router-dom'
import { fetchJobsAction } from '../redux/actions'
import { useDispatch, useSelector } from 'react-redux'

const CompanySearchResults = () => {

  const dispatch=useDispatch()
  const [jobs, setJobs] = useState([])
  const params = useParams()
const reduxJobs= useSelector((state)=>state.queryList)
  // const baseEndpoint = 'https://strive-benchmark.herokuapp.com/api/jobs?search='

  // useEffect(() => {
  //   getJobs()
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [])

  // const getJobs = async () => {
   
  //   try {
  //     const response = await fetch(baseEndpoint + params.companyName)
  //     if (response.ok) {
  //       const { data } = await response.json()
  //       setJobs(data)
  //     } else {
  //       alert('Error fetching results')
  //     }
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }
// useEffect(()=>{
//   dispatch(fetchJobsAction())
// })
  return (
    <Container>
      <Row>
        <Col>
          {jobs.map((jobData) => (
            <Job key={jobData._id} data={jobData} />
          ))}
        </Col>
      </Row>
    </Container>
  )
}

export default CompanySearchResults
