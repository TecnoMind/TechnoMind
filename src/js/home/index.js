import angular from 'angular';
import uirouter from '@uirouter/angularjs';

import routing from './home.routes';
import HomeController from './controller/src/home.controller';
import header from '../commons/directive/src/header';
import begin from '../home/directive/src/begin-section'
import contact from "../home/directive/src/contact-section"

export default angular.module('app.home', [uirouter, header, begin, contact])
    .config(routing)
    .controller('HomeController', HomeController)
    .name;