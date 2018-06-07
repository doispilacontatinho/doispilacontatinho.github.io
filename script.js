btn = document.getElementById('btn')
box = document.getElementById('box')
bunny = document.getElementById('bunny')

btn.addEventListener('click', function() {
  box.style.display = 'none';
  bunny.style.display = 'block';

  setTimeout(function () {
    window.location.href = 'https://goo.gl/forms/zvDGEZaZPm8vTcNk1'
  }, 4000)
})
