import {View} from "react-native";
import PracticeList from "../components/PracticeList";
import {useContext} from "react";

function HomeScreen() {
    /* TODO: Only for practice purpose */
    /*const theme = useContext(ThemeContext);*/
    return (
        <View>
            {/*TODO: Spodnja stvar kaze mozno implementacijo teme*/}
            {/*<Text style={{color: theme.colors.background}}>TEST</Text>*/}
            <PracticeList />
        </View>
        )
}

export default HomeScreen;
