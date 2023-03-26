import { FlatList, StyleSheet, View } from 'react-native';
import { useIsFocused } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import Practice from './Practice';
import { fetchPractices } from '../utils/database';

const styles = StyleSheet.create({
  container: {
    padding: 4,
  },
});

function PracticeList() {
  const [loadedPractices, setLoadedPractices] = useState([]);
  const isFocused = useIsFocused();

  useEffect(() => {
    async function loadPractices() {
      const practices = await fetchPractices();
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      setLoadedPractices(practices);
    }

    if (isFocused) {
      loadPractices();
    }
  }, [isFocused]);

  return (
    <View style={styles.container}>
      <FlatList
        alwaysBounceVertical={false}
        data={loadedPractices}
        renderItem={practiceData => <Practice practice={practiceData.item} />}
        keyExtractor={(practice: { id: number }) => practice.id.toString()}
      />
    </View>
  );
}

export default PracticeList;
