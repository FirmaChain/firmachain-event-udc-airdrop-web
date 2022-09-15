import { useEffect } from 'react';
import axios from 'axios';
import './default.css';

import {
  MainContainer,
  ContentsContainer,
  Logo,
  TitleText,
  SubText,
  StoreButtonWrapper,
  StoreButton,
  StoreImage,
  StoreTextWrapper,
  StoreText1,
  StoreText2,
} from './styles';

const App = () => {
  useEffect(() => {
    setTimeout(() => {
      exeDeepLink();
    }, 1000);
  }, []);

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
        <TitleText>FIRMACHAIN</TitleText>
        <SubText>UDC 2022 AIRDROP EVENT</SubText>
        <StoreButtonWrapper>
          <StoreButton onClick={() => (window.location.href = 'https://apps.apple.com/kr/app/id1611660902')}>
            <StoreImage src='/images/icon_apple.png'></StoreImage>
            <StoreTextWrapper>
              <StoreText1>Download on the</StoreText1>
              <StoreText2>App Store</StoreText2>
            </StoreTextWrapper>
          </StoreButton>

          <StoreButton
            onClick={() =>
              (window.location.href = 'https://play.google.com/store/apps/details?id=com.firma_station_mobile')
            }
          >
            <StoreImage src='/images/icon_google.png'></StoreImage>
            <StoreTextWrapper>
              <StoreText1>GET IT ON</StoreText1>
              <StoreText2>Google Play</StoreText2>
            </StoreTextWrapper>
          </StoreButton>
        </StoreButtonWrapper>
      </ContentsContainer>
    </MainContainer>
  );
};

export default App;
