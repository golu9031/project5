import React, { Component } from "react";
import { Link } from "react-router-dom";

class About extends React.Component {
    render() {
        return (
            <div>
                <main id="about">
    <div class="about mt-5 mb-5">
        <div class="container">
           {/*  <!--Section head start--> */}
            <h2 class="h2-responsive fw-bold text-center my-2">
                About Us
            </h2>
            <p class="text-center w-responsive mx-auto mb-1">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam
                corrupti asperiores sunt natus, optio rerum sint, aspernatur ipsum amet sapiente architecto laboriosam enim
                tempore assumenda at veritatis beatae. Minima, molestias.</p>
           {/*  <!--section head end--> */}
            <div class="row pt-5">
                <div class="col-md-6 align-item-stretch">
                    <img class="img-fluid" src="https://images.unsplash.com/photo-1592066575517-58df903152f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1898&q=80" alt=""/>

                </div>
                <div class="col-md-6">
                    <h2 class="h2-responsive fw-bold text-start section-heading ">Our School</h2>
                    <p class="lh-base">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus odio vitae non
                        mollitia, sit sequi iusto quod enim dolorem expedita facilis fugit eaque, porro nemo laboriosam aliquid
                        error tempore assumenda.</p>
                    <p class="lh-base">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam nemo, quisquam quam
                        optio vitae eum ullam, dicta doloremque maxime unde laborum saepe ut! Inventore, ut magnam odit
                        exercitationem dignissimos iure consequuntur, dolorum, expedita sunt vel accusamus reiciendis cupiditate!
                        Velit soluta odio incidunt exercitationem id voluptatibus quae, perspiciatis possimus numquam cupiditate!
                    </p>
                    <a href="" class="btn btn-primary px-2 pl-2 mt-3">Read More</a>
                </div>
            </div>
        </div>
    </div>
</main>

            </div>
        )

    }
}
export default About;