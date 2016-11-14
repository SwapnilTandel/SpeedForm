var image;
var cropper;


function validateEmail(sEmail) {
  var filter = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;
  if (filter.test(sEmail)) {
    return true;
  }
  else {
    return false;
  }
}

function postError(type, message) {
  switch (type) {
    case "error":
      $("#messageBox").html("<strong>Error!</strong>&nbsp;" + message);
      $("#messageBox").parent().removeClass("alert-info");
      $("#messageBox").parent().addClass("alert-danger");
      break;
    case "info":
    
      $("#messageBox").html( "<strong>Info!</strong>&nbsp;" + message );
      $("#messageBox").parent().removeClass("alert-danger");
      $("#messageBox").parent().addClass("alert-info");
      break;
    default:
      $("#messageBox").html( "<strong>Info!</strong>&nbsp;" + message );
      $("#messageBox").parent().removeClass("alert-danger");
      $("#messageBox").parent().addClass("alert-info");
      break;
  }
}

function clearError() {
      // $("#messageBox").html( "<strong>Info!</strong>&nbsp;Going great." );
      $("#messageBox").parent().removeClass("alert-danger");
      $("#messageBox").parent().removeClass("alert-info");
}

window.onload = function () {
  'use strict';
  image = document.getElementById('image');
  var Cropper = window.Cropper;



  //      var minAspectRatio = 0.5;
  //      var maxAspectRatio = 1.5;
  cropper = new Cropper(image, {
    viewMode: 3,
    dragMode: 'move',
    checkCrossOrigin: false,
    //          autoCrop:false,
    zoomable: false,

    restore: false,
    guides: false,
    center: false,
    highlight: false,
    cropBoxMovable: false,
    cropBoxResizable: false,
    toggleDragModeOnDblclick: false,

    //                 aspectRatio: 16 / 9,
    //        autoCropArea: 0.65,

    //        ready: function () {
    //          var cropper = this.cropper;
    //          var containerData = cropper.getContainerData();
    //          var cropBoxData = cropper.getCropBoxData();
    //          var aspectRatio = cropBoxData.width / cropBoxData.height;
    //          var newCropBoxWidth;
    //
    //          if (aspectRatio < minAspectRatio || aspectRatio > maxAspectRatio) {
    //            newCropBoxWidth = cropBoxData.height * ((minAspectRatio + maxAspectRatio) / 2);
    //
    //            cropper.setCropBoxData({
    //              left: (containerData.width - newCropBoxWidth) / 2,
    //              width: newCropBoxWidth
    //            });
    //          }
    //        }
    ////          ,
    cropmove: function () {
      //          var cropper = this.cropper;
      this.cropper.clear()

      //          var cropBoxData = cropper.getCropBoxData();
      //          var aspectRatio = cropBoxData.width / cropBoxData.height;
      //
      //          if (aspectRatio < minAspectRatio) {
      //            cropper.setCropBoxData({
      //              width: cropBoxData.height * minAspectRatio
      //            });
      //          } else if (aspectRatio > maxAspectRatio) {
      //            cropper.setCropBoxData({
      //              width: cropBoxData.height * maxAspectRatio
      //            });
      //          }
    }
  });

  //        cropper.clear();
  //        console.log(cropper.getCropBoxData());
  cropper.setCropBoxData({ "left": 242.5, "top": 98, "width": 500, "height": 183.9375 });
  //        cropper.setDragMode('move');


  // function setHighlight(x, y) {
  //     x.style.background = "yellow";
  //     cropper.setCropBoxData({"left":100,"top":200,"width":100,"height":300});
  // }

  // document.getElementById("textboxOne").addEventListener("onfocus", function(){
  //     document.getElementById("textboxOne").style.background = "yellow";
  // });

  $(".positive-integer").numeric(
    { decimal: false, negative: false },
    function () { alert("Positive integers only"); this.value = ""; this.focus(); });
$(".numeric").numeric();
$("#messageBox").html("<strong>Info!</strong> Indicates a neutral informative change or action.");

  $("#textboxEmail").blur(function (event) {
    var sEmail = $('#textboxEmail').val();
    if ($.trim(sEmail).length == 0) {
      postError('error', 'Please enter valid email address');
      $(this).parent().addClass("has-error");
      event.preventDefault();
      $(this).focus()
      // event.stopPropagation();
      // event.stopImmediatePropagation();
    } else {
      if (validateEmail(sEmail)) {
        $(this).parent().removeClass("has-error");
        clearError();
        // alert('Email is valid');
        // $('#textboxEmail').addClass("has-error");
      }
      else {
        postError('error', 'Invalid Email Address');
        // alert('Invalid Email Address');
        // $('#textboxEmail').addClass("has-error");
        $(this).parent().addClass("has-error");
        event.preventDefault();
        $(this).focus()
              // event.stopPropagation();
      // event.stopImmediatePropagation();
      }
    }

  });

};

function setHighlight(x, y) {
  x.style.background = "yellow";
  cropper.setCropBoxData({ "left": 100, "top": 200, "width": 100, "height": 300 });
}