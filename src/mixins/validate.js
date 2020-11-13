import { required, email, minLength } from "vuelidate/lib/validators";

export const validAuth =  {
    validations: {
        login: {required, email, minLength: minLength(4)},
        password: {required, minLength: minLength(4)}
    }
}
export const validForgotPass =  {
    validations: {
        login: {required, email, minLength: minLength(4)},
        password: {required, minLength: minLength(4)},
        password_repeat: {required, minLength: minLength(4)},
    }
}
export const inputCheckIsValid =  {
    methods: {
        mix_inputCheckIsValid (val, event) {
            if (val.$anyError) {
                event.target.classList.add('form__input-shake');
                setTimeout(() => {
                    event.target.classList.remove('form__input-shake');
                }, 600)
            }
        }
    }
}
