import Voice, { SpeechErrorEvent, SpeechResultsEvent } from '@react-native-voice/voice';
import { useCallback, useEffect, useState } from 'react';
import { IState } from './interfaces';

const defaultState = {
  recognized: '',
  pitch: '',
  error: '',
  end: '',
  started: '',
  results: [],
  partialResults: [],
  isRecording: false,
};

export const useVoiceRecognition = () => {
  const [state, setState] = useState<IState>(defaultState);

  const resetState = useCallback(() => {
    setState(defaultState);
  }, [setState]);

  const startRecognizing = useCallback(async () => {
    resetState();

    try {
      await Voice.start('en-US');
    } catch (e: any) {
      console.log(e);
    }
  }, [resetState]);

  const stopRecognizing = useCallback(async () => {
    try {
      await Voice.stop();
    } catch (e: any) {
      console.error(e);
    }
  }, []);

  const cancelRecognizing = useCallback(async () => {
    try {
      await Voice.cancel();
    } catch (e: any) {
      console.error(e);
    }
  }, []);

  const destroyRecognizer = useCallback(async () => {
    try {
      await Voice.destroy();
    } catch (e: any) {
      console.error(e);
    }
    resetState();
  }, [resetState]);

  useEffect(() => {
    Voice.onSpeechStart = (e: any) => {
      setState((prevState) => ({
        ...prevState,
        started: '√',
        isRecording: true,
      }));
    };

    Voice.onSpeechRecognized = (e: any) => {
      setState((prevState) => ({
        ...prevState,
        recognized: '√',
      }));
    };

    Voice.onSpeechEnd = (e: any) => {
      setState((prevState) => ({
        ...prevState,
        end: '√',
        isRecording: false,
      }));
    };
    Voice.onSpeechError = (e: SpeechErrorEvent) => {
      setState((prevState) => ({
        ...prevState,
        error: JSON.stringify(e.error),
        isRecording: false,
      }));
    };

    Voice.onSpeechResults = (e: SpeechResultsEvent) => {
      if (e.value) {
        setState((prevState) => ({
          ...prevState,
          results: e.value!,
        }));
      }
    };

    Voice.onSpeechPartialResults = (e: SpeechResultsEvent) => {
      setState((prevState) => ({
        ...prevState,
        partialResults: e.value!,
      }));
    };

    Voice.onSpeechVolumeChanged = (e: any) => {
      setState((prevState) => ({
        ...prevState,
        pitch: e.value,
      }));
    };

    return () => {
      Voice.destroy().then(Voice.removeAllListeners);
    };
  }, []);

  return {
    state,
    setState,
    Voice,
    startRecognizing,
    stopRecognizing,
    cancelRecognizing,
    destroyRecognizer,
  };
};
