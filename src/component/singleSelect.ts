import PublicFn from '../publicFn/index'
import { singleSelectTpl } from '../template/index.js'

class SingleSelect extends PublicFn {
    constructor() {
        super()
        var $ = this.$;
        this.init()
        this.event()
    }
    init() {
        this.$("#app").append(singleSelectTpl)
    };
    event() {
        this.edite(".item-con")
    }
}
export default SingleSelect