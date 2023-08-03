import { View } from 'react-native';
import { Button } from 'react-native-paper';
import PracticeList from '../components/PracticeList';
import { insertPractice } from '../utils/database';
import { Practice } from '../models/practice';

function HomeScreen() {
  /* TODO: Only for practice purpose */
  /* const theme = useContext(ThemeContext); */
  const onPressButton = async () => {
    const practice = new Practice('Bazni naslov', 'Opis', 1, 55, 120, 1, 2);
    await insertPractice(practice);
  };

  return (
    <View>
      <Button
        icon="camera"
        mode="elevated"
        compact
        onPress={() => onPressButton()}
      >
        Test insert
      </Button>
      {/* TODO: Spodnja stvar kaze mozno implementacijo teme */}
      {/* <Text style={{color: theme.colors.background}}>TEST</Text> */}
      <PracticeList />
    </View>
  );
}

export default HomeScreen;
