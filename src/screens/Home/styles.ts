import { StyleSheet, Dimensions } from 'react-native';
import theme from '../../styles/theme';

const windowHeight = Dimensions.get('window').height;

export const styles = StyleSheet.create({
   container:{
      flex: 1,
      alignItems:'center',
      paddingTop: 30,
      paddingHorizontal: 10,
   },
   background: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      height: windowHeight,
    },
   title:{
      marginVertical: 10,
      color: '#5389A6',
   },
   video:{
      width:'100%', 
      height: 200, 
      alignSelf:'center',
      borderRadius: 10,
      backgroundColor:theme.colors.font
   },
   content:{
      width: '100%',
      height: windowHeight-230,
      paddingBottom: 60,
   },
   footer:{
      width: '100%',
      position: 'absolute',
      bottom: 0,
   }
});