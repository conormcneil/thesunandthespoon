app
    .directive('polaris', function() {
        return {
            templateUrl: 'partials/polaris.html'
        }
    })
    .directive('recipePreview', function() {
        return {
            templateUrl: 'partials/recipe-preview.html'
        }
    })
    .directive('sunMenu', function() {
        return {
            templateUrl: 'partials/menu.html'
        }
    });
