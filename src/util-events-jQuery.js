// PhotoSwipe - http://www.photoswipe.com/
// Copyright (c) %%year%% by Code Computerlove (http://www.codecomputerlove.com)
// Licensed under the MIT license
// version: %%version%%

(function (window, Util) {
	
	Util.extend(Util, {
		
		Events: {
						
			
			/*
			 * Function: add
			 * Add an event handler
			 */
			add: function(obj, type, handler){
				
				$(obj).bind(type, handler);
				
			},
			
			
			/*
			 * Function: remove
			 * Removes a handler or all handlers associated with a type
			 */
			remove: function(obj, type, handler){
				
				$(obj).unbind(type, handler);
				
			},
			
			
			/*
			 * Function: fire
			 * Fire an event
			 */
			fire: function(obj, type){
				
				var 
					event,
					args = Array.prototype.slice.call(arguments).splice(2);
				
				if (typeof type == "string"){
					event = { type: type };
				}
				else{
					event = type;
				}
				
				$(obj).trigger( jQuery.Event(event.type, event),  args);
				
			},
			
			
			/*
			 * Function: getMousePosition
			 */
			getMousePosition: function(event){
				
				var retval = {
					x: event.pageX,
					y: event.pageY
				};
				
				return retval;
			},
			
			
			/*
			 * Function: getTouchEvent
			 */
			getTouchEvent: function(event){
				
				return event.originalEvent;
			
			},
			
			
			/*
			 * Function: domReady
			 */
			domReady: function(handler){
			
				$(document).ready(handler);
			
			}
			
		}
	
		
	});
	
	
})
(
	window,
	Code.PhotoSwipe.Util
);