import { Button, StyleSheet, View, Text } from "react-native";

const Profile = () => {
  return (
    <View style={styles.container}>
      <Text>Profile screen</Text>
      <Button title="signOut" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    gap: 20,
  },
});

export default Profile;
