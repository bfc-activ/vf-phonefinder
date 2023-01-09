import { Global } from "@emotion/react";

const Fonts = () => (
  <Global
    styles={`
    @font-face {
        font-family: VodafoneRegular;
        src: url(https://cdn.vodafone.co.uk/assets/fonts/vodafone-regular.woff) format("woff");
        font-style: normal;
        font-weight: 400;
        font-display: swap
    }
    
    @font-face {
        font-family: VodafoneRegularBold;
        src: url(https://cdn.vodafone.co.uk/assets/fonts/vodafone-bold.woff) format("woff");
        font-style: normal;
        font-weight: 400;
        font-display: swap
    }
    
    @font-face {
        font-family: Vodafone;
        src: url(https://cdn.vodafone.co.uk/assets/fonts/vodafone-light.woff) format("woff");
        font-style: normal;
        font-weight: 200;
        font-display: swap
    }
    
    @font-face {
        font-family: Vodafone;
        src: url(https://cdn.vodafone.co.uk/assets/fonts/vodafone-regular.woff) format("woff");
        font-style: normal;
        font-weight: 400;
        font-display: swap
    }
    
    @font-face {
        font-family: Vodafone;
        src: url(https://cdn.vodafone.co.uk/assets/fonts/vodafone-regular.woff) format("woff");
        font-style: normal;
        font-weight: 600;
        font-display: swap
    }
    
    @font-face {
        font-family: Vodafone;
        src: url(https://cdn.vodafone.co.uk/assets/fonts/vodafone-bold.woff) format("woff");
        font-style: normal;
        font-weight: 700;
        font-display: swap
    }
      `}
  />
);

export default Fonts;
