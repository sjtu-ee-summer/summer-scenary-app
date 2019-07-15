import React from 'react';
import JestTest from '../JestTest';

import renderer from 'react-test-renderer';

test('renders correctly', () => {
    const tree = renderer.create(<JestTest/>).toJSON();
    expect(tree).toMatchSnapshot();
});