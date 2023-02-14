import { TouchableOpacityProps } from 'react-native';

import { Container, TitleButton } from './styles';

type Props = TouchableOpacityProps & {
  title: string;
}

export function Button({ title, ...rest }: Props) {

 
  return(
    <Container {...rest}>
      <TitleButton>{title}</TitleButton>
    </Container>
  );
}