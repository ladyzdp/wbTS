import PublicFn from './index'
let edite = ($) => {
    return (className) => {
        $(className).on('click',() => {
            console.log(this)
        });
    }
}
export default edite