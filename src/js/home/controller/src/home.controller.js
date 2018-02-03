
const timeOut = new WeakMap();
const location = new WeakMap();
const anchorScroll = new WeakMap();
class HomeController {
    constructor($timeout,$location, $anchorScroll) {
        this.showServices = false;
        timeOut.set(this,$timeout);
        location.set(this,$location);
        anchorScroll.set(this,$anchorScroll);
    }

    navigateOnSections(section) {

        if (location.get(this).hash() !== section) {
            location.get(this).hash(section);
            console.log(location.get(this).hash());
        } else {
            console.log(location.get(this).hash());
            timeOut.get(this)(() => {
                anchorScroll.get(this)();
            },1000);

        }
    }

}
HomeController.$inject = ['$timeout', '$location','$anchorScroll'];
export default HomeController;