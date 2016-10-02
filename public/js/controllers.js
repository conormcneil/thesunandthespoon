app.controller('SunController',function($scope,$http) {
  $scope.view = {};

  (function getPosts() {
    console.log('get posts');
    $http.get('/posts').then(function(data) {
      // console.log(data.data.images);
      $scope.view.posts = data.data.data;
      $scope.view.posts.images = data.data.images;
      console.log($scope.view.posts);
    })
  })();
})
