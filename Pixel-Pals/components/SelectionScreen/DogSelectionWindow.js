// import React from "react";
// import { TouchableOpacity, View, Image} from "react-native";

// const DogSelectionWindow = ({ onPress }) => {
//     return (
//         <TouchableOpacity onPress = { onPress }>
           
//                 <Image source={require('../../assets/images/DogSelectionWindow.png')}/>
            
//         </TouchableOpacity>
//     )
// }

// export default DogSelectionWindow

import React, { useState } from "react";
import { TouchableOpacity, View, Image } from "react-native";

const DogSelectionWindow = ({}) => {
    const [isImageSelected, setIsImageSelected] = useState(false);

    const toggleSelection = () => {
        setIsImageSelected(!isImageSelected);
    };

    return (
        <TouchableOpacity onPress={toggleSelection}>
            {isImageSelected ? (
                <Image source={require('../../assets/images/SelectedDogWindow.gif')} />
            ) : (
                <Image source={require('../../assets/images/DogSelectionWindow.png')} />
            )}
        </TouchableOpacity>
    );
};

export default DogSelectionWindow;
