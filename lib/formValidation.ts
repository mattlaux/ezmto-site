export const formValidation = (event: React.FormEvent) => {
  const form = document.querySelector('.needs-validation') as HTMLFormElement;
  if(form) {
    if (!form.checkValidity()) {
      event.stopPropagation();
      form.classList.add('was-validated');
      return false;
    }
    else {
      form.classList.remove('was-validated');
      return true;
    }
  }
};