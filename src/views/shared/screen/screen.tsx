import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {IScreenProps} from './screen.props';
import styles from './screen.styles';

const Screen: React.FC<IScreenProps> = ({header, children, footer}) => {
  return (
    <SafeAreaView style={styles.container}>
      {header && header}
      {children}
      {footer && footer}
    </SafeAreaView>
  );
};

export default Screen;
