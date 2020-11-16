import { required, minLength, integer } from "vuelidate/lib/validators"
import { modelContract } from "@/util/modelContract"

const attrs = {
    name: {required, minLength: minLength(3)},
    wheels: {required, integer},
};

export class TypeVehicleModel extends modelContract{

    constructor(data) {
        super( attrs, data);
        this.set('wheels', 4)
    }

    static validate(){
        return { validations: {typeV: attrs } }
    }

    resetAttr(obj){
        super.resetAttr(obj)
        this.set('wheels', 4)
    }

}
