const sendEmail = () => {
  const body = document.getElementById('text').value;
  const subject = document.getElementById('subject').value;
  const link = 'mailto:lachezar_dimitrov@outlook.com?subject=subject&body=body';
  window.location.href = link;
  alert('Thanks for your purchase!');
  // window.location.reload();
};
