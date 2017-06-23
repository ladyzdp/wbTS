import SingleSelect from './component/singleSelect.ts'
import SingleFill from './component/singleFill.ts'
import './styles/main.scss'
class App {
    constructor() {
        this.init()
        this.singleSelect();
        this.singleFill();
    };
    init() {
     console.log(this)   
    };
    singleSelect() {
        return new SingleSelect()
    };
    singleFill() {
        return new SingleFill()
    }
}
new App()