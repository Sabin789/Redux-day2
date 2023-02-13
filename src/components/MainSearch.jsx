import { useState } from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { fetchJobsAction } from '../redux/actions'
import { setUsername } from '../redux/actions'
import Job from './Job'



const MainSearch = () => {
  let dispatch=useDispatch()
  const [query, setQuery] = useState('')

 const jobs=useSelector((state)=>state.allJobs.queryList)
  const navigate = useNavigate()
  const userName = useSelector((state) => state.user.name)
  const [inputValue, setInputValue] = useState('')
  const handleChange = (e) => {
    setQuery(e.target.value)
   
  }

  const handleSubmit =  (e) => {
    e.preventDefault()
    dispatch(fetchJobsAction(query,dispatch))
   
   
  }

  return (
    <Container>
      <Row>
        <Col xs={10} className="mx-auto my-3">
          <h1>Remote Jobs Search</h1>
          {userName ?
          (<> <span className="mr-3">Hello {userName}</span>
          <Button onClick={() => navigate('/favourites')}>Favourites</Button>
          </>):( <Form
          onSubmit={(e) => {
            e.preventDefault() // avoids refreshing the page
            dispatch(setUsername(inputValue))
            // we want the content of the input field to reach the reducer
            // and become the new state.user.name :)
          }}
        >
          <Form.Group>
            <Form.Control
              type="text"
              placeholder="Log in here..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
          </Form.Group>
        </Form>) }
        </Col>
        <Col xs={10} className="mx-auto">
          <Form onSubmit={handleSubmit}>
            <Form.Control
              type="search"
              value={query}
              onChange={handleChange}
              placeholder="type and press Enter"
            />
          </Form>
        </Col>
        <Col xs={10} className="mx-auto mb-5">
          {jobs.map((jobData) => (
            <Job key={jobData._id} data={jobData} />
          ))}
        </Col>
      </Row>
    </Container>
  )
}

export default MainSearch
