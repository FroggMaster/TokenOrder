# Token Order
**Token Order** - Reveal Tokens Buried Behind Each Other
***
A module for Foundry VTT.

With **Token Order** you can float your cusor over foreground obstructing tokens, press a hot-key and send them to the back of stack. This allows you to access the token you want, even when it's hidden beneath others.

**Token Order** works on your own canvas so it will not confuse other players or alter their view. It does not activate the token being pushed, so requires no ownership or access to the token.

This is especially useful in games where players may fight many enemies in close quarters and tokens crawl over each other, occasionally preventing a player or GM from being able to see or manipulate the token they need.

**Usage**
1. Float your cursor over a token which is obstructing your view of other tokens.
2. Press the Hotkey associated with **Token Order**. You can change this in Foundry VTT settings. The default is "Z".  
3. The token will be pushed beneath any other tokens it was hiding, allowing you to access them normally.

Notes: **Token Order** does not actually manipulate tokens on the server, it is purely a local manipulation of the canvas rendering order, so no other players will see what you are pushing back. This enables multiple players to access multiple tokens all occupying the same grid square.

