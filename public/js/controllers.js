app.controller('SunController',function($scope,$http,$stateParams) {
  $scope.view = {};
  $scope.users = {};
  $scope.forms = {
    menu: false // false
  };
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
  // IFFE to get posts on page load
  (function getPosts() {
    $http.get('/posts').then(function(data) {
      $scope.view.posts = data.data.data;
      for (var i = 0; i < $scope.view.posts.length; i++) {
        getImages($scope.view.posts[i].id,i);
        getCategory($scope.view.posts[i].category_id,i)
      };
    });
  })();
  $scope.toggle = function(form) {
    $scope.forms[form] = !$scope.forms[form];
  };

  $scope.view.submit = function(email) {
    $scope.users.errorMessage ? delete $scope.users.errorMessage : true;
    !email ? $scope.users.errorMessage = 'Please enter a valid email address.' : true;
    // Check if user is signed up:
    // If users IS signed up, send to sign IN nested state
    // If users IS NOT signed up, send to sign UP nested state
  };

});

app.controller('RecipeController',function($scope,$http,$stateParams,$state) {
  $http.get(`/posts/details/${$stateParams.id}`).then(function(data) {
    $scope.activeRecipe = data.data.data;
    getImages($scope.activeRecipe.id);
  });
  function getImages(id,i) {
    $http.post('/images/id',{id:id}).then(function(data) {
      i ? $scope.view.posts[i].images = data.data : $scope.activeRecipe.images = data.data;
    });
  };
})
