import $ from 'jquery'
import SingleSelectTpl from '../template/singleSelect.html'
class SingleSelect {
    constructor() {
        console.log(11222)
        this.init()
    };
    init() {
        $("#app").html(SingleSelectTpl())
    };
}
export default SingleSelect