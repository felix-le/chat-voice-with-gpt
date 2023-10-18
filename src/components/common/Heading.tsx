import { StyleSheet, Text } from "react-native";
import React from "react";

interface HeadingProps {
  title: string;
  customStyles?: string;
}

const Heading: React.FC<HeadingProps> = ({ title, customStyles }) => {
  return (
    <Text style={styles.heading} className={customStyles}>
      {title}
    </Text>
  );
};

const styles = StyleSheet.create({
  heading: {
    fontSize: 22,
    fontWeight: "bold",
    marginVertical: 10,
  },
});

export default Heading;
