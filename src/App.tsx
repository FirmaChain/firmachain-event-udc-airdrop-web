import axios from 'axios';
import './default.css';

import { MainContainer, ContentsContainer, Logo, TitleText, SubText, Button } from './styles';

const App = () => {
  const redireactApp = () => {
    exeDeepLink();
  };

  const redirectStore = () => {
    const ua = navigator.userAgent.toLowerCase();

    window.location.href =
      ua.indexOf('android') > -1
        ? 'https://play.google.com/store/apps/details?id=com.firma_station_mobile'
        : 'https://apps.apple.com/kr/app/id1611660902';
  };

  function exeDeepLink() {
    axios
      .get(`${process.env.REACT_APP_API_HOST}/airdrop`)
      .then((response) => {
        const url = response.data.result.qrcode;
        window.location.href = url;
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <MainContainer>
      <ContentsContainer>
        <Logo />
        <TitleText>Firma Station</TitleText>
        <SubText>Airdrop Event UDC 2022</SubText>
        <Button isActive={true} onClick={redirectStore}>
          Install
        </Button>
        <Button isActive={true} onClick={redireactApp}>
          Airdrop
        </Button>
      </ContentsContainer>
    </MainContainer>
  );
};

export default App;
