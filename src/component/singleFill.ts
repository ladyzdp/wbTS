import PublicFn from '../publicFn/index'
import { singleFillTpl } from '../template/index.js'

class SingleFill extends PublicFn {
    constructor() {
        super()
        var $ = this.$;
        this.init()
    }
    init() {
        this.$("#app").append(singleFillTpl)
    }
}
export default SingleFill