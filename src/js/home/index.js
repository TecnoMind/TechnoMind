import angular from 'angular';
import uirouter from '@uirouter/angularjs';

import routing from './home.routes';
import HomeController from './controller/src/home.controller';
import begin from '../home/directive/src/begin-section';
import footer from '../commons/directive/src/footer';
import header from '../commons/directive/src/header';
import us from '../home/directive/src/us-section';
import contact from '../home/directive/src/contact-section';
import services from "./directive/src/services-section"

export default angular.module('app.home', [uirouter, header, footer, begin, us, contact,services])
    .config(routing)
    .controller('HomeController', HomeController)
    .name;