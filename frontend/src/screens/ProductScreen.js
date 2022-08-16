import React, {useState, useEffect} from 'react'
import { Link,useParams} from 'react-router-dom'
import {Row, Col, Image, ListGroup, Card, Button, ListGroupItem} from 'react-bootstrap'
import Rating from '../component/Rating'
import axios from 'axios'
// import products from '../products'

const ProductScreen = ({match}) => {
  const { id } = useParams();
  // const product = products.find((p) => p._id === (id));
  const [product, setProduct] =useState({})
  useEffect(() =>{
    const fecthProduct = async () =>{
      const {data} = await axios.get(`/api/products/${id}`)
      setProduct(data)
    }
    fecthProduct()
  }, [])


  return <>
    <Link className='btn btn-dark my-3' to='/'>Go Back</Link>
      <Row>
        <Col md={6}>
        <Image src={product.image} alt={product.name} fluid/>
        </Col>
        <Col md={3}>
          <ListGroup variant='flush'>
            <ListGroup.Item>
                <h3>{product.name}</h3>
            </ListGroup.Item>
            <ListGroup.Item>
            <strong><Rating value={product.rating} text={`${product.numReviews} reviews`}/></strong>
          </ListGroup.Item>
          <ListGroup.Item>
              <strong>price: ${product.price}</strong>
          </ListGroup.Item>
          <ListGroup.Item>
              <strong>Description: {product.description}</strong>
          </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3}>
        <Card>
          <ListGroup variant ="flush">
            <ListGroup.Item>
                <Row>
                  <Col>
                  <strong>price:</strong>
                  </Col>
                  <Col>
                  <strong>
                    ${product.price}
                  </strong>
                  </Col>
                </Row>
            </ListGroup.Item>
            <ListGroup.Item>
                <Row>
                  <Col>
                 <strong> status:</strong>
                  </Col>
                  <Col>
                  <strong>
                 {product.countInStock > 0 ? 'In Stock' : 'Out Of Stock'}
                  </strong>
                  </Col>
                </Row>
            </ListGroup.Item>
            <ListGroup.Item>
              <Button className='btn-block' type='button' disabled={
                product.countInStock === 0 
              }>
                Add To Cart
              </Button>
            </ListGroup.Item>
          </ListGroup>
        </Card>
      </Col>
      </Row>
  </>
}

export default ProductScreen
