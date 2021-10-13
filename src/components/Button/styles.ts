import { StyleSheet } from "react-native";
import theme from "../../styles/theme";

export const styles = StyleSheet.create({
    button:{
        backgroundColor: theme.colors.button,
        borderRadius: 10,
        alignItems: 'center',
        marginVertical: 10,
     },
     title:{
        marginVertical: 10,
        color: theme.colors.font,
     },
});