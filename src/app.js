import './css/main.scss';
import angular from 'angular';
import uirouter from '@uirouter/angularjs';
import home from './js/home';
import routing from './app.config';

angular.module('app', [uirouter, home])
    .config(routing);