app.controller('PostCtrl', function( $scope, PostSvc ) {

	$scope.addPost = function(){

		if(!$scope.postBody) return;

		PostSvc.create(
		{
			username:'dickeyxxx',
			body:$scope.postBody
		}).success(function(post){
			// $scope.posts.unshift( post );
			$scope.postBody = null;
		})

	}

	PostSvc.fetch().success(function( posts ){
		$scope.posts = posts;
	});

	$scope.$on('ws:new_post', function(_,post){
		$scope.$apply(function(){
			$scope.posts.unshift(post);
		})
	})

});