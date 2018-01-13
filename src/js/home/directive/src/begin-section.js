import angular from 'angular';
import template from '../template/begin-section.html';

function begin() {
    return {
        restrict: 'E',
        template: template
    }
}

export default angular.module('directives.begin', [])
    .directive('begin', begin)
    .name;