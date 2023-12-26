import {FC, ReactNode, useEffect} from 'react';
import {ImageSourcePropType, Linking, View, Image} from 'react-native';
import {useTypeSelector} from '../../hooks/useTypeSelector';
import {Circle, Svg} from 'react-native-svg';
import styles, {TitleText} from './styles';
interface IPropsOther {
  title: string;
  color: string;
  children: ReactNode;
  img: ImageSourcePropType;
  redirect?: boolean;
}
const StatusOther: FC<IPropsOther> = ({
  title,
  color,
  children,
  img,
  redirect,
}) => {
  const {redirect_url} = useTypeSelector(state => state.form);
  useEffect(() => {
    // if (!redirect || !redirect_url) return;
    // setTimeout(() => {
    //   Linking.openURL(redirect_url);
    // }, 400);
  }, []);

  return (
    <View style={{maxHeight: 412 - 58}}>
      <View style={[styles.svg, styles.svgOther]}>
        <Svg width="472" height="472" viewBox="0 0 472 472" fill="none">
          <Circle cx="236" cy="236" r="236" fill="#FFF0C3" />
          <Circle cx="230" cy="267" r="126" fill={color} />
        </Svg>
      </View>
      <TitleText style={{color: color}}>{title}</TitleText>
      <View style={{maxWidth: 280}}>{children}</View>
      <Image style={styles.img} source={img} />
    </View>
  );
};

export default StatusOther;
