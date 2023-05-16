import data from "../json/projects.json" assert { type: "json" };

const techList = {
  html: "fa-brands fa-html5",
  css: "fa-brands fa-css3-alt",
  javascript: "fa-brands fa-square-js",
  bootstrap: "fa-brands fa-bootstrap ",
  sass: "fa-brands fa-sass",
  react: "fa-brands fa-react",
};

function populateProjects() {
  const parentElement = document.getElementById("projectCards");
  let projectData = [...data];
  const arrUsedTech = [];

  projectData.forEach(async function (project) {
    const popUsedTech = function () {
      project.usedTech.forEach((tech) => {
        let entries = Object.entries(techList);
        entries.map(([key, val] = entry) => {
          if (tech == key) {
            arrUsedTech.push(
              `<i class="${val} card-content-usedtech--icon"></i>`
            );
          }
        });
      });
    };
    const clearArrUsedTech = function () {
      while (arrUsedTech.length > 0) {
        arrUsedTech.pop();
      }
    };
    popUsedTech();
    let markup = `
  <!-- card start -->
          <div
            class="card col-sm-12 col-md-6 col-lg-6"
            style="background-image: url(${project.bgImage})"
          >
            <div class="card-content">
              <h3 class="card-title">${project.title}</h3>
              <p class="card-body">
                ${project.description}
              </p>
              
              <div class="card-content-usedtech">
     
              ${arrUsedTech.join(" ")}
    
              </div>
              <div class="card-content-icons">
              <a
                class="mod-btn"
                data-bs-toggle="modal"
                data-bs-target="#multiModal"
                data-mod-content="${project.infoHandle}"
              >
                  <i class="fa-solid fa-circle-info"></i>
                </a>
                <a href="${project.link}" target="_blank">
                  <i class="fa-solid fa-arrow-up-right-from-square"></i>
                </a>
              </div>
            </div>
          </div>
          <!--card end-->`;
    parentElement.insertAdjacentHTML("afterbegin", markup);
    clearArrUsedTech();
  });
}

populateProjects();
