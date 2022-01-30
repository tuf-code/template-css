$(document).ready(function () {
  applyStyle();
});

function applyStyle() {
  const trigger = $('.action-menu');
  trigger.on('click', function () {
    $('link').remove();
    const id = this.textContent.toLowerCase().replace(' ', '');
    if (id === 'nostylesheet') {
      return false;
    }
    const link = $('<link>').attr({
      rel: 'stylesheet',
      href: `assets/css/${id}.css`,
      type: 'text/css',
    });
    $('head').html(link);
    return false;
  });
}