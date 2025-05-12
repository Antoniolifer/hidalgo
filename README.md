# Hidalgo

## About the project
_Hidalgo_ is a task manager, an app to help organise your goals for the day.

Convenient, minimalistic user interface, bound together with smooth animations, responsive design and a unique theme, offer the user an engaging and satisfying experience in dealing with their daily plans.

- The name of this project is a reference to the title of Don Quixote - a noble knight that set himself legendary quests and challenges, in a famous Spanish novel written by Miguel de Cervantes.

## Design 
Core features:
- create, edit, and delete todos.
- choose special icons
- mark as complete
- sort by tags
- search through the list
- local storage of todos

Quality-of-life & demo features:
- Clearing all todos
- clearing completed todos (?)
- Restarting the demo
  

## Usage 

## Challenges
### Working around minimalism
Tradeoff between minimalism and hypothetical usefulness of including more information, such as dates. 
This imposes challenges with sorting. 
### Difficulty scaling due to the current implementation. 
Not using context, and using simple state and not a reducer, means that if the project was to be extended, into a weekly planner, or if it were to receive a history view, or some other kind of expansion, it would require a significant change to the core of the project. Not to the point of re-writing the whole implementation, but but still noticeable, timeconsuming, and potentially causing bugs. Current implementation could have benefited from an early "investment" of time into the building of an advanced project architecture, had an expansion and addition of new features been the main priority. This project was, however, designed with the current implementation being very close to the supposed final state. Minimalistic, convenient, smooth, fast. 
If the app was more complex, it might have become too unapproachable and inconvenient for the task it was made to do. A simple list, a draft of your plans that you can manage with an actual user interface, and that looks presentable and satisfying to work with. There was no plan to turn it into a whole self-sufficient system,

## Future improvements 
- Careful addition of more filtering capability
- drag and drop re-ordering of todos
- concept of folders/groups
- hiding completed todos
- changing days
  
## Tech
This frontend-only Single Page application uses Vite, React.js, and Tailwind CSS.
The core of the app is done in React, and requires react-icons for the graphical assets. Animations were done in vanilla Tailwind.
This app uses browser local storage for persistent data between sessions, and this app is hosted on Netlify.

## Author
My name is Anton Serdiuk and I am a Javascript/React.js web developer from Perth, WA.
I have created this app for expanding my practical knowledge of React.js, showcasing my developer skills, and simply because I was inspired to create a convenient, unique task manager that my friends and the wider internet community would enjoy using.

