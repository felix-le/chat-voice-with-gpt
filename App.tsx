import React, { useState } from 'react';
import { Button, Pressable, StyleSheet, Text, View } from 'react-native';
import { useVoiceRecognition } from './src/hooks/useVoiceRecognition';
import Heading from './src/components/common/Heading';
export default function App() {
  const { state, startRecognizing, stopRecognizing, destroyRecognizer } =
    useVoiceRecognition();

  const [isPressing, setIsPressing] = useState<boolean>(false);

  const _handlePressButton = () => {
    setIsPressing((prevState) => !prevState);
  };

  const _handlePressIn = () => {
    _handlePressButton();
  };
  const _handlePressOut = () => {
    _handlePressButton();
  };

  return (
    <View className='flex-1 bg-white items-center justify-center'>
      <Heading title='Talk GPT' customStyles='text-black' />
      <Text className='text-center p-4 text-blue text-base'>
        Press and hold this button to record your voice. Release the button to
        send the recording, and you'll hear a response
      </Text>
      <Text className='mb-4 '>Your message: </Text>

      <Pressable
        className={`w-[90%] p-7 border-2 items-center  rounded-lg ${
          isPressing ? 'border-green' : 'border-neutral-300'
        }`}
        onPressIn={_handlePressIn}
        onPressOut={_handlePressOut}
      >
        <Text>Hold to speak</Text>
      </Pressable>
      <Button title='Replay last message' />
    </View>
  );
}
