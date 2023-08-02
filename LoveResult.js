import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { ActivityIndicator } from "react-native-paper";

const LoveResult = (props) => {
  if (props.data == "loading")
    return (
      <ActivityIndicator
        animating={true}
        color={"purple"}
        style={{ marginTop: 70 }}
        size={"large"}
      />
    );
  else if (props.data.mesage) 
    return <Text>Oops! something went wrong</Text>;
  else if(props.data === '')
    return ''      
  else {
    return (
      <View
        style={{
          marginTop: 60,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text style={{ fontSize: 30, color: "purple" }}>
          {props.data.fname} LOVES {props.data.sname}
        </Text>
        <Text
          style={{
            textAlign: "center",
            fontSize: 30,
            borderRadius: 50,
            backgroundColor: "purple",
            color: "white",
            paddingHorizontal: 20,
            paddingVertical: 20,
            width: 100,
          }}
        >
          {props.data.percentage}%
        </Text>
        <Text style={{ textAlign: "center", fontSize: 30, marginTop: 30 }}>
          {props.data.result}
        </Text>
      </View>
    );
  }
};

export default LoveResult;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
