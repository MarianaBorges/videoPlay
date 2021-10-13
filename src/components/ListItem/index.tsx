import React from 'react';
import { TouchableOpacity, TouchableOpacityProps, Text } from 'react-native';
import { styles } from './styles';

interface Props extends TouchableOpacityProps{
    index: number;
};

export function ListItem({index,...rest}:Props){
   return (
    <TouchableOpacity 
        style={styles.button}
        {...rest}
    >
        <Text style={styles.title}>Vídeo {index+1}</Text>
    </TouchableOpacity>
    );
}