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
