let TokenOrder = new Object();
TokenOrder.hoverToken= new Object();
TokenOrder.hoverToken.hoveredTarget=0;
TokenOrder.hotkey='';

Hooks.on('init', () => {
	game.settings.register('TokenOrder', 'hotkey', {
		name: game.i18n.localize("TOKENORDER.SelectHotKey"),
		hint: game.i18n.localize("TOKENORDER.SelectHotKeyHelp"),
		scope: 'client',   
		config: true,      
		type: String,     
		default: "z", 
		onChange: value => { TokenOrder.hotkey = value // When the value is changed, set the value to the specified/provided key.
			//console.log(value)
		}
	});
	
	TokenOrder.hotkey=game.settings.get('TokenOrder', 'hotkey');
});

TokenOrder.TokenOrderListener = function(event){
    if ( event.isComposing ) return; 
	if (event.key==TokenOrder.hotkey && !event.repeat) pushToBack();
};

TokenOrder.hoverToken.hook= Hooks.on('hoverToken',(token,hoverON)=>{
	if (hoverON) {
		TokenOrder.hoverToken.hoveredTarget=token;
		window.addEventListener('keydown', TokenOrder.TokenOrderListener );
	} else {
		window.removeEventListener('keydown', TokenOrder.TokenOrderListener );
		delete TokenOrder.hoverToken.hoveredTarget;
	}
});

function pushToBack() { 
	if (typeof TokenOrder == "undefined") {
		console.warn("Module Token Order is not installed.");
		return;
	}
	if ( TokenOrder?.hoverToken?.hoveredTarget instanceof Token) { 
		const token = TokenOrder.hoverToken.hoveredTarget; 
		let position = 0;
		var foundchild;
		
		for (const x of canvas.tokens.children[0].children) {
			if (x==token) break;
			position++;
		}
		if (position<canvas.tokens.children[0].children.length){
			// found the child, push it to element 0
			canvas.tokens.children[0].children.splice(position,1);
			canvas.tokens.children[0].children.unshift(token);
		}
	} else {
		console.warn('TokenOrder ERROR: Invalid target', TokenOrder.hoverToken.hoveredTarget);
	} 
};