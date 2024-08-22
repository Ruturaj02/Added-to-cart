import Table from "react-bootstrap/Table";
import React, { useEffect , useState } from 'react'
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

export default function CardsDetails() {

const [data,setData] = useState([]);
console.log(data);


  const {id} = useParams()
  // console.log(id);


 
  const getdata = useSelector((state) => state.cartreducer.carts);
  // console.log(getdata);


  const compare=()=>{
    const comparedata=getdata.filter((e)=>{
      return e.id==id
    });
    setData(comparedata);
  }

  useEffect(()=>{
    compare()

  },[id])
  return (
    <>
    <div className="container mt-2">
      <h2 className='text-center' >Item Details Page</h2>
      <section className='container mt-3' >
        <div className="iteamsdetails">
          {
            data.map((ele)=>{
              return(
                <>
          <div className="items_img">
            <img src={ele.imgdata} alt="" />
          </div>
          <div className="details">
            <Table>
              <tr>
                <td>
                  <p><strong>Restaurant </strong>: {ele.rname}</p>
                  <p><strong>Price </strong>:{ele.price}</p>
                  <p><strong>Dishes  </strong>: {ele.address}</p>
                  <p><strong>Total </strong> 300</p>
                </td>
                <td>
                <p><strong>Rating:</strong> <span style={{backgroundColor:"green",color:"#fff", padding:"2px 5px" , borderRadius:"5px"}} >{ele.rating} ★</span></p>
                <p><strong>Order Review:</strong>{ele.somedata}</p>
                <p><strong>Remove :</strong> <span><i className="fas fa-trash" style={{color:"red",fontSize:20,cursor:"pointer"}}></i></span></p>
                </td>
              </tr>
            </Table>
          </div>
                </>
              )
            })
          }
        </div>
      </section>
    </div>
    </>
  )
}
