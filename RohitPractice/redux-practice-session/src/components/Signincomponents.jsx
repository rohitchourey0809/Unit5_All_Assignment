import React from 'react'
import "./Signin.css"

export const Signin = () => {
  return (
    <div><section class="form-elegant">

  {/* <!--Form without header--> */}
  <div class="card">

    <div class="card-body mx-4">

      {/* <!--Header--> */}
      <div class="text-center">
        <h3 class="dark-grey-text mb-5"><strong>Sign in</strong></h3>
      </div>

      {/* <!--Body--> */}
      <div class="md-form">
        <input type="text" id="Form-email1" class="form-control"/>
        <label for="Form-email1">Your email</label>
      </div>

      <div class="md-form pb-3">
        <input type="password" id="Form-pass1" class="form-control"/>
        <label for="Form-pass1">Your password</label>
        <p class="font-small blue-text d-flex justify-content-end">Forgot <a href="/counter" class="blue-text ml-1">
            Password?</a></p>
      </div>

      <div class="text-center mb-3">
        <button type="button" class="btn blue-gradient btn-block btn-rounded z-depth-1a">Sign in</button>
      </div>
      <p class="font-small dark-grey-text text-right d-flex justify-content-center mb-3 pt-2"> or Sign in
        with:</p>

      <div class="row my-3 d-flex justify-content-center">
        {/* <!--Facebook--> */}
        <button type="button" class="btn btn-white btn-rounded mr-md-3 z-depth-1a"><i class="fab fa-facebook-f blue-text text-center"></i></button>
        {/* <!--Twitter--> */}
        <button type="button" class="btn btn-white btn-rounded mr-md-3 z-depth-1a"><i class="fab fa-twitter blue-text"></i></button>
        {/* <!--Google +--> */}
        <button type="button" class="btn btn-white btn-rounded z-depth-1a"><i class="fab fa-google-plus-g blue-text"></i></button>
      </div>

    </div>

    {/* <!--Footer--> */}
    <div class="modal-footer mx-5 pt-3 mb-1">
      <p class="font-small grey-text d-flex justify-content-end">Not a member? <a href="signup" class="blue-text ml-1">
          Sign Up</a></p>
    </div>

  </div>
  {/* <!--/Form without header--> */}

</section></div>
  )
}
