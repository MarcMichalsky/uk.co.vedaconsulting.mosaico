(function(angular, $, _) {
  // Example usage: <crm-mosaico-subject-list crm-mailing="myMailing" />
  angular.module('crmMosaico').directive('crmMosaicoSubjectList', function(crmUiHelp) {
    return {
      scope: {
        crmMailing: '@'
      },
      templateUrl: '~/crmMosaico/SubjectList.html',
      link: function (scope, elm, attr) {
        scope.$parent.$watch(attr.crmMailing, function(newValue){
          scope.mailing = newValue;
        });
        scope.ts = CRM.ts(null);
        scope.hs = crmUiHelp({file: 'CRM/Mailing/MailingUI'});

      }
    };

  });
})(angular, CRM.$, CRM._);
