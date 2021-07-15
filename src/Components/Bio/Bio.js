import Logo from './logo1.png'
import Passport from './passport.jpg'
import './bio.css'
import React, { Component } from 'react'
import { Avatar } from '@material-ui/core'

export class Bio extends Component {
    constructor(props) {
        super(props)
    
    }
    
    render() {
        return (
            <>
            {
                this.props.props.length>0&&(
                    this.props.props.map((std,ind)=>(
                        <div key={ind} id="container11">
                        {console.log(this.props.props)}
                              <center><div className="header2">
                                   <img src={Logo} alt='img'/><br></br>
                                   <span className="school-name">NOBLE INTELLECT ACADEMY</span><br></br>
                              
                                 
                                  <span>Plot 2B Zone A Close,Kofare Jimeta Yola North, Adamawa State</span><br></br>
                                  <span>Motto: Opportunity Innovation Excellence</span>
                                  <h4>STUDENT BIO-DATA</h4>
                              </div> </center>
                              <div className="student-info-section">
                             <div className="student-info-1">
                              <img className='background-logo' src={Logo}/>
                                 <table className="table-student-info">
                                    
                                     <tr>
                                         <td>NAME:</td>
                                         <td>{`${std.firstName+" "+std.lastName}`}</td>
                                    
                                         
                                     </tr>
                                     <tr>
                                      <td>STUDENT ID</td>
                                      <td>{std.username}</td>
                                     </tr>
                                     <tr>
                                      <td>Current Class</td>
                                      <td>{std.currentClass}</td>
                                  </tr>
                                  <tr>
                                      <td>YEAR OF ADMISSION</td>
                                      <td>{std.session}</td>
                                  </tr>
                                  <tr>
                                      <td>D.O.B</td>
                                      <td>{std.dob}</td>
                                  </tr>
                                  <tr>
                                      <td>Gender</td>
                                      <td>{std.gender}</td>
                                  </tr>
                                  <tr>
                                      <td>Address</td>
                                      <td>{std.address}</td>
                                  </tr>
                                  <tr>
                                      <td>LGA</td>
                                      <td>{std.lga}</td>
                                  </tr>
                                  <tr>
                                      <td>State</td>
                                      <td>{std.state}</td>
                                  </tr>
                                 </table>
                             </div>
                             <div className="passport-container">
                             <Avatar className="passport-img" style={{width:'200px',height:'200px',marginLeft:'15px'}} alt={std.firstName.split('')[0]}/>   
                                 {/* <img className="passport-img" src={Passport}/> */}
                             </div>
                             <div className="parent-info-section">
                            
                                  <table className="table-student-info-1">
                                      <thead>
                                          <th colspan="3">Parent/Gaurdian Information</th>
                                      </thead>
                                      <tr>
                                          <td>PARENT NAME</td>
                                          <td>{std.kinName}</td>
                                      </tr>
                                      <tr>
                                          <td>Phone Number</td>
                                          <td>{std.kinNumber}</td>
                                      </tr>
                                      <tr>
                                          <td>Relationship</td>
                                          <td>{std.kinRelation}</td>
                                      </tr>
                                      <tr>
                                          <td>Address</td>
                                          <td>{std.kinAddress}</td>
                                      </tr>
                                 
                                  </table>
                                  <div>
                                      
                                  </div>
                             </div>
                          </div>
                          </div> 
                    ))
                )
            }
          
           
        </>   
        )
    }
}

export default Bio

