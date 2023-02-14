import { TouchableOpacityProps } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'

import { Container, Icon, ButtonIconTypeStyleProps, TitleButton } from './styles';

type Props = TouchableOpacityProps & {
  title: string;
  icon: keyof typeof MaterialIcons.glyphMap;
  type?: ButtonIconTypeStyleProps;
}

export function ButtonIcon({ icon, title, type = 'PRIMARY', ...rest }: Props) {
  return(
    
    <Container type={type} {...rest}>
      <Icon 
        name={icon}
        type={type} 
      />
      <TitleButton type={type}>{title}</TitleButton>
    </Container>
  );
}