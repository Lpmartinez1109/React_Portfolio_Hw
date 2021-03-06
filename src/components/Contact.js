import React, {Component} from "react";

class Contact extends Component {
    render(){
        return(
           <div>
             <nav className="navbar navbar-light bg-light">
                    <span className="navbar-brand mb-0 h1">Welcome To The World</span>
                    <ul className="nav justify-content-end">

                        <li className="nav-item">
                            <a className="nav-link" href="projects.html">Portfolio</a>
                        </li>
                        {/* <li className="nav-item">
                            <a className="nav-link" href="writings.html">writing</a>
                        </li> */}
                        <li className="nav-item">
                            <a className="nav-link" href="contact.htm">Contact</a>
                        </li>
                    </ul>
                </nav>
          <div className="container jumbotron">
           <div className="row">
             <div className="col-sm-12">
               <div className="row">
                 <div className="col-sm-8 col-sm-offset-2">
                   <div>
                     <h2>CONTACT US</h2>
                   </div>
                   <form method="post" data-form-title="CONTACT US">
                     <input type="hidden" data-form-email="true" />
                     <div className="form-group">
                       <input type="text" className="form-control" name="name" required="" placeholder="Name*" data-form-field="Name" />
                     </div>
                     <div className="form-group">
                       <input type="email" className="form-control" name="email" required="" placeholder="Email*" data-form-field="Email" />
                     </div>
                     <div className="form-group">
                       <input type="tel" className="form-control" name="phone" placeholder="Phone" data-form-field="Phone" />
                     </div>
                     <div className="form-group">
                       <textarea className="form-control" name="message" placeholder="Message" rows="7" data-form-field="Message"></textarea>
                     </div>
                     <div>
                       <button type="submit" className="btn btn-lg btn-danger">Contact Me</button>
                     </div>
                   </form>
                 </div>
               </div>
             </div>
           </div>
         </div>
         </div>
        )
    }
}
export default Contact;