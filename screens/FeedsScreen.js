import React, { useContext, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import FloatingWriteButton from '../components/FloatingWriteButton';
import LogContext from '../contexts/LogContext';
import FeedList from '../components/FeedList';
import { isSearchBarAvailableForCurrentPlatform } from 'react-native-screens';

function FeedsScreen() {
  const { logs } = useContext(LogContext);
  const [hidden, setHidden] = useState(false);

  const onScrolledToBottom = (isBottom) => {
    if (hidden != isBottom) {
      setHidden(isBottom);
    }
  };

  return (
    <View style={styles.block}>
      <FeedList logs={logs} onScrolledToBottom={onScrolledToBottom} />
      <FloatingWriteButton hidden={hidden} />
    </View>
  );
}

const styles = StyleSheet.create({
  block: {
    flex: 1,
  },
  input: {
    padding: 16,
    backgroundColor: 'white',
  },
});

export default FeedsScreen;
