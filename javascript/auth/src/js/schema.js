/* Form Data Schema
schema = {
  inputName1: { value: any, get isValid: () => boolean, error: string },
  inputName2: { value: any, get isValid: () => boolean, error: string },
  get isValid: () => boolean
}
*/

const signinSchema = {
  userid: {
    value: '',
    get isValid() {
      return /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/.test(
        this.value
      );
    },
    error: '이메일 형식에 맞게 입력해 주세요.',
  },
  password: {
    value: '',
    get isValid() {
      return /^[A-Za-z0-9]{6,12}$/.test(this.value);
    },
    error: '영문 또는 숫자를 6~12자 입력하세요.',
  },
  get isValid() {
    return this.userid.isValid && this.password.isValid;

    // console.log(this);
    // Object.keys(this)
    //   .filter(key => key !== 'isValid')
    //   .every(key => this[key].isValid);
  },
};

const signupSchema = {
  ...signinSchema,
  username: {
    value: '',
    get isValid() {
      return !!this.value;
    },
    error: '이름을 입력해 주세요.',
  },
  'confirm-password': {
    value: '',
    get isValid() {
      return signupSchema.password.value === this.value;
    },
    error: '패스워드가 일치하지 않습니다.',
  },
  get isValid() {
    return (
      this.userid.isValid &&
      this.username.isValid &&
      this.password.isValid &&
      this['confirm-password'].isValid
    );
  },
};

export { signinSchema, signupSchema };
