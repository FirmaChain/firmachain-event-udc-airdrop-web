import { useEffect, useState } from 'react';
import axios from 'axios';
import './default.css';

import {
  MainContainer,
  ContentsContainer,
  Logo,
  TitleText,
  SubText,
  StoreImageButton,
  Description,
  DescriptionSub,
} from './styles';

const App = () => {
  const [isExpired, setExpired] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      exeDeepLink();
    }, 1000);
  }, []);

  function exeDeepLink() {
    axios
      .get(`${process.env.REACT_APP_API_HOST}/airdrop`)
      .then((response) => {
        if (response.data.result.qrcode.includes('EXPIRED') === false) {
          const url = response.data.result.qrcode;
          window.location.href = url;
        } else {
          setExpired(true);
        }
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
        <Description>Please install from the link provided below.</Description>
        <StoreImageButton
          src='/images/iOS_store.png'
          onClick={() => (window.location.href = 'https://apps.apple.com/kr/app/id1611660902')}
        />
        <StoreImageButton
          src='/images/google_play.png'
          onClick={() =>
            (window.location.href = 'https://play.google.com/store/apps/details?id=com.firma_station_mobile')
          }
        />
        {isExpired && (
          <DescriptionSub>{'The airdrop event has officially ended.\n2022-09-22 ~ 2022-09-23'}</DescriptionSub>
        )}
      </ContentsContainer>
    </MainContainer>
  );
};

export default App;
