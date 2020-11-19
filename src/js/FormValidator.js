export class FormValidator {
  constructor(form) {
    this._form = form;
    this._button = this._form.querySelector('button');
    this._validate = this._validate.bind(this);
  }

  _checkInputValidity(input) {
    const error = input.parentNode.querySelector('.footer__error');
    const errorMessages = {
      validationLengthShort: 'Должно быть больше симвлов',
      validationLengthLong: 'Должно быть меньше символов',
      requiredInput: 'Это обязательное поле',
      patternValid: 'Несоответствующий формат',
    };

    if (input.validity.valueMissing) {
      error.classList.add('footer__error_active');
      input.setCustomValidity(errorMessages.requiredInput);
      error.textContent = input.validationMessage;
      return false;
    }
    if (input.validity.tooShort) {
      error.classList.add('footer__error_active');
      input.setCustomValidity(errorMessages.validationLengthShort);
      error.textContent = input.validationMessage;
      return false;
    }
    if (input.validity.tooLong) {
      error.classList.add('footer__error_active');
      input.setCustomValidity(errorMessages.validationLengthLong);
      error.textContent = input.validationMessage;
      return false;
    }
    if (input.validity.patternMismatch) {
      error.classList.add('footer__error_active');
      input.setCustomValidity(errorMessages.patternValid);
      error.textContent = input.validationMessage;
      return false;
    } else {
      error.classList.remove('footer__error_active');
      input.setCustomValidity('');
      return true;
    }
  }

  setEventListeners() {
    this._form.addEventListener('input', this._validate);
  }

  _validate(evt) {
    this._checkInputValidity(evt.target);
    this._setSubmitButtonState(this._form.checkValidity());
  }

  _setSubmitButtonState(isValidForm) {
    if (isValidForm) {
      this._button.removeAttribute('disabled');
    } else {
      this._button.setAttribute('disabled', true);
    }
  }
}
