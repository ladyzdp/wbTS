// import SingleSelect from './component/singleSelect.ts'
import * as components from './component/index'

class App {
    $: Object;
    constructor($) {
        this.init()
    };
    init() {
        new components.SingleFill();
        new components.SingleSelect();
    };
}
export default App