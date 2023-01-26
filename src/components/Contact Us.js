import React, { Component } from "react";
import { Link } from "react-router-dom";

class ContactUs extends React.Component {
    render() {
        return (
            <div>
                <main class="mt-5">
                    <div class="container">
                        {/* <!--Section head start--> */}
                        <h2 class="h2-responsive fw-bold text-center my-2">
                            Contact Us
                        </h2>
                        <p class="text-center w-responsive mx-auto mb-1">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam
                            corrupti asperiores sunt natus, optio rerum sint, aspernatur ipsum amet sapiente architecto laboriosam enim
                            tempore assumenda at veritatis beatae. Minima, molestias.</p>
                        {/*  <!--section head end--> */}
                        {/* <!--Section: Contact v.2--> */}
                        <section class="mb-4">



                            <div class="row mt-5">

                                {/* <!--Grid column--> */}
                                <div class="col-md-6 mb-md-0 mb-5">
                                    <form id="contact-form" name="contact-form" action="mail.php" method="POST">

                                        {/*    <!--Grid row--> */}
                                        <div class="row">

                                            {/* <!--Grid column--> */}
                                            <div class="col-md-6">
                                                <div class="md-form mb-0">
                                                    <label for="name" class="">Your name</label>
                                                    <input type="text" id="name" name="name" class="form-control" placeholder="Enter Name" />

                                                </div>
                                            </div>
                                            {/*  <!--Grid column--> */}

                                            {/* <!--Grid column--> */}
                                            <div class="col-md-6">
                                                <div class="md-form mb-0">
                                                    <label for="email" class="">Your email</label>
                                                    <input type="text" id="email" name="email" class="form-control" placeholder="Enter Email" />

                                                </div>
                                            </div>
                                            {/*  <!--Grid column--> */}

                                        </div>
                                        {/*  <!--Grid row-->

                                    <!--Grid row--> */}
                                        <div class="row">
                                            <div class="col-md-12 pt-3">
                                                <div class="md-form mb-0">
                                                    <label for="subject" class="">Subject</label>
                                                    <input type="text" id="subject" name="subject" class="form-control" placeholder="Enter Subject" />

                                                </div>
                                            </div>
                                        </div>
                                        {/*   <!--Grid row-->

                                    <!--Grid row--> */}
                                        <div class="row">

                                            {/*  <!--Grid column--> */}
                                            <div class="col-md-12 pt-3">

                                                <div class="md-form">
                                                    <label for="message">Your message</label>

                                                    <textarea type="text" id="message" name="message" rows="6"
                                                        class="form-control md-textarea" placeholder="Message"></textarea>
                                                </div>

                                            </div>
                                        </div>
                                        {/*  <!--Grid row--> */}

                                    </form>

                                    <div class="text-center text-md-left mt-3">
                                        <a class="btn btn-primary" onclick="document.getElementById('contact-form').submit();">Send</a>
                                    </div>
                                    <div class="status"></div>
                                </div>



                            </div>

                        </section>
                        {/* <!--Section: Contact v.2--> */}
                        <div class="map-w3layouts">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15258072.40570261!2d82.75252935!3d20.98801345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1660630847648!5m2!1sen!2sin"></iframe>
                        </div>
                    </div>
                </main>


            </div>
        )

    }
}
export default ContactUs;