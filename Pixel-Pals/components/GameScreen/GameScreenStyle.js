import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    backgroundImage: {
      width: '100%', 
      height: '100%', 
      position: 'absolute', 
    },
    pixelAnimal: {
      width: 180, 
      height: 120, 
      position: 'absolute', 
      bottom: 100, 
      left: 50,
      alignSelf: 'center',
    },
    feedButton: {
      width: 40,
      height: 50,
      position: 'absolute',
      bottom: 2,
      top: 430,
      alignSelf: 'center',
    },
    healthContainer: {
      position: 'absolute',
      fontSize: 20,
      top: 50, 
      left: 10,
      right: 10,
      height: 20,      
      borderColor: 'black',
      
    },
    healthBar: {
      height: '100%',
      backgroundColor: 'red',
      borderRadius: 5,
      borderColor: 'black',
      borderWidth: 2,
      width: 1,
    },
    healthText : {
      height: '130%',
      fontSize: 20,
    },
    energyContainer: {
      position: 'absolute',
      fontSize: 20,
      top: 40, 
      left: 10,
      right: 10,
      height: 20,      
      borderColor: 'black',
  },
  energyBar: {
    height: '100%',
    top: 55,
    width: 1,
    borderRadius: 5,
    borderColor: 'black',
    borderWidth: 2,
    
    backgroundColor: 'green', 
  },
  energyText:{
    height: '130%',
    top: 55,
    fontSize: 20,
  },
  playButton: {
      width: 40,
      height: 50,
      position: 'absolute',
      top: 430,
      right: 30,
      alignSelf: 'center',
  },
  ballThrow: {
    position: 'absolute', 
    bottom: 50, 
    left: -80,
    alignSelf: 'center',
  },
  


  
  });

  export default styles;