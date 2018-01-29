export default class HomeController {
    constructor($location, $anchorScroll) {
        this.showServices = false;
        this.$location = $location;
        this.$anchorScroll = $anchorScroll;
    }

    navigateOnSections(section) {

        var newHash = section;
        if (this.$location.hash() !== newHash) {
            // set the $location.hash to `newHash` and
            // $anchorScroll will automatically scroll to it
            this.$location.hash(section);
        } else {
            // call $anchorScroll() explicitly,
            // since $location.hash hasn't changed
            this.$anchorScroll();
        }
    }

}