function applicationFiltration() {
  const buttons = document.querySelectorAll("._filter-button");
  const applications = document.querySelectorAll(".marker");

  function filter(category, markers) {
    markers.forEach((marker) => {
      const isMarkerFiltered = marker.classList.contains(category);
      const isShowAll = category === "All";
      if (!isMarkerFiltered && !isShowAll) {
        marker.classList.add("hide");
      } else {
        marker.classList.remove("hide");
      }
    });
  }

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const currentCategory = button.dataset.filter;
      filter(currentCategory, applications);
    });
  });
}
applicationFiltration();

function showSubFilter(target)
{
  console.log(target)
  hideSubFilter();
  target.classList.toggle('filter-button--active');
}
function hideSubFilter()
{
  document.querySelectorAll('.filter-button').forEach(marker => marker.classList.remove('filter-button--active'));
}
// $("span[title]").click(function (e) {
//   var $title = $(this).find(".marker");
//   if (!$title.length) {
//     $(this).append('<span class="marker">' + $(this).attr("title") + '</span>');
//   } else {
//     $title.remove();
//   }
// })
$('span').tooltipster({
   animation: 'fade',
   delay: 200,
   theme: 'tooltipster-punk',
   trigger: 'click'
});


