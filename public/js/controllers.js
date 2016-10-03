app.controller('SunController',function($scope,$http) {
  $scope.view = {};


  function getImages(id,i) {
    console.log('get images');
    console.log(id,i);
    $http.post('/images/id',{id:id}).then(function(data) {
      console.log(data.data);
      $scope.view.posts[i].images = data.data;
      console.log($scope.view.posts[i]);
    });
  }
  (function getPosts() {
    $http.get('/posts').then(function(data) {
      $scope.view.posts = data.data.data;
      // $scope.view.posts[0].images = data.data.images;
      for (var i = 0; i < $scope.view.posts.length; i++) {
        getImages($scope.view.posts[i].id,i);
        console.log($scope.view.posts[i]);
      }
    })
  })();

  window.setTimeout(function() {
    console.log($scope.view.posts);
  },2000)

})
