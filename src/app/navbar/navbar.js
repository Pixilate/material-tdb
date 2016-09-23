angular
  .module('app')
  .component('navbar', {
    templateUrl: 'app/navbar/navbar.html',
    controller: function ($mdSidenav, $document) {
      var self = this;

      self.toggleSideNav = function () {
        $mdSidenav('side-nav').toggle();
        var $body = angular.element($document[0].body);

        if ($mdSidenav('side-nav').isOpen()) {
          $body.addClass('no-scroll');
        }

        $mdSidenav('side-nav').onClose(function () {
          $body.removeClass('no-scroll');
        });
      };
    }
  });
