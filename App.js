import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Appbar } from "react-native-paper";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { TextInput, Button } from "react-native-paper";
import LoveResult from "./LoveResult";

export default function App() {
  const [male, setMale] = useState("");
  const [female, setFemale] = useState("");
  const [data, setData] = useState("");

  const fetchData = () => {
    console.log(male);
    console.log(female);
    setData("loading");

    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "35d8e0330bmshd5ed4e232ae3562p122f42jsn6666afc65313",
        "X-RapidAPI-Host": "love-calculator.p.rapidapi.com",
      },
    };

    fetch(
      `https://love-calculator.p.rapidapi.com/getPercentage?sname=${female}&fname=${male}`,
      options
    )
      .then((response) => response.json())
      .then((response) => {
        setData({
          ...response,
          percentage: response.percentage,
          result: response.result,
        });
      })
      .catch((err) => console.error(err));

    setMale("");
    setFemale("");
  };
  return (
    <SafeAreaProvider>
      <Appbar.Header style={{ backgroundColor: "purple" }}>
        <Appbar.Content
          titleStyle={{ color: "white" }}
          title="Love Calculator"
        />
      </Appbar.Header>
      <View style={styles.container}>
        <TextInput
          style={styles.textInput}
          label="Enter male name"
          value={male}
          onChangeText={(text) => {
            setMale(text);
            setData("");
          }}
        />
        <TextInput
          style={styles.textInput}
          label="Enter female name"
          value={female}
          onChangeText={(text) => {
            setFemale(text);
            setData("");
          }}
        />

        <Button
          icon="heart"
          mode="contained"
          style={{
            borderRadius: 5,
            paddingVertical: 10,
            backgroundColor: "purple",
            width: 300,
            alignSelf: "center",
            marginTop: 50,
          }}
          onPress={fetchData}
        >
          Press me
        </Button>

        <LoveResult data={data} />
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
  },
  textInput: {
    margin: 20,
  },
});
