import { type PropsWithChildren } from 'react';
import { StyleSheet, View } from 'react-native';
import { BG_COLOR } from '@/theme';

type ContainerProps = PropsWithChildren;

export const Container = ({ children }: ContainerProps) => (
  <View style={styles.container}>{children}</View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: BG_COLOR,
  },
});
