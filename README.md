# Vet Evasion
- first game project 1 for SEIR-66-icepops

# User Story
- User will be met with cat icon on the start screen and instructions above the start button
- The user should be able to move all four directions to eat treats and avoid the hands. 
- There are two winning conditions, beat the timer or get the points needed, each will display at the top of the screen, either in a corner or centered. 
- The user will see how they won on the win screen, which will be different based on how they win and with which character the user chose.
    - Two win screens available and one lose screen for the user to experience
- The player will lose if they get two hands
- The game will side scroll across a room for the duration of the game.

![Wireframe](https://github.com/Zene09/project_1/blob/main/images/screenshot-wireframe-project1.png)

# Approach

Use HTML to set up the basic framework of the page and very little CSS, as most of the objects would have to be manipulated by JavaScript. I intend of creating most of my objects and uploading them as images to be manipulated. I would create an ID in HTML for every object to keep have more independently moving objects for JavaScript to manipulate.

# Stretchers

- They can choose to be either Fritz or Lucyfur on the start screen, who come with their own strengths and weaknesses.
    - If the user meets the point requirement as Fritz/Lucy, they will see a different screen than if they won against the timer. 
    - There should be four possible screens upon winning and two upon losing for the user to experience.  
- I want the hands to dispense the treats and move in a similar motion to the player, so that would pave the path for the user to play AS the hands instead. 
- In the farther future, I would incorporate different events such as cats vs the vacuum or bugging a human to give them food, as well as the ability to pick from a variety of cats with different skills.