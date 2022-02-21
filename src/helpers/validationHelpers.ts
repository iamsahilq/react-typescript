import defaultLengths from './inputLengthDefault';

const nameValidation = (
  name: string,
  min = defaultLengths.minNameLength,
  max = defaultLengths.maxNameLength,
) => {
  const valError: string[] = [];
  if (name.length < min) valError.push(`Name length must be more than ${min}.`);
  if (name.length > max) valError.push(`Name length must be less than ${max}.`);
  return valError.join(' ,');
};

const emailValidation = (email: string) => {
  const regexp =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const validEmail = regexp.test(email);
  if (validEmail) return '';
  return 'Invalid Email';
};

const passwordValidation = (password: string) => {
  const regexp =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
  const validPassword = regexp.test(password);
  if (validPassword) return '';
  return 'Minimum eight and maximum 10 characters,\
  at least one uppercase letter, one lowercase letter,\
  one number and one special character;';
};

export { nameValidation, emailValidation, passwordValidation };
