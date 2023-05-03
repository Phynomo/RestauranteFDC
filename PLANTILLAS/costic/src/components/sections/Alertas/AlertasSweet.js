import Swal from "sweetalert2";

export function alertSuccess(title, message, time) {
    var timerInterval;
    Swal.fire({
      title: title,
      html: message,
      timer: time,
      icon: 'success',
      onBeforeOpen: function () {
        Swal.showLoading();
      },
      onClose: function onClose() {
        clearInterval(timerInterval);
      }
    }).then(function (result) {
      if (result.dismiss === Swal.DismissReason.timer);
    });
  }

  export function alertError(title, message, time) {
    var timerInterval;
    Swal.fire({
      title: title,
      html: message,
      timer: time,
      icon: 'error',
      onBeforeOpen: function () {
        Swal.showLoading();
      },
      onClose: function onClose() {
        clearInterval(timerInterval);
      }
    }).then(function (result) {
      if (result.dismiss === Swal.DismissReason.timer);
    });
  }
