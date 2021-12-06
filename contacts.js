const sendEmail = () => {
  const body = document.getElementById('text').value;
  const subject = document.getElementById('subject').value;

  if (!body || !subject || body.replace(/\s/g, '') === ''
  || subject.replace(/\s/g, '') === '' || body.length < 2){
    alert('Fill the forms properly!');
    return;
  };
  const link = `mailto:lachezar_dimitrov@outlook.com?subject=${subject}&body=${escape(body)}`;
  console.log('asd')
  window.location.href = link;
  alert('Thanks for your purchase!');
  document.getElementById('text').value = '';
  document.getElementById('subject').value = '';
}
