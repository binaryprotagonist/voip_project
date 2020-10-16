/*
* required polyfills
*/
import "core-js";
import 'core-js/features/set/map';

/** IE9, IE10 and IE11 requires all of the following polyfills. **/

(function () {

  if ( typeof window.CustomEvent === "function" ) return false

  function CustomEvent ( event, params ) {
    params = params || { bubbles: false, cancelable: false, detail: undefined }
    var evt = document.createEvent( 'CustomEvent' )
    evt.initCustomEvent( event, params.bubbles, params.cancelable, params.detail )
    return evt
  }

  CustomEvent.prototype = window.Event.prototype

  window.CustomEvent = CustomEvent
})()
