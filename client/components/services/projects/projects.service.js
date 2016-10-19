'use strict';

angular.module('rtpApp')
    .service('projects', function($http) {
        var baseURL = "/api/projects";
        var mapURL = '/api/maps';
        var currentProject = {};
        var mapProjectList = {};

        //Query all projects
        this.findAll = function() {
            return $http.get(baseURL + '/findAll', {
                cache: false
            });
        };

        //Find single project based on rtpId
        this.findOne = function(rtpId) {
            return $http.get(baseURL + '/findOne/' + rtpId);
        };

        //Set current project
        this.setCurrentProject = function(project) {
            currentProject = project;
        }

        //Retrieve current project
        this.getCurrentProject = function() {
            return currentProject;
        }

        //Set projects to view on Map
        this.setViewOnMap = function(maps) {
            mapProjectList = maps;
        }

        //Retrieve project projects to view on map
        this.getViewOnMap = function() {
            return mapProjectList;
        }

    });