// async function getRepos(user, ...exclude) {
//   try {
//     let repoArr;
//     let userRepo = await fetch(`https://api.github.com/users/${user}/repos`)
//       .then((response) => response.json())
//       .then((response) => {
//         $("#trialRepo").remove();
//         let Repos = $("#repositories");
//         Repos.addClass("bg-black");
//         for (let item of response) {
//           if (exclude.indexOf(item.name) == -1) {
//             let newRepo = $("<article>")
//               .addClass("repository")
//               .append(
//                 $("<a>")
//                   .attr("href", `https://www.github.com/${user}/${item.name}`)
//                   .attr("target", "_blank")
//                   .append(
//                     $("<button>").html(
//                       `<i class="fas fa-arrow-right"  aria-hidden="true"></i> ${item.name}`
//                     )
//                   )
//                   .css("font-size", "large")
//               );

//             Repos.append(newRepo);
//           }
//         }
//       });
//     return repoArr;
//   } catch (err) {
//     console.log(err);
//   }
// }
// getRepos(
//   "Forester93",
//   "SurveryForm",
//   "Oud",
//   "prework-about-me",
//   "Tabled",
//   "technical-documentation-template",
//   "horiseon-solution-services",
//   "MarkForesterPortfolio",
//   "the-code-tree",
//   "forester93"
// );

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

{
  /* <div class="container">
<div class="card my-2" >
  <h5 class="card-header">A great title goes here.</h5>
  <div class="card-body" >
    <p class="card-text">Your unique content goes here... Write away.</p>
    <p class="text-muted">- {{account.username}}</p>
    <button class="launchEntry" data-toggle="modal" data-target="#entryModal">📜 Add Entry</button>
  </div>
</div>
{{#if userEntriesData}}
    {{#each userEntriesData}}
    {{> userEntries-details}}
    {{/each}}
{{/if}}



</div> */
}

for (let project of projects) {
  $("#projectsContainer").append(
    $("<div>")
      .addClass("card container my-2")
      .css("display", "inline-block")
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
          .append(
            $("<h5>")
              .addClass("card-header")
              .html(`<strong>${project.name}</strong>`)
          )
          .append(
            $("<div>")
              .addClass("card-body")
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
                      .text(
                        `Technologies Used: ${project.technologies.join(", ")}`
                      )
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
      )
  );
}
