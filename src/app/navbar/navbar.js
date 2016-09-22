angular
  .module('app')
  .component('navbar', {
    templateUrl: 'app/navbar/navbar.html',
    controller: function ($mdSidenav) {
      var self = this;

      self.toggleSideNav = function () {
        $mdSidenav('side-nav').toggle();
      };
    }
  });
