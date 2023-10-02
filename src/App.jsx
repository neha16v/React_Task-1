import React from 'react';
import dashboard from './images/dashboard.png';
import bell from './images/bell.png';
import appointment from './images/appointment.png';
import help from './images/help.png';
import lab_test from './images/lab_test.png';
import line from './images/line.png';
import medicine_order from './images/medicine_order.png';
import message from './images/message.png';
import payment from './images/payment.png';
import search from './images/search.png';
import setting from './images/setting.png';
import minus_square from './images/minus_square.png';
// import Table from 'react-bootstrap/Table';

const App = () => {
  return (
    <div className='d-flex'>
      <div style={{width:"300px"}}>
        <div style={{color:"blue", padding:"40px"}} className='fs-4 fw-semibold'>Medico Sales</div>
        <div className='d-flex' style={{paddingBottom:"22px"}}>
          <div><img style={{marginLeft:"1px"}} src={line}></img></div>
          <div><img  style={{paddingLeft:"46px"}} src={dashboard}></img></div>
          <div style={{color:"blue", paddingLeft:"15px"}} className='fs-6'>Dashboard</div>
        </div>
        <div className='d-flex' style={{paddingBottom:"23px"}}>
          <div><img style={{paddingLeft:"50px"}} src={lab_test}></img></div>
          <div style={{paddingLeft:"15px"}}>Lab Test</div>
        </div>
        <div className='d-flex' style={{paddingBottom:"23px"}}>
          <div><img style={{paddingLeft:"50px"}} src={appointment}></img></div>
          <div style={{paddingLeft:"15px"}}>Appointment</div>
        </div>
        <div className='d-flex' style={{paddingBottom:"23px"}}>
          <div><img style={{paddingLeft:"50px"}} src={message}></img></div>
          <div style={{paddingLeft:"15px"}}>Message</div>
        </div>
          <div className='d-flex' style={{paddingBottom:"23px"}}>
          <div><img style={{paddingLeft:"50px"}} src={medicine_order}></img></div>
          <div style={{paddingLeft:"15px"}}>Medicine Order</div>
        </div>
        <div className='d-flex' style={{paddingBottom:"23px"}}>
          <div><img style={{paddingLeft:"50px"}} src={payment}></img></div>
          <div style={{paddingLeft:"15px"}}>Payment</div>
        </div>
        <div className='d-flex' style={{paddingBottom:"23px"}}>
          <div><img style={{paddingLeft:"50px"}} src={setting}></img></div>
          <div style={{paddingLeft:"15px"}}>Settings</div>
        </div>
        <div className='d-flex' style={{paddingTop:"360px"}}>
          <div><img style={{paddingLeft:"50px"}} src={help}></img></div>
          <div style={{paddingLeft:"15px"}}>Help</div>
        </div>
      </div>
      <div style={{backgroundColor:"rgba(0, 0, 0, 0.02)", width:"100%"}}>
        <div className='d-flex'>
          <div style={{padding:"35px", color:"grey"}}><button type="search" style={{width:"650px", height:"40px", backgroundColor:"white", borderRadius:"8px", border:"1px solid rgba(0, 0, 0, 0.12)"}}><img style={{marginLeft:"-530px", paddingRight:"10px"}} src={search}></img><span style={{color:"rgba(0, 0, 0, 0.55)"}}>Search</span></button></div>
          <div><img style={{paddingTop:"25px", paddingLeft:"410px"}} src={bell}></img></div>
        </div>
        
        <div style={{paddingLeft:"35px", paddingBottom:"15px"}} className='fw-semibold fs-4'>Sales Information</div>
        
        <div className='d-flex' style={{paddingBottom:"15px"}}>
          <div style={{paddingLeft:"35px"}}>
            <div style={{paddingBottom:"15px"}}>Customer</div>
            <div><input type='search' style={{width:"250px", height:"40px", padding:"10px",marginRight:"12px", border:"1px solid rgba(0, 0, 0, 0.12)", borderRadius:"5px"}} placeholder='Enter Customer Name'></input></div>
          </div>
          <div style={{paddingLeft:"35px"}}>
            <div style={{paddingBottom:"15px"}}>Invoice ID</div>
            <div><input type='search' style={{width:"250px", height:"40px", padding:"10px",marginRight:"12px", border:"1px solid rgba(0, 0, 0, 0.12)", borderRadius:"5px"}} placeholder='Enter Invoice ID'></input></div>
          </div>
          <div style={{paddingLeft:"35px"}}>
            <div style={{paddingBottom:"15px"}}>Start Date</div>
            <div><input type='search' style={{width:"250px", height:"40px", padding:"10px",marginRight:"12px", border:"1px solid rgba(0, 0, 0, 0.12)", borderRadius:"5px"}} placeholder='Start Date'></input></div>
          </div>
          <div style={{paddingLeft:"35px"}}>
            <div style={{paddingBottom:"15px"}}>End Date</div>
            <div><input type='search' style={{width:"255px", height:"40px", padding:"10px",marginRight:"12px", border:"1px solid rgba(0, 0, 0, 0.12)", borderRadius:"5px"}} placeholder='End Date'></input></div>
          </div>
          {/* <Table striped bordered hover> */}
            
          {/* </Table> */}
        </div>
        <div style={{paddingLeft:"35px"}}>
          <table className="table" style={{width:"93%"}}>
                  {/* <thead style={{height: "70px;"}}>
                      <tr>
                              <th  ><img src={minus_square}></img></th>
                              <th  >Invoice ID</th>
                              <th >Date</th>
                              <th >Customer</th>
                              <th >Payable Amount</th>
                              <th >Paid Amount</th>
                              <th >Due</th>
                      </tr>                   
                  </thead> */}
                  <tbody>
                      <tr style={{height:"70px"}}>
                          <th  ><img src={minus_square}></img></th>
                          <th  >Invoice ID</th>
                          <th >Date</th>
                          <th >Customer</th>
                          <th >Payable Amount</th>
                          <th >Paid Amount</th>
                          <th >Due</th>
                      </tr>
                      <tr style={{height:"70px"}}>
                          <td><img src={minus_square}></img></td>
                          <td>#AHGA68</td>
                          <td>23/03/2022</td>
                          <td>@Jacob Marcus</td>
                          <td>$100</td>
                          <td>$000</td>
                          <td>$000</td>
                      </tr>
                      <tr style={{height:"70px"}}>
                          <td><img src={minus_square}></img></td>
                          <td>#AHGA68</td>
                          <td>23/03/2022</td>
                          <td>@Jacob Marcus</td>
                          <td>$100</td>
                          <td>$000</td>
                          <td>$000</td>
                      </tr>
                      <tr style={{height:"70px"}}>
                          <td><img src={minus_square}></img></td>
                          <td>#AHGA68</td>
                          <td>23/03/2022</td>
                          <td>@Jacob Marcus</td>
                          <td>$100</td>
                          <td>$000</td>
                          <td>$000</td>
                      </tr>
                      <tr style={{height:"70px"}}>
                          <td><img src={minus_square}></img></td>
                          <td>#AHGA68</td>
                          <td>23/03/2022</td>
                          <td>@Jacob Marcus</td>
                          <td>$100</td>
                          <td>$000</td>
                          <td>$000</td>
                      </tr>
                      <tr style={{height:"70px"}}>
                          <td><img src={minus_square}></img></td>
                          <td>#AHGA68</td>
                          <td>23/03/2022</td>
                          <td>@Jacob Marcus</td>
                          <td>$100</td>
                          <td>$000</td>
                          <td>$000</td>
                      </tr>
                      <tr style={{height:"70px"}}>
                          <td><img src={minus_square}></img></td>
                          <td>#AHGA68</td>
                          <td>23/03/2022</td>
                          <td>@Jacob Marcus</td>
                          <td>$100</td>
                          <td>$000</td>
                          <td>$000</td>
                      </tr>
                      <tr style={{height:"70px"}}>
                          <td><img src={minus_square}></img></td>
                          <td>#AHGA68</td>
                          <td>23/03/2022</td>
                          <td>@Jacob Marcus</td>
                          <td>$100</td>
                          <td>$000</td>
                          <td>$000</td>
                      </tr>
                      <tr style={{height:"70px"}}>
                          <td><img src={minus_square}></img></td>
                          <td>#AHGA68</td>
                          <td>23/03/2022</td>
                          <td>@Jacob Marcus</td>
                          <td>$100</td>
                          <td>$000</td>
                          <td>$000</td>
                      </tr>
                  </tbody>
          </table>
        {/* <div style={{paddingLeft:"35px"}}>
          {/* <thead>
                <tr>
                  <th>#</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Username</th>
                </tr>
          </thead> */}
              {/* <tbody>
                <div >
                  <div style={{border:"2px solid black"}}>
                    <tr className='fw-bold' >
                      <td style={{width:"70px"}}><img src={minus_square}></img></td>
                      <td style={{width:"184px"}}>Invoice ID</td>
                      <td style={{width:"214px"}}>Date</td>
                      <td style={{width:"203px"}}>Customer</td>
                      <td style={{width:"113px"}}>Payable Amount</td>
                      <td style={{width:"113px"}}>Paid Amount</td>
                      <td style={{width:"113px"}}>Due</td>
                    </tr>
                  </div>
                  <div>
                  <tr className='' >
                      <td style={{width:"70px"}}><img src={minus_square}></img></td>
                      <td style={{width:"163px"}}>#AHGA68</td>
                      <td style={{width:"193px", marginLeft:"-48px"}}>23/03/2022</td>
                      <td style={{width:"163px"}}>@Jacob Marcus</td>
                      <td style={{width:"113px"}}>$100</td>
                      <td style={{width:"113px"}}>$000</td>
                      <td style={{width:"113px"}}>$000</td>
                    </tr>
                  </div>
                </div>
                <div>

                </div>

                <tr>
                  <td ><img src={minus_square}></img></td>
                  <td>#AHGA68</td>
                  <td>23/03/2022</td>
                  <td>@Jacob Marcus</td>
                  <td>	$100</td>
                  <td>	$000</td>
                  <td>	$000</td>
                </tr>
                <tr>
                  <td ><img src={minus_square}></img></td>
                  <td>#AHGA68</td>
                  <td>23/03/2022</td>
                  <td>@Jacob Marcus</td>
                  <td>	$100</td>
                  <td>	$000</td>
                  <td>	$000</td>
                </tr>
                <tr>
                  <td ><img src={minus_square}></img></td>
                  <td>#AHGA68</td>
                  <td>23/03/2022</td>
                  <td>@Jacob Marcus</td>
                  <td>	$100</td>
                  <td>	$000</td>
                  <td>	$000</td>
                </tr>
                <tr>
                  <td ><img src={minus_square}></img></td>
                  <td>#AHGA68</td>
                  <td>23/03/2022</td>
                  <td>@Jacob Marcus</td>
                  <td>	$100</td>
                  <td>	$000</td>
                  <td>	$000</td>
                </tr>
                <tr>
                  <td><img src={minus_square}></img></td>
                  <td>Invoice ID</td>
                  <td>Date</td>
                  <td>Payable Amount</td>
                  <td>Paid Amount</td>
                  <td>Due</td>
                </tr>
              </tbody> */}
        </div>
      </div>
    </div>
  );
};

export default App;