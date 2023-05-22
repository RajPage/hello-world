import { StatusBar } from "expo-status-bar";
import {
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { styles } from "./styles";

const image = require("./assets/bg.jpg");

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <Text style={styles.textHead}>¡Hola Todos!</Text>
        <Text style={styles.text}>Llamo Raj</Text>
        <Attribution />
      </ImageBackground>
      <StatusBar style="auto" />
    </View>
  );
}

const Attribution = () => {
  return (
    <View style={styles.footer}>
      <Pressable
        onPress={() =>
          Linking.openURL(
            "https://www.freepik.com/free-vector/gradient-glassmorphism-background_27345806.htm?query=landing%20page%20background&collectionId=3266886&&position=5&from_view=collections"
          )
        }
      >
        {({ pressed }) => (
          <Text
            style={{
              textDecorationLine: "underline",
              color: pressed ? "red" : "blue",
            }}
          >
            Image by Freepik
          </Text>
        )}
      </Pressable>
    </View>
  );
};
