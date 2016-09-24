var kjua;

angular
  .module('app')
  .component('main', {
    templateUrl: 'app/main.html',
    controller: function ($http, $log, $mdDialog, $document) {
      var self = this;

      self.titles = [];

      self.titleCount = function () {
        return self.titles.length;
      };

      self.generateQr = function (ev, title) {
        $mdDialog.show({
          contentElement: '#qr-dialog',
          parent: angular.element($document[0].body),
          targetEvent: ev,
          clickOutsideToClose: true
        });

        var ico = $document[0].getElementById('ico-' + title.titleid);

        var qrCode = kjua({
          render: 'canvas',
          crisp: true,
          minVersion: 1,
          ecLevel: 'H',
          size: '300',
          fill: '#333',
          back: '#fff',
          text: 'https://api.titledb.com/v0/proxy/' + title.titleid,
          rounded: 80,
          quiet: 0,
          mode: 'image',
          mSize: 30,
          mPosX: 50,
          mPosY: 50,
          image: ico
        });

        angular.element($document[0].querySelector('#title-name')).empty().text(title.name);
        angular.element($document[0].querySelector('#title-qr-wrapper')).empty().append(qrCode);
      };

      self.closeDialog = function () {
        $mdDialog.hide();
      };

      $http.get('https://api.titledb.com/v0/')
        .error(function (err) {
          $log.error(err);
        })
        .success(function (data) {
          self.titles = data;
        });
    }
  });
