import { required, minLength, maxLength } from "vuelidate/lib/validators"
import { modelContract } from "@/util/modelContract"

const attrs = {
    name: {required, minLength: minLength(3), maxLength: maxLength(30)},
    unity: {required, maxLength: maxLength(20)},
    description: {minLength: minLength(5)},
};

export class FuelModel extends modelContract{

    constructor(data) {
        super( attrs, data);
    }

    static validate(){
        return { validations: {fuel: attrs } }
    }

}
