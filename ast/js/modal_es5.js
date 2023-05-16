"use strict";

var modBtn = document.querySelectorAll(".mod-btn");
var modalContent = document.getElementById("modalContent");
var modalBody = modalContent.querySelector(".modal-body");
var closeButton = document.querySelectorAll(".closeModal");
var getData = function getData(link) {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", link, true);
  xhr.setRequestHeader("content-type", "text/html");
  xhr.send();
  xhr.onreadystatechange = function (e) {
    if (xhr.readyState == 4 && xhr.status == 200) {
      modalBody.innerHTML = this.responseText;
    }
  };
};
var projectsModal = new bootstrap.Modal("#multiModal", {
  keyboard: true,
  backdrop: "static",
});
closeButton.forEach(function (btn) {
  btn.addEventListener("click", function () {
    projectsModal.toggle();
    document.querySelector(".modal-body").innerHTML = "";
  });
});
modBtn.forEach(function (element) {
  element.addEventListener("click", function () {
    {
      var link = element.getAttribute("data-mod-content");
      getData(link);
      projectsModal.toggle();
    }
  });
});
