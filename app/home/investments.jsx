import { Link, Stack, useRouter } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function Page() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: "Investments"}}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },
});
