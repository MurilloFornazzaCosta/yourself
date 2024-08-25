import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants/colors';

export const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    backgroundColor: COLORS.WINTER.BACKGROUND,
  },
  title: {
    fontSize: 35,
    color: COLORS.WINTER.ICON.RED,
    fontWeight: '900',
    marginBottom: 30,
  },
  label: {
    fontSize: 17,
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    marginLeft: '10%'
  },
});