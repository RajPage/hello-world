import { StyleSheet, Platform, StatusBar } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  image: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
  },
  textHead: {
    fontSize: 20,
    textAlign: "center",
    color: "white",
  },
  text: {
    fontSize: 16,
    textAlign: "center",
    color: "white",
  },
  footer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});
