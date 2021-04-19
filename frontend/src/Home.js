import React, { Component } from 'react';
import './App.css';
import AppNavbar from './AppNavbar';
import './slider.css'
import Footer from './footer';
class Home extends Component {

  render() {
    return (
      <div>
        <AppNavbar/>
        <div id="myCarousel" class="carousel slide carousel-fade" data-ride="carousel">
      
  <div class="carousel-inner">
    <div class="carousel-item active">
      <div class="mask flex-center">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-md-7 col-12 order-md-1 order-2">
              <h4>Present your <br />
                awesome product</h4>
              <p>Lorem ipsum dolor sit amet. Reprehenderit, qui blanditiis quidem rerum <br />
                necessitatibus praesentium voluptatum deleniti atque corrupti.</p>
              </div>
            <div class="col-md-5 col-12 order-md-2 order-1"><img src="https://i.imgur.com/NKvkfTT.png" class="mx-auto" alt="slide" /></div>
          </div>
        </div>
      </div>
    </div>
    <div class="carousel-item">
      <div class="mask flex-center">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-md-7 col-12 order-md-1 order-2">
              <h4>Present your <br />
                awesome product</h4>
              <p>Lorem ipsum dolor sit amet. Reprehenderit, qui blanditiis quidem rerum <br />
                necessitatibus praesentium voluptatum deleniti atque corrupti.</p>
       </div>
            <div class="col-md-5 col-12 order-md-2 order-1"><img src="https://i.imgur.com/duWgXRs.png" class="mx-auto" alt="slide" /></div>
          </div>
        </div>
      </div>
    </div>
    <div class="carousel-item">
      <div class="mask flex-center">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-md-7 col-12 order-md-1 order-2">
              <h4>Present your <br />
                awesome product</h4>
              <p>Lorem ipsum dolor sit amet. Reprehenderit, qui blanditiis quidem rerum <br />
                necessitatibus praesentium voluptatum deleniti atque corrupti.</p>
             </div>
            <div class="col-md-5 col-12 order-md-2 order-1"><img src="https://i.imgur.com/DGkR4OQ.png" class="mx-auto" alt="slide" /></div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <a class="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev"> <span class="carousel-control-prev-icon" aria-hidden="true"></span> <span class="sr-only">Previous</span> </a> <a class="carousel-control-next" href="#myCarousel" role="button" data-slide="next"> <span class="carousel-control-next-icon" aria-hidden="true"></span> <span class="sr-only">Next</span> </a> </div>


<section class="py-5">
    <div class="container py-5">
	<div class="row py-5">
            <div class="col-md-6">
                <small>FULLY CUSTOMIZABLE</small>
                <h1><b>Organize all your media content easily</b></h1>
                <ul>
                    <li>Vitae auctor integer congue magna at pretium</li>
                    <li>Integer congue magna at pretium purus pretium ligula rutrum luctus risus eros dolor auctor ipsum blandit purus</li>
                    <li>Sagittis congue augue egestas volutpat egestas magna</li>
                    <li>Egestas magna ipsum vitae purus efficitur ipsum cubilia and laoreet pretium ligula rutrum luctus</li>
                </ul>
                               
            </div>
            <div class="col-md-6">
                <img src="https://dsathemes.com/html/nextapp/files/images/image-02.png" />
            </div>
        </div>
</div>
</section>
<section class="py-5">
    <div class="container py-5">
	<div class="row py-5">
	        <div class="col-md-6">
                <img src="https://dsathemes.com/html/nextapp/files/images/image-09.png" />
            </div>
            <div class="col-md-6">
                <small>FULLY CUSTOMIZABLE</small>
                <h1><b>Organize all your media content easily</b></h1>
                <ul>
                    <li>Vitae auctor integer congue magna at pretium</li>
                    <li>Integer congue magna at pretium purus pretium ligula rutrum luctus risus eros dolor auctor ipsum blandit purus</li>
                    <li>Sagittis congue augue egestas volutpat egestas magna</li>
                    <li>Egestas magna ipsum vitae purus efficitur ipsum cubilia and laoreet pretium ligula rutrum luctus</li>
                </ul>
            </div>
        </div>
</div>
</section>


<section class="py-5">
    <div class="container py-5">
    <div class="row text-center">
        <div class="col-md-12 offset-md-2">
	            <h1><b>Need Help? Looking For Support?</b></h1>
	            <p>Aliquam a augue suscipit, luctus neque purus ipsum neque dolor primis libero tempus, blandit posuere ligula varius magna congue cursus porta</p>
	        </div>
        </div>
</div>
</section>
<Footer />
      </div>
    );
  }
} 

export default Home;