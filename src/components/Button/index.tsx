import React from 'react';
import { TouchableOpacity, TouchableOpacityProps, Text } from 'react-native';
import { styles } from './styles';

type Props = TouchableOpacityProps;

export function Button({...rest}:Props){
   return (
    <TouchableOpacity
        style={styles.button}
        {...rest}
    >
        <Text style={styles.title}>Escolher Video</Text>
    </TouchableOpacity>
    );
}