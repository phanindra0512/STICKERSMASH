import { useRouter } from 'expo-router';
import { Button, StyleSheet, Text, View } from 'react-native';

const SignIn = () => {
  const router = useRouter();
  const navigateToDashboard = async () => {
    router.replace('(main)/(tabs)/home');
  };

  return (
    <View style={styles.container}>
      <Text>Sign in screen</Text>
      <Button
        title="goToDashboard"
        onPress={navigateToDashboard}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    gap: 20,
  },
});

export default SignIn;
