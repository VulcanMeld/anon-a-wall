'use strict'

const wallPosts = [ 
   {"content": "hello, I love you all",
   "selfDestruct": { "on": true, "timeInMinutes":30}
  },
 
 {"content": "hello, I love you all",
   "selfDestruct": { "on": true, "timeInMinutes":30}
 }
]

const getWallPosts = (callBackFn) => {
	callBackFn(wallPosts)
	
	
	
	
	}
	
	const watchForm =() => {
		$(".js-user-text-box").on("submit", function(event) {
			event.preventDefault()
			

}
		
		}



const startApp = () => {
	getWallPosts()
	watchForm(displayWallPosts)
	
	}
	
$(startApp)