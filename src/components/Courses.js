import React, { Component } from "react";
import { Link } from "react-router-dom";

class Courses extends React.Component {
    render() {
        return (
            <div>
                 <main id="Course" class="course">
                <div class="container">
                    {/* <!--Section head start--> */}
                    <h2 class="h2-responsive fw-bold text-center my-2">
                        Courses
                    </h2>
                    <p class="text-center w-responsive mx-auto mb-1">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam
                        corrupti asperiores sunt natus, optio rerum sint, aspernatur ipsum amet sapiente architecto laboriosam enim
                        tempore assumenda at veritatis beatae. Minima, molestias.</p></div>
                  {/*   <!--section head end--> */}

                    <div class="row mt-5">
                        <div class="col-md-4">
                            <div class="card box">
                                <img src="https://media.istockphoto.com/photos/bookshelves-and-laptops-are-placed-on-the-library-deskelearning-class-picture-id1177967778?k=20&m=1177967778&s=612x612&w=0&h=ZN9cQR6jog3wcWDsB5bUIqLRi_pLCr1Er7p6UioAQ8E=" class="card-img-top" alt="..."/>
                                    <div class="card-body">
                                        <h5 class="card-title">Information Technology</h5>
                                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
                                            content.</p>
                                        <a href="#" class="btn btn-primary">Read More</a>
                                    </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="card box">
                                <img src="https://media.istockphoto.com/photos/chemistry-education-concept-open-books-with-text-chemistry-and-and-picture-id1000158336?k=20&m=1000158336&s=612x612&w=0&h=P0uGC_AIaUxzRz13UWId7Qu0T2jxQuu9yE7R4LJCZqI=" class="card-img-top" alt="..."/>
                                    <div class="card-body">
                                        <h5 class="card-title">Science</h5>
                                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
                                            content.</p>
                                        <a href="#" class="btn btn-primary">Read More</a>
                                    </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="card box">
                                <img src="https://media.istockphoto.com/id/1198644091/photo/stack-of-books-in-front-of-a-blackboard.webp?s=612x612&w=is&k=20&c=OaDmocDqUlgBcJHv10pb5KTwdPse-mciD1JNEBZNImM=" class="card-img-top" alt="..."/>
                                    <div class="card-body">
                                        <h5 class="card-title">Maths</h5>
                                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
                                            content.</p>
                                        <a href="#" class="btn btn-primary">Read More</a>
                                    </div>
                            </div>
                        </div>
                    </div>
            </main>

            </div>
        )

    }
}
export default Courses;