import React, { useRef, useState, useEffect } from 'react';
import { View, StyleSheet, Animated, Button } from 'react-native';
import { Calendar } from 'react-native-calendars';

function CalendarScreen() {
  return <Calendar />
}

const styles = StyleSheet.create({
  block: {
    flex: 1,
  },
});

export default CalendarScreen;