# FlytBase_FSD_CodingRound
An angular app to generate new boxes in your app. And move those boxes using your keyboard keys.

Requirements:
● User gets to see a button to add a new box in the window. On clicking the button, a box
is created with a unique number ID. Boxes are of fixed width and height.
● Higher id boxes will have a higher z-index.
● Users can add multiple boxes.
● To select a box, click on it. Highlight the selected box.
● Use W-A-S-D or arrow keys on the keyboard to move the selected box.
● Use the ‘delete’ key on the keyboard to remove the selected box.
● A button to toggle keyboard control.(*no listener should be open when this button status
is off*).
● Avoid using any NPM library to achieve this behaviour.
● Please provide a ReadMe file with your codebase, detailing on how to build and deploy
your code in the local browser.
Bonus Task:
● Create a hardcoded custom rectangular fence and ensure all the boxes stay within the
fence during movement

Steps to build and run project on localhost:
● Enter folder with package.json, and run "npm i".
● Run project using "ng serve".
