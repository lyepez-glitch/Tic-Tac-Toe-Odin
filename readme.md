If you only need a single instance of something (e.g. the gameboard, the displayController etc.) then wrap the factory inside an IIFE (module pattern) so it cannot be reused to create additional instances.

when the game is over

all code in function
dont let players play in spots already taken

display the results of game