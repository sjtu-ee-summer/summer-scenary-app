import 'react-native';
import * as React from 'react';
import Index from '../index.android.js';

// Note: test renderer must be required after react-native.
import * as renderer from 'react-test-renderer';
jest.mock('react-native-sound', () => 'Sound');
jest.mock('react-native-audio', () => 'AudioRecorder')
jest.mock('react-native-audio', () => 'AudioUtils')
jest.mock('react-native-fs', () => 'RNFS')
jest.mock('react-native-fetch-blob', () => 'RNFetchBlob')

it('renders correctly', () => {
  const tree = renderer.create(
    <Index />
  );
});
