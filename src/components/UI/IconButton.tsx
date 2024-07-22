import { Pressable, StyleSheet, Text } from 'react-native';
// import { Ionicons } from '@expo/vector-icons';

function IconButton({ icon, color, size, onPress }:any) {
  return (
    <Pressable
      style={({ pressed }) => [styles.button, pressed && styles.pressed]}
      onPress={()=>onPress()}
    >
      <Text style={{ color: color, fontSize: 20 }}>Log Out</Text>
    </Pressable>
  );
}

export default IconButton;

const styles = StyleSheet.create({
  button: {
    margin: 8,
    borderRadius: 20,
  },
  pressed: {
    opacity: 0.7,
  },
});