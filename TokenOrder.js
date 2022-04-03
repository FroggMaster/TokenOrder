// pushTokenBack
// (c) 2021 David Zvekic
// permission granted to use and distribute as per LICENSE file


let TokenOrder = new Object();
TokenOrder.hoverToken= new Object();
TokenOrder.hoverToken.hoveredTarget=0;
TokenOrder.hotkey='';




Hooks.on('init', () => {

game.settings.register('TokenOrder', 'hotkey', {
  name: game.i18n.localize("TokenOrder.SelectHotKey"),
  hint: game.i18n.localize("TokenOrder.SelectHotKeyHelp"),
  scope: 'client',   
  config: true,      
  type: String,     
  default: "Z",
  
  onChange: value => { TokenOrder.hotkey = value // value is the new value of the setting
    console.log(value)
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
}
else {
    window.removeEventListener('keydown', TokenOrder.TokenOrderListener );
	delete TokenOrder.hoverToken.hoveredTarget;
}
});


function pushToBack()
{ if (typeof TokenOrder == "undefined") {
    console.warn("Module TokenOrder is not installed.");
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
    console.warn('pushtoback - invalid target', TokenOrder.hoverToken.hoveredTarget);
  } 

};




