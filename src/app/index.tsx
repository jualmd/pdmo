import { Text, View, TextInput, StyleSheet } from 'react-native';

export default function Page() {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Seu nome:</Text>
      <TextInput style={styles.input} placeholder="Digite seu nome" />

      <Text style={styles.label}>Quem ganha a copa:</Text>
      <TextInput style={styles.input} placeholder="Seu palpite" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  label: {
    fontSize: 18,
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    width: '80%',
  },
});
