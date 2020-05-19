import React, { useState, Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";
import Header from "./component/Header";
import { connect } from "react-redux";

function mapDispatchToProps(dispatch) {
  return {
    update: (count) => dispatch({ type: "UPDATE", payload: count * 30 * 5 }),
    onsubmit: () => dispatch({ type: "ONSUBMIT" }),
    decFajr: () => dispatch({ type: "DEC_FAJR" }),
    decZuhr: () => dispatch({ type: "DEC_ZUHR" }),
    decAsar: () => dispatch({ type: "DEC_ASAR" }),
    decMagrib: () => dispatch({ type: "DEC_MAGRIB" }),
    decIsha: () => dispatch({ type: "DEC_ISHA" }),
  };
}

const Counter = (props) => {
  return (
    <View>
      <Header>counter</Header>
      <View>
        <TextInput
          style={styles.input}
          placeholder={"enter value in Months"}
          value={props.count}
          keyboardType={"numeric"}
          onChangeText={props.update}
          onSubmitEditing={props.onsubmit}
        />
      </View>
      <View style={styles.body}>
        <TouchableOpacity style={styles.item} onPress={() => props.decFajr()}>
          <Text>Fajar</Text>
          <Text>{props.fajr}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item} onPress={() => props.decZuhr()}>
          <Text>Zuhr</Text>
          <Text>{props.zuhr}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item} onPress={() => props.decAsar()}>
          <Text>Asar</Text>
          <Text>{props.asar}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item} onPress={() => props.decMagrib()}>
          <Text>Magrib</Text>
          <Text>{props.magrib}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item} onPress={() => props.decIsha()}>
          <Text>Isha</Text>
          <Text>{props.isha}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

function mapstateToProps(state) {
  return {
    count: state.count,
    fajr: state.fajr,
    zuhr: state.zuhr,
    asar: state.asar,
    magrib: state.magrib,
    isha: state.isha,
  };
}
export default connect(mapstateToProps, mapDispatchToProps)(Counter);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  btn: {
    height: 30,
    width: 30,
    borderRadius: 20,
    backgroundColor: "skyblue",
    justifyContent: "center",
    alignItems: "center",
  },
  item: {
    backgroundColor: "whitesmoke",
    marginBottom: 5,
    padding: 10,
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 80,
  },
  body: {
    justifyContent: "space-between",
    height: 500,
  },
  input: {
    padding: 15,
    height: 50,
  },
});
