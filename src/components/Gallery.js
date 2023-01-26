import React, { Component } from "react";
import { Link } from "react-router-dom";

class Gallery extends React.Component {
    render() {
        return (
            <div>
                <main class="mt-5">
                <div class="container">
                    {/* <!--Section head start--> */}
                    <h2 class="h2-responsive fw-bold text-center my-2">
                        Gallery
                    </h2>
                    <p class="text-center w-responsive mx-auto mb-1">Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                        Totam
                        corrupti asperiores sunt natus, optio rerum sint, aspernatur ipsum amet sapiente architecto laboriosam
                        enim
                        tempore assumenda at veritatis beatae. Minima, molestias.</p></div>
                   {/*  <!--section head end--> */}
                   {/*  <!-- Gallery --> */}
                    <div class="row pt-5">
                        <div class="col-lg-4 col-md-12 mb-4 mb-lg-0">
                            <img src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp"
                                class="w-100 shadow-1-strong rounded mb-4" alt="Boat on Calm Water" />

                            <img src="https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain1.webp"
                                class="w-100 shadow-1-strong rounded mb-4" alt="Wintry Mountain Landscape" />
                        </div>

                        <div class="col-lg-4 mb-4 mb-lg-0">
                            <img src="https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain2.webp"
                                class="w-100 shadow-1-strong rounded mb-4" alt="Mountains in the Clouds" />

                            <img src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp"
                                class="w-100 shadow-1-strong rounded mb-4" alt="Boat on Calm Water" />
                        </div>

                        <div class="col-lg-4 mb-4 mb-lg-0">
                            <img src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(18).webp"
                                class="w-100 shadow-1-strong rounded mb-4" alt="Waves at Sea" />

                            <img src="https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain3.webp"
                                class="w-100 shadow-1-strong rounded mb-4" alt="Yosemite National Park" />
                        </div>
                    </div>
                   {/*  <!-- Gallery --> */}
            </main>

            </div>
        )

    }
}
export default Gallery;