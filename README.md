# Hidalgo

## About the project
_Hidalgo_ is a task manager, a todo list, focused on usability and providing a satisfying, polished experience.

It was developed using **React** (with native React Context) and **Tailwind**. 

*Check out the live demo here:* [https://cool-shopper-project.netlify.app/](https://hidalgo-task-manager.netlify.app/)


## Motivation
Convenient, minimalistic user interface, bound together with smooth animations, responsive design and a unique theme, I developed this application to offer the user an engaging and satisfying experience in dealing with their daily plans. The goal was to create a fully fledged, finished, ready-to-use product.

I have created this app for expanding my practical knowledge of React.js, showcasing my developer skills, and more importantly because I was inspired to create a convenient, unique task manager that my friends and the wider internet community would enjoy using.

- The name and theme of this project is a reference to the title of Don Quixote - a noble knight that set himself "legendary" quests and challenges, in the famous Spanish novel written by Miguel de Cervantes.
  
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
- clearing completed todos 
- Restarting the demo

## Technical Decisions
#### Working around minimalism
Tradeoff between minimalism and hypothetical "extra usefulness" from including extra information, such as timestamps, descriptions, photos, links. For a todo list, this amount of information seemed excessive, and would have negatively impacted the UX, without contributing much in return. The intended purpose of the application does not warrant that level of detalisation. 

#### Theme 
during the design phase, I wanted this project to stand out. I specifically chose a "simple", ubiquitous concept - a todo list, and I wanted to make it special and unique, in terms of how polished, convenient, and interesting it is, how it differs from other todo list applications.
The name of _Hidalgo_ seemed like a perfect ironic twist to this seemingly trivial concept - setting todos for yourself. 

#### Scaling considerations 
Not using context, and using simple state and not a reducer, means that if the project was to be extended, into a weekly planner, or if it were to receive a history view, or some other kind of expansion, it would require a significant change to the core architecture. Not to the point of re-writing the whole implementation, but but still time-consuming. 

Theoretically, the current implementation could have benefited from an early "investment" of time into the building of an advanced project architecture, However, from the very beginning, the current state of the project was defined as final. Minimalistic, convenient, smooth, fast.

If the app was more complex, it might have become too unapproachable and inconvenient for the task it was made to do. A straightforward list of your plans, that you can manage with an actual user interface, in a way that is presentable and satisfying to work with. There was no plan to turn it into a super-complex, deep system, or "a way of life". 

## Future of the project 
The project has reached it's intended form. However, I think it's possible to expand it's functionality, without compromising on the minimalism of the UI and the overall approachability. Careful and granular addition of the following features, would be the future of this project:
- more filtering capability
- drag and drop re-ordering of todos
- concept of folders/groups
- hiding completed todos
- changing days
  
## Tech
This frontend-only Single Page application uses Vite, React.js, and Tailwind CSS.
The core of the app is done in React, and requires react-icons for the graphical assets. Animations were done in Tailwind.
This app uses browser local storage for persistent data between sessions, and this app is hosted on Netlify.

## Author
Hi, my name is Anton Serdiuk, I am a front-end developer focused on building thoughtful, interactive applications with Javascript, React and TypeScript. I'm passionate about balancing clean code, UX clarity, and ambitious ideas.

