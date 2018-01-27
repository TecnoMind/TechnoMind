import angular from 'angular';
import template from '../template/paralax-section.html';

/**
 * Directive for inject  service section
 * @returns {{restrict: string, template}}
 */
function paralax() {
    return {
        restrict: 'E',
        template: template
    }
}

export default angular.module('directives.paralax', [])
    .directive('paralax', paralax)
    .name;