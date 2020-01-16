import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: #fff;
  padding: 20px 1px 0;
`;

export const Image = styled.Image.attrs({
  source: {
    uri:
      'https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  },
})`
  width: 100%;
  height: 200px;
  border-radius: 10px;
  margin-bottom: 20px;
`;

export const Content = styled.View``;

export const Header = styled.View`
  margin-bottom: 20px;
  justify-content: center;
  padding: 0 20px;
`;

export const Title = styled.Text`
  font-weight: bold;
  font-size: 17px;
  color: rgba(0, 0, 0, 0.8);
`;

export const Description = styled.Text`
  font-size: 13px;
  color: rgba(0, 0, 0, 0.5);
`;

export const Body = styled.View`
  flex-direction: row;
  padding: 0 40px;
`;

export const UnityPriceView = styled.View`
  justify-content: center;
  align-items: center;
`;

export const UnityPriceTitle = styled.Text`
  color: #999;
`;

export const UnityPrice = styled.Text`
  color: #333;
  font-weight: bold;
  font-size: 16px;
`;

export const PriceView = styled.View`
  margin-left: 40px;
  justify-content: center;
  align-items: center;
`;

export const PriceTitle = styled.Text`
  color: #999;
`;

export const Price = styled.Text`
  color: #999;
  font-weight: bold;
  font-size: 16px;
`;

export const QuantityView = styled.View``;

export const Footer = styled.View`
  justify-content: center;
  align-items: center;
`;

export const Obs = styled.TextInput.attrs({
  placeholderTextColor: 'lightgray',
  placeholder: 'Observações',
})`
  border-bottom-width: 1px;
  border-bottom-color: lightgray;
  width: 90%;
  padding: 10px;
`;
