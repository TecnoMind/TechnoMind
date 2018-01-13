import './css/main.scss';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import angular from 'angular';
import material  from 'angular-material'
import animate from 'angular-animate';
import uirouter from '@uirouter/angularjs';
import home from './js/home';
import routing from './app.config';

angular.module('app', [uirouter, home,material, animate])
    .config(routing);