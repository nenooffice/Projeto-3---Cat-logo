  const close = document.querySelector('#close-message');
  const close_message = document.getElementById('message');

  close.addEventListener('click', function(){
    close_message.style.display = 'none';
  });

  setTimeout(() => {
    close_message.style.display = 'none';
  }, 3000);

