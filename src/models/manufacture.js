import { required, minLength, maxLength  } from "vuelidate/lib/validators"
import { modelContract } from "@/util/modelContract"

const attrs = {
    name: {required, minLength: minLength(3), maxLength: maxLength(30)}
};

export class ManufactureModel extends modelContract{

    constructor(data) {
        super( attrs, data);
    }

    static validate(){
        return { validations: {manufacture: attrs } }
    }

}
