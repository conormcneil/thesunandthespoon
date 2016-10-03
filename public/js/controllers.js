app.controller('SunController',function($scope,$http) {
  $scope.view = {};


  function getImages(id,i) {
    $http.post('/images/id',{id:id}).then(function(data) {
      $scope.view.posts[i].images = data.data;
    });
  };
  function getCategory(id,i) {
    $http.post('/categories/id',{id:id}).then(function(data) {
      $scope.view.posts[i].category = data.data.category;
    });
  };
  (function getPosts() {
    $http.get('/posts').then(function(data) {
      $scope.view.posts = data.data.data;
      for (var i = 0; i < $scope.view.posts.length; i++) {
        getImages($scope.view.posts[i].id,i);
        getCategory($scope.view.posts[i].category_id,i)
      };
    });
  })();

  window.setTimeout(function() {
    console.log($scope.view.posts);
  },2000);

});
