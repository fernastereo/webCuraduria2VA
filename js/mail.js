const setErrorAlert = (input) => {
  const parentControl = input.parentElement;
  parentControl.children[2].classList.add('visible');
};

const setSuccessAlert = (input) => {
  const parentControl = input.parentElement;
  parentControl.children[2].classList.remove('visible');
};

const checkInputs = (name, email, body) => {
  let result = true;

  if (name.value.trim() === "") {
    setErrorAlert(name);
    result = false;
  } else {
    setSuccessAlert(name);
  }
  if (email.value.trim() === "") {
    setErrorAlert(email);
    result = false;
  } else {
    setSuccessAlert(email);
  }
  if (body.value.trim() === "") {
    setErrorAlert(body);
    result = false;
  } else {
    setSuccessAlert(body);
  }

  return result;
};

const sendEmail = () => {
  const name = document.getElementById("nombre");
  const email = document.getElementById("email");
  const subject = document.getElementById("asunto");
  const body = document.getElementById("mensaje");

  if (!checkInputs(name, email, body)) return;

  Email.send({
    SecureToken: "2c0a952d-c47c-4bf6-a9dc-272f25851ae8",
    To: "curadurianumero2@hotmail.es",
    From: "contacto@curaduria2valledupar.co",
    Subject: `${subject.value}`,
    Body: `<strong>${name.value}</strong> ha enviado el siguiente mensaje a través de la página web:<br><br>${body.value}<br><br>Para responder escribir al correo: ${email.value}`,
  }).then(
    (name.value = ""),
    (email.value = ""),
    (subject.value = ""),
    (body.value = ""),
    Swal.fire({
      title: "Muchas gracias!",
      html: "Su mensaje fue enviado. Pronto nos comunicaremos con usted <br><strong>Curaduria Urbana N° 2 de Valledupar</strong>",
      icon: "success",
      showConfirmButton: false,
      timer: 5000,
    }),
  );
};
