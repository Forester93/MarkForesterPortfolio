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
                  .html(
                    `<i class="fa fa-cubes" aria-hidden="true"></i> ${item.name}`
                  )
                  .addClass("btn btn-success p-1 m-3 w-50")
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
  "horiseon-solution-services"
);
