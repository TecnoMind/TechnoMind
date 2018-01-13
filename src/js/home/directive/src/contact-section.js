import angular from 'angular';
import template from '../template/contact-section.html';

function contact() {
    return {
        restrict: 'E',
        template: template
    }
}

export default angular.module('directives.contact', [])
    .directive('contact', contact)
    .name;