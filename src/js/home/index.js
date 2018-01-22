import angular from 'angular';
import uirouter from '@uirouter/angularjs';

import routing from './home.routes';
import HomeController from './controller/src/home.controller';
import header from '../commons/directive/src/header';


export default angular.module('app.home', [uirouter, header])
    .config(routing)
    .controller('HomeController', HomeController)
    .name;