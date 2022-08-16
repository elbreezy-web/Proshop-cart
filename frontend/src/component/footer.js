import React from 'react'
import {Container, Row, Col} from "react-bootstrap"


const footer = () => {
  return (
    <footer>
         <Container>
       <Row>
         <Col className='Text-centre py-3'>copyright &copy; Proshop</Col>
       </Row>
     </Container>
    </footer>
  )
}

export default footer
