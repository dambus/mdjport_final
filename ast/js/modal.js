const modBtn = document.querySelectorAll(".mod-btn");
const modalContent = document.getElementById("modalContent");
const modalBody = modalContent.querySelector(".modal-body");
const closeButton = document.querySelectorAll(".closeModal");

const getData = function (link) {
  let xhr = new XMLHttpRequest();
  xhr.open("GET", link, true);
  xhr.setRequestHeader("content-type", "text/html");
  xhr.send();
  xhr.onreadystatechange = function (e) {
    if (xhr.readyState == 4 && xhr.status == 200) {
      modalBody.innerHTML = this.responseText;
    }
  };
};

const projectsModal = new bootstrap.Modal("#multiModal", {
  keyboard: true,
  backdrop: "static",
});

closeButton.forEach(function (btn) {
  btn.addEventListener("click", function () {
    projectsModal.toggle();
    document.querySelector(".modal-body").innerHTML = "";
  });
});

modBtn.forEach((element) => {
  element.addEventListener("click", function () {
    {
      let link = element.getAttribute("data-mod-content");
      getData(link);
      projectsModal.toggle();
    }
  });
});
