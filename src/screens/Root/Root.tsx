/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View} from 'react-native';

import Navigator from '../../navigation/Navigator';

const RootScreen: React.FC = (): JSX.Element => {
  return (
    <View style={{flex: 1}}>
      <Navigator />
    </View>
  );
};

export default RootScreen;
