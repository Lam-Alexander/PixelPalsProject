# PixelPalsProject
This is a virtual pet application built using React-Native and Javascript. This application includes pixel art that was created with Aseprite. 

## Downloading the Project

- Clone this project
```
git clone < project-url.git >
```
### Installing Dependencies & Node Modules 
- Go to your project's root folder and run `npm install`.

### Running the Project

- Install Expo Go
```
npm start
```
## Architectural Framework
**Development framework:** React Native, JavaScript, Aesprite 

Reasoning: Our reasoning for choosing react native and JavaScript is due to the cross-platform compatibility that’s available if we choose to take this app further than a school project. It has a large community with lots of guides and support for troubleshooting if necessary. Furthermore, we’re learning React Native in two of our classes right now so we wanted to put our new found knowledge to the test. For the design portion of our app, we decided to use a program called Aesprite which excels in the world of pixel art development. It’s extremely user friendly and gives us creative freedom in every aspect of the game. Using Aesprite we can create our own maps, animations, and characters rather than using a library of pre-built assets.  


**Navigation strategy:** Stack Navigator 

Reasoning: Our app’s primary needs for navigation would include React stack navigation. We have decided to use React Navigation as this is a widely used library for navigation when dealing with mobile applications. Implementing this feature would allow the user to have a simple user experience. React Navigation also provides other flexible and customizable navigation solutions including stack tab, native stack, drawer, bottom tabs, Material bottom tabs and material top tabs.  

 
**Hardware:** Speakers, Vibration 

Reasoning: Our application will use some basic hardware such as speakers or vibration. Through our application, certain sounds or vibrations can be played when interacting with the virtual pet. As our application is a simple pet application, we would not need to use features such as GPS tracking, Accelerometer, Barometer light sensor or Proximity Sensor. 

 

**Database storage:** Local  

Reasoning: We would like to implement a local database that would be stored on the user's mobile application. The reason for this is so that the user can interact with their chosen pet and make progress without starting a whole new adventure. By storing the files locally, we ensure the application remains accessible even when the device is offline or without any internet or Wi-Fi connections.  
