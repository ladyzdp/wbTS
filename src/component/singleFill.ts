import PublicFn from '../publicFn/index'
import { handle } from '../template/index.js'

class SingleFill extends PublicFn {
    constructor() {
        super()
        var $ = this.$;
        this.init()
    }
    init() {
        this.$("#app").append(handle)
    }
}
export default SingleFill