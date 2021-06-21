async function getRepos(user, ...exclude) {
  try {
    let repoArr;
    let userRepo = await fetch(`https://api.github.com/users/${user}/repos`)
      .then((response) => response.json())
      .then((response) => {
        $("#trialRepo").remove();
        let Repos = $("#repositories");
        Repos.addClass("bg-black");
        for (let item of response) {
          if (exclude.indexOf(item.name) == -1) {
            let newRepo = $("<article>")
              .addClass("repository")
              .append(
                $("<a>")
                  .attr("href", `https://www.github.com/${user}/${item.name}`)
                  .attr("target", "_blank")
                  .append(
                    $("<button>").html(
                      `<i class="fas fa-arrow-right"  aria-hidden="true"></i> ${item.name}`
                    )
                  )
                  .css("font-size", "large")
              );

            Repos.append(newRepo);
          }
        }
      });
    return repoArr;
  } catch (err) {
    console.log(err);
  }
}
getRepos(
  "Forester93",
  "SurveryForm",
  "Oud",
  "prework-about-me",
  "Tabled",
  "technical-documentation-template",
  "horiseon-solution-services",
  "MarkForesterPortfolio",
  "the-code-tree",
  "forester93"
);

$(document).ready(function () {
  $(".carousel").owlCarousel({
    loop: true,
    autoplayTimeOut: 2000,
    autoplayHoverPause: true,
    autoHeight: true,
    margin: 30,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      314: {
        items: 1,
        nav: false,
      },
      668: {
        items: 2,
        nav: false,
      },
      // 1250: {
      //   items: 3,
      //   nav: false,
      // },
    },
  });
});

$("#example").remove();

{
  /* <div class="card" id="example">
<img class="card-img-top" src="..." alt="Card image cap">
<div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">This is a longer card with supporting text below as a natural lead-in
        to additional content. This content is a little bit longer.</p>
    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
</div>
</div> */
}

for (let project of projects) {
  $("#projectsCarousel").append(
    $("<div>")
      .addClass("card")
      .append(
        $("<img>")
          .addClass("card-img-top")
          .attr(
            "src",
            `./assets/images/screenshot(${projects.indexOf(project)}).png`
          )
      )
      .append(
        $("<div>")
          .addClass("card-body")
          .append($("<h5>").addClass("card-title").text(project.name))
          .append(
            $("<p>")
              .addClass("card-text")
              .text(`Project Description: ${project.description}`)
          )
          .append(
            $("<p>")
              .addClass("card-text")
              .append(
                $("<strong>")
                  // .addClass("text-muted")
                  .text(`Technologies Used: ${project.technologies.join(", ")}`)
              )
          )
          .append(
            $("<p>")
              .addClass("card-text")
              .append(
                $("<strong>")
                  .addClass("text-muted")
                  .text(`Project Type: ${project.type}`)
              )
          )
          .append(
            $("<p>")
              .addClass("card-text")
              .append(
                $("<strong>")
                  // .addClass("text-muted")
                  .text(`Mark's Role: ${project.role}`)
              )
          )
          .append(() => {
            if (project.repository != "")
              return $("<a>")
                .attr("href", project.repository)
                .attr("target", "_blank")
                .append(
                  $("<button>").html(
                    `<i class="fas fa-arrow-right"  aria-hidden="true"></i> Go to Repository`
                  )
                )
                .css("font-size", "large");
          })
          .append($("<hr>"))
          .append(() => {
            return $("<a>")
              .attr("href", project.link)
              .attr("target", "_blank")
              .append(
                $("<button>").html(
                  `<i class="fas fa-arrow-right"  aria-hidden="true"></i>  ${project.linkDescription}`
                )
              )
              .css("font-size", "large");
          })
      )
  );
}
