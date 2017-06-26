
import edite from './edite.ts'
import $ from 'jquery'
class PublicFn {
    constructor() {
        this.$ = $;
        this.edite = edite.call(this, $)
    }

}
export default PublicFn