import angular from 'angular';
import template from '../template/parallax-section.html';

/**
 * Directive for inject  service section
 * @returns {{restrict: string, template}}
 */
function parallax() {
    return {
        restrict: 'E',
        template: template
    }
}

export default angular.module('directives.parallax', [])
    .directive('parallax', parallax)
    .name;