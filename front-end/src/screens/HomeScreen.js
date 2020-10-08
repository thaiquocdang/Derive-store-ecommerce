import React, { useEffect, useState } from 'react'
// import products from '../products'
import { Row, Col } from 'react-bootstrap'
import Product from '../components/Product'
import axios from 'axios'

const HomeScreen = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      /* //first way to define data
      const res = await axios.get('/api/products')
      console.log(res.data, 'products data from backend');
      setProducts(res.data)
      */

      const { data } = await axios.get('/api/products')
      setProducts(data)
    }
    fetchProducts()
  }, [])

  console.log(products);
  return (
    <>
      <h1>Lastest Products</h1>  
      <Row>
        {products.map(product => (
          <Col sm={12} md={6} lg={4} xl={3} key={product._id}>
            <Product product={product} /> 
          </Col>
        ))}
      </Row> 
    </>
  )
}

export default HomeScreen
