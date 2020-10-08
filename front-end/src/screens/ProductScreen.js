import React, { useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { Button, Row, Col, Image, ListGroup, Card}  from 'react-bootstrap'
// import products from '../products'
import Rating from '../components/Rating'
import axios from 'axios'

const ProductScreen = ({ match }) => {
  // const product = products.find(p => p._id === match.params.id);
  const [product, setProduct] = useState({})

  useEffect(() => {
    const fetchProduct = async () => {
      const { data } = await axios.get(`/api/products/${match.params.id}`)
      setProduct(data)
    }

    fetchProduct()
  }, [match])
  
  return (
    <>
      <Link className='btn btn-dark my-3' to='/'>
        Go Back
      </Link>
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
              <Rating value={product.rating} text={`${product.numReviews} reviews`}/>
            </ListGroup.Item>
            <ListGroup.Item>
              Price: ${product.price}
            </ListGroup.Item>
            <ListGroup.Item>
            {product.description && `Description: ${product.description}` }
              
            </ListGroup.Item>
          
          </ListGroup>
        </Col>
        <Col>
          <Card>
            <ListGroup variant='flush'>
              <ListGroup.Item>
                <Row>
                  <Col>
                    <strong>${product.price}</strong>
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>
                    Status:
                  </Col>
                  <Col>
                    {product.countInStock > 1 ? `${product.countInStock} items in stock` : product.countInStock === 1 ? 'Only 1 item in stock' : 'Out Of Stock'}
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Button className='btn-block' type='button' disabled={product.countInStock === 0}>
                  Add To Cart
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>

      </>
      )
    }
    
    export default ProductScreen;


    
    // <LinkContainer to='/'>
    //   <Button variant='info'>Go Back</Button>
    // </LinkContainer>