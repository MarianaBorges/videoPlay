import { StyleSheet } from "react-native";
import theme from "../../styles/theme";

export const styles = StyleSheet.create({
    button:{
        borderRadius: 10,
        alignItems: 'center',
        marginVertical: 2,
        backgroundColor: theme.colors.backgroundGradientTwo
     },
     title:{
        marginVertical: 10,
        color: theme.colors.font,
     },
});