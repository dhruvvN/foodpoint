import React from 'react'
import Navbar from './Navbar'
// import '../css/Home.css';

export default function Favourite() {
    return (
        <>
            <Navbar />
            <div className='row m-0'>

                <div className="" style={{ marginTop: '90px' }}>

                    <div className="container px-5 popular mt-4">
                        <p className='fs-5 mb-0 mt-5 fw-bold'>My favourite items</p>
                        <div className="row m-0">

                            <div className="container-md px-md-5 mt-4" >
                                <div className="row m-0 mb-5">

                                    <div className="col-sm-6 px-5-md mb-5">
                                        <div className="item p-3 rounded rounded-4 box-shadow">
                                            <div className="col d-flex align-items-center">
                                                <div>
                                                    <p className='mb-0 fw-bold text-secondary'>By McDonald's</p>
                                                    <small className='fw-medium text-secondary'><i class="bi bi-star-fill text-secondary"> </i> 4/5 &#8226; 20-25 min</small>
                                                </div>
                                                <i class="bi bi-heart-fill fs-4 me-3 ms-auto text-secondary"></i>
                                            </div>
                                            <hr className='mb-3' />
                                            <div className="row m-0">
                                                <div className="col-8 ">
                                                    <small className='text-warning'><i class="bi bi-star-fill text-warning"> </i>BESTSELLER</small>
                                                    <p className='fw-bold mb-0'>McVeggie Burger</p>
                                                    <small className='fw-medium'>&#x20B9; 99</small><br />
                                                    <small className='fw-medium text-secondary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam voluptas vitae porro ipsum.</small>
                                                </div>
                                                <div className="col-4 ">
                                                    <img src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnVyZ2VyfGVufDB8fDB8fHww"
                                                        className='img-fluid rounded rounded box-shadow' alt="" />
                                                    <button className='btn btn-outline-success btn-sm'>ADD</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
