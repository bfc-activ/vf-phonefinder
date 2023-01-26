import { Global } from "@emotion/react";

// Load the fonts via CDN using Emotion's Global component.
// They're currently loaded from the Vodafone CDN.
const Fonts = () => (
  <Global
    styles={`
    // Vodafone Regular
    @font-face {
        font-family: VodafoneRegular;
        src: url(https://cdn.vodafone.co.uk/assets/fonts/vodafone-regular.woff) format("woff");
        font-style: normal;
        font-weight: 400;
        font-display: swap
    }
    
    // Vodafone Regular Bold
    @font-face {
        font-family: VodafoneRegularBold;
        src: url(https://cdn.vodafone.co.uk/assets/fonts/vodafone-bold.woff) format("woff");
        font-style: normal;
        font-weight: 400;
        font-display: swap
    }
    
    // Vodafone Regular Light
    @font-face {
        font-family: Vodafone;
        src: url(https://cdn.vodafone.co.uk/assets/fonts/vodafone-light.woff) format("woff");
        font-style: normal;
        font-weight: 200;
        font-display: swap
    }
    
    // Vodafone Regular Medium
    @font-face {
        font-family: Vodafone;
        src: url(https://cdn.vodafone.co.uk/assets/fonts/vodafone-regular.woff) format("woff");
        font-style: normal;
        font-weight: 400;
        font-display: swap
    }
    
    // Vodafone Regular SemiBold
    @font-face {
        font-family: Vodafone;
        src: url(https://cdn.vodafone.co.uk/assets/fonts/vodafone-regular.woff) format("woff");
        font-style: normal;
        font-weight: 600;
        font-display: swap
    }
    
    // Vodafone Regular Bold
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
