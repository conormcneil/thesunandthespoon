app.controller('SunController',function($scope,$http) {
  $scope.view = {};

  (function getPosts() {
    console.log('get posts');
    $http.get('/posts').then(function(data) {
      $scope.view.posts = data.data.data;
      $scope.view.posts[0].images = data.data.images;
    })
  })();
})
