import { required, minLength, integer } from "vuelidate/lib/validators"
import { modelContract } from "@/util/modelContract"

const attrs = {
    name: {required, minLength: minLength(3)},
    wheels: {required, integer},
};

export class TypeVehicleModel extends modelContract{

    constructor(data) {
        super( attrs, data);
    }

    static validate(){
        return { validations: {type_v: attrs } }
    }

}
