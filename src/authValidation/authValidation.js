export const checkInputs = (name, value) => {
  const nameCheck = new RegExp(/^[a-zA-Z ]+$/)
  const emailCheck = new RegExp(/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/)
  const passwordCheck = new RegExp(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/
  )

  switch (name) {
    case 'firstname':
      if (!nameCheck.test(value)) {
        return {
          isValid: false,
          msg: 'Invalid Name Format',
        }
      }
      return { isValid: true, msg: 'Valid Name Format' }
    case 'lastname':
      if (!nameCheck.test(value)) {
        return {
          isValid: false,
          msg: 'Invalid Name Format',
        }
      }
      return { isValid: true, msg: 'Valid Name Format' }
    case 'email':
      if (!emailCheck.test(value)) {
        return {
          isValid: false,
          msg: 'Invalid Email Id',
        }
      }
      return { isValid: true, msg: 'Valid Email Id' }
    case 'password':
      if (!passwordCheck.test(value)) {
        return {
          isValid: false,
          msg: 'Invalid Password, must contain 8 characters, at least one uppercase, one lowercase, one number and one special character',
        }
      }
      return { isValid: true, msg: 'Valid Password' }
    default:
      return { isValid: true, msg: '' }
  }
}
