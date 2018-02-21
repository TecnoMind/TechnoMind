import angular from 'angular';
import template from '../template/technologies-section.html';

/**
 * Directive for inject  service section
 * @returns {{restrict: string, template}}
 */
function services() {
    return {
        restrict: 'E',
        template: template
    }
}

export default angular.module('directives.services', [])
    .directive('services', services)
    .name;