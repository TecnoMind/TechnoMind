import angular from 'angular';
import template from '../template/technologies-section.html';

function technologies() {
    return {
        restrict: 'E',
        template: template
    }
}

export default angular.module('directives.technologies', [])
    .directive('technologies', technologies)
    .name;