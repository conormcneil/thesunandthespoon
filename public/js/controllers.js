app.controller('SunController',function($scope,$http) {
  $scope.view = {};

  (function getPosts() {
    console.log('get posts');
    $http.get('/posts').then(function(data) {
      $scope.posts = data.data.data;
      console.log($scope.posts);
    })
  })();
})
