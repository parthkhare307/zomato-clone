import React from 'react'
import Card from 'react-bootstrap/Card'

const Cards = ({data}) => {
  return (
    <>
    {
        data.map((element,k)=>{
            return(
                <>
                <Card style={{width:'22rem', border:'none'}} className='hove mb-4'>
                   <Card.Img variant='top' className='cd m-1' src={element.imgdata}/>

                   <div className='card_body'>
                        <div className='upper_data' style={{display:'flex' , flexDirection:'row' ,justifyContent:'space-between'}}>
                            
                            <h4 className='mt-2'>{element.rname}</h4>
                            <center>
                               <span style={{padding:'5px' , margin:'5px' ,}}>{element.rating}&nbsp;★</span>
                            </center>
                           
                        </div>

                        <div className='lower_data d-flex justify-content-between' style={{
                            display:'flex',
                            flexDirection:"row"
                        
                        }}>
                            <h5>{element.address}</h5>
                            <span 
                            >{element.price}</span>
                        </div>

                        <div className='extra'></div>

                        <div className='last_data d-flex justify-content-between align-items-center'>
                            <img src={element.arrimg} className="limg" alt=''/>
                            <p>{element.somedata}</p>
                            <img src={element.delimg} className="lalimg" alt=''/>
                        </div>
                    </div>
                </Card>
                </>
            )
        })
    }
    
    </>
    )
}

export default Cards