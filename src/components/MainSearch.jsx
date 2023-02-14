import { useEffect } from 'react'
import { useState } from 'react'
import { Container, Row, Col, Form, Button, Spinner, Alert } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { fetchJobsAction } from '../redux/actions'
import { setUsername } from '../redux/actions'
import { logOut } from '../redux/actions'
import Job from './Job'



const MainSearch = () => {
  let dispatch=useDispatch()
  const [query, setQuery] = useState('')

 let jobs=useSelector((state)=>state.allJobs.queryList)
  const navigate = useNavigate()
  const userName = useSelector((state) => state.user.name)
  const [inputValue, setInputValue] = useState('')
 
  const spinner=useSelector((state)=>state.allJobs.isLoading)
  const error=useSelector((state)=>state.allJobs.isError)
  const handleChange = (e) => {
    setQuery(e.target.value)
   
  }

  const handleSubmit =  (e) => {
    e.preventDefault()
    dispatch(fetchJobsAction(query,dispatch))
   
   
  }

  return (
    <Container >
      <Row>
        <Col xs={10} className="mx-auto my-3">
          <h1>Remote Jobs Search</h1>
          {/* {spinner && <Spinner animation='border' variant='succes'/>} */}
          {userName ?
          (<> <span className="mr-3">Hello {userName}</span>
          <Button onClick={() => navigate('/favourites')}>Favourites</Button>
          <Button variant='danger' onClick={()=>dispatch(logOut())}>Log out</Button>
          </>):( <Form
          onSubmit={(e) => {
            e.preventDefault() 
            dispatch(setUsername(inputValue))
          
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
        {!error ?
        <Col xs={10} className="mx-auto mb-5">
          {jobs.map((jobData) => (
            <Job key={jobData._id} data={jobData} />
          ))}
        </Col>
        :
         <Alert className='ml-5' variant='danger'> Oops something went wrong</Alert>

          }
      </Row>
    </Container>
  )
}

export default MainSearch
