import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import '../css/YourProducts.css'
import axios from 'axios'
import '../css/Modal.css'
import { useSelector } from 'react-redux'

export default function YourProducts() {

  const [deleteModal, setDeleteModal] = useState(false)
  const [editModal, setEditModal] = useState(false)
  const [category, setCategory] = useState([])
  const [product, setProduct] = useState([])
  const restroId = useSelector(state => state.restaurant.RestaurantInfo._id)
  // const categoryId = useSelector(state => state.)
  const data = {
    Restaurant_id: restroId
  }
  const getCategory = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/category/fetchid', data);
      // console.log(response.data.AllProduct[0].name)
      setCategory(response.data.AllProduct)
    } catch (error) {
      console.log('Error fetching data:', error);
    }
  }

  const chageCategory = async(id)=>{
    console.log(id)
    const categoryId = {
      category_id : id
    }
    try {
      const response = await axios.post('http://localhost:5000/api/product/catagory', {categoryId});
      console.log(response)
      // setProduct(response.data)
    } catch (error) {
      console.log('Error fetching data:', error);
    }
  }

  useEffect(() => {
    getCategory()
    // console.log(category)
  }, [])

  return (
    <>
      <Navbar />
      <div className='row m-0 mb-5'>

        <h2 className='mt-5 text-center pt-5'><span className='border-bottom border-5'>LIST OF PRODUCTS</span></h2>

        <div className="row m-0 mt-5 mb-5" >

          <div className="col-3  px-3">

            <div className=' px-4'>
              <p className='fs-5 py-2 ps-3 fw-medium border border-2 border-dark rounded rounded-4'>Categories</p><hr className='border border-2 border-dark' />
              {
                category.map((item,index) => {
                  return (
                    <p className='py-2 ps-3 fw-medium border rounded rounded-4' style={{ backgroundColor: 'rgb(226, 232, 240)' }} 
                    key={index} onClick={()=>chageCategory(item._id)}>{item.name}</p>
                  )
                })
              }
            </div>

          </div>

          <div className="col-9 ">
            <div className="row p-0 d-flex justify-content-evenly">

              <div className="col-3 p-0  rounded rounded-5 category-cards">
                <img src="https://images.pexels.com/photos/718742/pexels-photo-718742.jpeg?auto=compress&cs=tinysrgb&w=600" className='item-img rounded rounded-5' alt="" />

                <div className='items-details p-3'>
                  <div className='p-3 border rounded rounded-5 box-shadow' style={{ backgroundColor: 'white' }}>
                    <small className='font-light-thick'>&#x2022; STREET FOOD</small>
                    <p className='mb-0'>Pani Puri</p>
                    <p className='mb-0'>Ratings</p>
                    <p className='mb-0'>&#8377;100 /price</p>
                    <div className='d-flex'>
                      <button className='btn btn-success btn-sm ms-auto me-2' onClick={() => setEditModal(true)}><i className="bi bi-pencil-fill"></i></button>
                      <button className='btn btn-danger btn-sm me-2' onClick={() => setDeleteModal(true)}><i className="bi bi-x-circle"></i></button>
                    </div>
                  </div>
                </div>
              </div>


            </div>
          </div>
        </div>
        {/* DELETE MODAL */}
        <div className="modal-overlay" hidden={!deleteModal}>
          <div className="modal-content bg-light p-4 box-shadow">
            <div className='text-center'>
              <img src="https://www.svgrepo.com/show/527338/question-circle.svg" alt="" className='w-25' />
              <p className='fs-3 fw-bold mt-2'>Are you sure?</p>
              <p className='font-light-thick'>You want to delete this Product?</p>
            </div>
            <div className="modal-actions d-flex ms-auto mt-auto">
              <button className='btn btn-secondary me-2 px-3' onClick={() => setDeleteModal(false)}>Cancel</button>
              <button className='btn btn-danger px-3'>Ok</button>
            </div>
          </div>
        </div>
        {/* EDIT MODAL */}
        <div className="modal-overlay" hidden={!editModal}>
          <div className="model-content-edit bg-light px-4 py-3 box-shadow rounded">
            <p className='fs-5 fw-bold d-flex border-bottom border-2 pb-2 align-items-center'>Update Product <button className='ms-auto btn btn-light' onClick={() => setEditModal(false)}><i className="bi bi-x-lg " ></i></button></p>
            <div>
              <p className='mb-0 fw-medium'>Name</p>
              <input type="text" className='w-100 border py-1 px-3 rounded' placeholder='Enter Product name' />
              <p className='mb-0 mt-2 fw-medium'>Price</p>
              <input type="text" className='w-100 border py-1 px-3 rounded' placeholder='Enter Price' />
              <p className='mb-0 mt-2 fw-medium'>Description</p>
              <textarea className='w-100 py-1 px-3 border rounded ' placeholder='Write the product description here!'></textarea>
            </div>
            <div className='mt-3 text-center'>
              <button className='btn btn-dark px-4'>Save</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
