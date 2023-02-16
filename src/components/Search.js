import React, { useState } from 'react'
import Fooddata from './FoodData'
import './style.css'
import Form from 'react-bootstrap/Form'
import FormGroup from 'react-bootstrap/esm/FormGroup'
import Cards from './Cards'

const Search = () => {

    const [fdata, setFdata] = useState(Fooddata);
    // console.log(fdata);

    const zomatologo = "https://www.citypng.com/public/uploads/preview/zomato-black-logo-hd-png-11662674148bvgltyctin.png"

  return (
    <>
    <div className='container d-flex justify-content-between align-items-center'>
        <img src={zomatologo} style={{width:"8rem",position:'relative',left:'2%',cursor:'pointer'}} alt ="" />
        <h2 style={{color:'#1b1464',cursor:'pointer'}} className="mt" > Search Filter App</h2>
    </div>

    <Form className='d-flex justify-content-center align-items-center mt-3'>
        <FormGroup className='mx-2 col-lg-4' controlId='formBasicEmail'>
            <Form.Control type='text' placeholder='Search Restaurant'/>
        </FormGroup>
        <button className='btn text-light col-lg-1' style={{background:"#ed4c67"}}>Submit</button>
    </Form>

    <section className='item_section mt-4 container'>
        <h2 className='px-4' style={{fontWeight:400}}>Restaurant in Ahmedabad Open now</h2>

        <div className='row mt-2 d-flex justify-content-around align-items-center'>
            <Cards data={fdata} />
        </div>

    </section>
    </>
   )
}

export default Search