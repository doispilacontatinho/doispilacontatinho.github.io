btn = document.getElementById('btn')
box = document.getElementById('box')
bunny = document.getElementById('bunny')

btn.addEventListener('click', function() {
  box.style.display = 'none';
  bunny.style.display = 'block';

  setTimeout(function () {
    window.location.href = 'https://stackoverflow.com/questions/503093/how-do-i-redirect-to-another-webpage'
  }, 4000)
})