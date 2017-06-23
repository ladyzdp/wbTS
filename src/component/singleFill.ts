import $ from 'jquery'
import SingleFillTpl from '../template/singleFill.html'
class SingleFill {
    constructor() {
        this.init()
    };
    init() {
        $("#app").append(SingleFillTpl());
        $("#abc").html('dhhdsdiuew');
    };
}
export default SingleFill