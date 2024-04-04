import React from "react";
import { Text, Button, View } from "react-native";
export default function ColorButton({
  color, onIncrease, onDecrease
}) {
  return <View>
    <Text>{color}</Text>
    <Button title="Increase" onPress={e => onIncrease()} />
    <Button title="Decrease" onPress={e => onDecrease()} />
  </View>;
}
