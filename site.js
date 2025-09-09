
document.addEventListener('DOMContentLoaded', function() {
  var toggle = document.querySelector('#nav-toggle');
  var menu = document.querySelector('#nav-menu');
  if (toggle && menu) { toggle.addEventListener('click', function(){ menu.classList.toggle('open');}); }
  var form = document.querySelector('form[data-validate]');
  if (form) { form.addEventListener('submit', function(e) {
    var required = form.querySelectorAll('[required]');
    for (var i=0;i<required.length;i++){ var el=required[i]; if(!el.value.trim()){ e.preventDefault(); alert('Please fill in all required fields.'); el.focus(); return; } }
  }); }
});
