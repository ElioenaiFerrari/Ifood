import styled from 'styled-components/native';
import {primary} from '../../shared/themes/colors';

export const Container = styled.View`
  width: 100%;
  height: 80px;
  justify-content: center;
  align-items: center;
  background: ${primary};
`;

export const Logo = styled.Image.attrs({
  source: {
    uri:
      'https://logodownload.org/wp-content/uploads/2017/05/ifood-logo-01.png',
  },
  resizeMode: 'contain',
})`
  width: 100;
  height: 100;
`;
