import angular from 'angular';
import template from '../template/us-section.html';

function us() {
    return {
        restrict: 'E',
        template: template
    }
}

export default angular.module('directives.us', [])
    .directive('us', us)
    .name;