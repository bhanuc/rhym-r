var variables = require('./variables.js');
module.exports = {
  general : {
    head-content : '<meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vatica Express City</title>
    <link rel="stylesheet" href="'+variables.link+'stylesheets/app.css" />
    <link rel="stylesheet" href="'+variables.link+'foundation-icons/foundation-icons.css" />',
    header: '<nav class="top-bar" data-topbar>
    <ul class="title-area">
       
      <li class="name">
        <h1>
          <a href="#">
            <img src="'+variables.logo+'">
          </a>
        </h1>
      </li>
      <li class="toggle-topbar menu-icon"><a href="#"><span>menu</span></a></li>
    </ul>
 
    <section class="top-bar-section">
       
      <ul class="right">
        <li class="divider"></li>
        <li><a href="'+variables.link+'">Home</a></li>
        <li class="divider"></li>
        <li class="has-dropdown">
          <a href="'+variables.link+'specifications.html">Specifications</a>
          <ul class="dropdown">
            <li><a href="'+variables.link+'projectdetails.html">Project Details</a></li>
            <li><a href="'+variables.link+'site-plan.html">Site Plan</a></li>
            <li><a href="'+variables.link+'floor-plan.html">Floor Plan</a></li>
            <li class="divider"></li>
            <li><a href="'+variables.link+'all-details.html">See all →</a></li>
</ul>
        <li class="divider"></li>
        <li><a href="'+variables.link+'location.html">Location</a></li>
        <li class="divider"></li>
        <li><a href="'+variables.link+'price.html">Price</a></li>
        <li class="divider"></li>
        <li><a href="'+variables.link+'contact.html">Contact</a></li>
        <li class="divider"></li>
      <li><a href="#"> <i class="fi-torso-business"></i>'+variables.Content.no+'</a></li>
        <li class="divider"></li>
          </ul>
        </li>
      </ul>
    </section>
  </nav>',
  slider: ''

  }


}