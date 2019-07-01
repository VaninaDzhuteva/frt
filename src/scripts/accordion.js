// Toggle plus, minus icon on click
const collapsBtn = document.querySelectorAll('.btn[data-toggle="collapse"]');

collapsBtn.forEach(e => {
  e.addEventListener('click', () => {
    if (e.lastElementChild.classList.contains('bg-minus')) {
      e.lastElementChild.classList.add('bg-plus');
      e.lastElementChild.classList.remove('bg-minus');
    }
    else if (e.lastElementChild.classList.contains('bg-plus')) {
      e.lastElementChild.classList.add('bg-minus');
      e.lastElementChild.classList.remove('bg-plus');
    }
  });
});

// Accordion one panel always open
// $('.collapse').on('hidden.bs.collapse', function () {
//   // read the data-default value
//   var defaultDiv = $($(this).data("parent")).data("default");
//   // show the default panel
//   $('.collapse').eq(defaultDiv - 1).collapse('show');
// });