import { StyleSheet, View, Text } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    marginVertical: 6,
    padding: 8,
    borderRadius: 10,
  },
  main: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 2,
  },
  title: {
    fontSize: 18,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  description: {
    fontSize: 12,
  },
  status: {
    color: 'green',
  },
});

// TODO: Popravi ko bos implementiral DTO-je oziroma modele
// eslint-disable-next-line
function Practice({ practice }: any) {
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.title}>{practice.title}</Text>
        <Text>
          {practice.startingTempo} - {practice.endingTempo}
        </Text>
      </View>
      <View style={styles.footer}>
        <Text style={styles.description}>{practice.description}</Text>
        <Text style={styles.status}>{practice.status}</Text>
      </View>
    </View>
  );
}

export default Practice;
