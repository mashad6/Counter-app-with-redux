import React from "react";
import { View, Text } from "react-native";
import { connect } from "react-redux";

const Example = (props) => {
  return (
    <View style={{ justifyContent: "center", alignItems: "center" }}>
      <Text>{props.count}</Text>
    </View>
  );
};

function mapstateToProps(state) {
  return {
    count: state.count,
  };
}
export default connect(mapstateToProps)(Example);
