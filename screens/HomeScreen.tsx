import {View, Text, StyleSheet} from "react-native";
import PracticeList from "../components/PracticeList";
import {useContext} from "react";
import {ThemeContext} from "../App";

function HomeScreen() {
    const theme = useContext(ThemeContext);
    return (
        <View>
            <Text style={{color: theme.colors.background}}>TEST</Text>
            <PracticeList />
        </View>
        )
}

export default HomeScreen;
