'use strict';

var hotelSearchButton = document.querySelector( ".hotel-search-button" );
var hotelSearchForm = document.querySelector( ".hotel-search-form" );
var form = hotelSearchForm.querySelector( 'form' );
var checkin = form.querySelector( '#checkin' );
var checkout = form.querySelector( '#checkout' );
var adults = form.querySelector( '#adults' );
var kids = form.querySelector( '#kids' );
var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem( "adults" );
  storage = localStorage.getItem( "kids" );
} catch ( err ) {
  isStorageSupport = false;
}

hotelSearchForm.classList.remove( "form-show" );

hotelSearchButton.addEventListener( "click", function( evt ) {
  evt.preventDefault();
  hotelSearchForm.classList.toggle( "form-show" );
  hotelSearchForm.classList.remove( "form-error" );
} );

document.addEventListener( "keydown", function( evt ) {
  if ( evt.keyCode === 27 ) {
    evt.preventDefault();
    if ( hotelSearchForm.classList.contains( "form-show" ) ) {
      hotelSearchForm.classList.remove( "form-show" );
    }
    if ( hotelSearchForm.classList.contains( "form-error" ) ) {
      hotelSearchForm.classList.remove( "form-error" );
    }
  }
} );

form.addEventListener( 'submit', function( evt ) {
  if ( !adults.value || !kids.value || !checkin.value || !checkout.value ) {
    evt.preventDefault();
    hotelSearchForm.classList.remove( "form-error" );
    void hotelSearchForm.offsetWidth;
    hotelSearchForm.classList.add( "form-error" );
  } else {
    console.log( "validated" );
    if ( isStorageSupport ) {
      localStorage.setItem( 'adults', adults.value );
      localStorage.setItem( 'kids', kids.value );
    }
  }
} );
