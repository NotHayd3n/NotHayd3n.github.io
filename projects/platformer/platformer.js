$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }
    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); //top
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200); //right
    createPlatform(-50, -50, 50, canvas.height + 500); //bottom
    createPlatform(canvas.width, -50, 50, canvas.height + 100);

    /**
     * Uncomment the drawGrid() function call below to add a "grid" to your platformer game's screen
     * The grid will place both horizontal and vertical platforms incremented 100 pixels apart
     * This can help you determine specific x any y values throughout the game
     * Comment the function call out to remove the grid
     */

    // drawGrid();

    /////////////////////////////////////////////////
    //////////ONLY CHANGE BELOW THIS POINT///////////
    /////////////////////////////////////////////////

    function createPlatform( x, y, width, height) {
      platforms.push({ x, y, width, height });
    }
createPlatform(415, 675, 100, 75)
createPlatform(500, 625, 100, 120)
createPlatform(620, 550, 150, 45)
createPlatform(790, 625, 100, 20)
createPlatform(790, 420, 100, 20)
createPlatform(850, 320, 100, 20)
createPlatform(790, 220, 100, 20)
createPlatform(1000, 320, 100, 20)
createPlatform(1300, 420, 200, 20)
createCollectable("steve", 800, 120)
createCollectable("database", 630, 625)
createCollectable("grace", 1350, 370)
createCannon("top", 1200, 1000)
createCannon("left", 220, 2000)
createCannon("top", 480, 800)

    
    /////////////////////////////////////////////////
    //////////ONLY CHANGE ABOVE THIS POINT///////////
    /////////////////////////////////////////////////
  }

  registerSetup(setup);
});
