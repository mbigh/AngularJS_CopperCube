angular.module("ccLoader", [])
	.directive(
		"ccLoader",
		[function () {
			return {
				restrict: "E",
				scope: {
                    ccbjsMainUrl: "=ccbjsMainUrl",
                    ccbjsUrl: "=ccbjsUrl"

				},


                link: function (scope, elem, attr) {

                    // LOADING MAIN SCENE

                    var engine = startCopperLichtFromFile('3darea', scope.ccbjsMainUrl);
                    engine.OnLoadingComplete = function () {
                        console.log("cube is now loaded");
                        var scene = engine.getScene();
                        if (scene) {
                            console.log(engine.getScenes()[0].Name);
                            //PUT HERE MORE FUNCTIONS
                        }
                    };

                    // BUTTON INPUT
					scope.$watch("ccbjsUrl", function(newValue, oldValue) {
                        if (newValue != oldValue) {
                            appendNode(newValue);
                            var sphereToDelete = engine.getScenes()[0].getSceneNodeFromName('sphere');
                            var coneToDelete = engine.getScenes()[0].getSceneNodeFromName('cone');
                            if (sphereToDelete) {
                                ccbRemoveSceneNode(ccbGetSceneNodeFromName("sphere"))
                            }
                            ;
                            if (coneToDelete) {
                                ccbRemoveSceneNode(ccbGetSceneNodeFromName("cone"))
                            }
                            ;
                        }
                    });


                    // NEW FUNCTION TO APPEND NODES
					function appendNode(nodeUrl) {
                        engine.load(nodeUrl, true, function(){
                            console.log('node is now loaded!');
                            //ADD NEW NODE
                            var nodeToMove = engine.getScenes()[1].getAllSceneNodesOfType('mesh')[0];
                            engine.getScene().getRootSceneNode().addChild(nodeToMove);

                            // DELETE BUFFER SCENE
                            var scenesArray = engine.getScenes();
                            scenesArray.pop();

					    }
                        )
                    }
                    appendNode(scope.ccbjsUrl);

				}

			}
		}
	]);
