import React,{Component} from "react";
/* import { Link } from "react-router-dom"; */

class Header extends React.Component{
    render(){
        return(
            <div>
               
            <header class="text-center header-social-icon text-lg-start bg-primary text-white">
                <div class="container">
                   {/*  <!-- Section: Social media --> */}
                    <section class="d-flex justify-content-center justify-content-lg-between p-2 border-bottom">
                      {/*   <!-- Left --> */}
                        <div class="me-5 d-lg-block d-none">
                            <span class="mx-2"><i class="fa fa-phone mx-1"></i>+917004944882</span>
                            <span><i class="fa fa-calendarmx-1"></i> Mon-Fri : 10:00-04:00</span>
                        </div>
                     {/*    <!-- Left -->

                        <!-- Right --> */}
                        <div>
                            <a href="" class="me-4 text-reset">
                                <i class="fa fa-facebook-f"></i>
                            </a>
                            <a href="" class="me-4 text-reset">
                                <i class="fa fa-twitter"></i>
                            </a>
                            <a href="" class="me-4 text-reset">
                                <i class="fa fa-google"></i>
                            </a>
                            <a href="" class="me-4 text-reset">
                                <i class="fa fa-instagram"></i>
                            </a>
                            <a href="" class="me-4 text-reset">
                                <i class="fa fa-linkedin"></i>
                            </a>
                            <a href="" class="me-4 text-reset">
                                <i class="fa fa-github"></i>
                            </a>
                        </div>
                       
                    </section>
                   {/*  <!-- Right -->
                    <!-- Section: Social media --> */}
                    
                </div>





            </header>
            </div>
        )
    }
}
export default Header;