import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamsList} from '@navigations/RootStackNavigator';

export const useNavigationFn = <
  routeName extends keyof RootStackParamsList = never,
>() => {
  return useNavigation<StackNavigationProp<RootStackParamsList, routeName>>();
};
