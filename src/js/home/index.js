import angular from 'angular';
import uirouter from '@uirouter/angularjs';

import routing from './home.routes';
import HomeController from './controller/src/home.controller';
import header from '../commons/directive/src/header';
import begin from '../home/directive/src/begin-section'
import contact from "../home/directive/src/contact-section"
import us from "../home/directive/src/us-section";
import services from "../home/directive/src/services-section";
import footer from "../commons/directive/src/footer";
import paralax from "../home/directive/src/paralax-section";

export default angular.module('app.home', [uirouter, header, begin, contact, us, services, footer, paralax])
    .config(routing)
    .controller('HomeController', HomeController)
    .name;