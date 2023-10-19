import FreeTools, {
  MarketingToolsBody,
  ToolMarketingHeading,
} from '@qoruz/pages/tools/freeMarketingTools/FreeMarketingTools.style';
import MarketingToolCard from '@qoruz/pages/tools/MarketingToolCards/MarketingToolCards';
import React from 'react';
import { Container } from 'react-grid-system';

const FreeMarketingTools = () => {
  return (
    <FreeTools>
      <Container className='container bg-white'>
        <MarketingToolsBody>
          <ToolMarketingHeading>
            <h1>
              Free <span className='mark'>Influencer Marketing</span> Tools
            </h1>
            <p className='details'>
              Check out these influencer marketing tools to identify the best
              influencers for your brand, onboard the best influencers to advocate
              your brand, and calculate the influencer engagement rate.
            </p>
          </ToolMarketingHeading>
          {/* <div className='tool-platform'>
            <p className='platform-button'>Youtube</p>
            <p className='platform-button'>Instagram</p>
          </div> */}
          <MarketingToolCard />
        </MarketingToolsBody>
      </Container>
    </FreeTools>
  );
};

export default FreeMarketingTools;
