import CostCountStyle from '@qoruz/pages/tools/influencer-cost-checker/cost/costCount.style';
import { CalculatorContentSection } from '@qoruz/pages/tools/instagramCalculatorContent/instagramCalculatorContent.style';
import { joinS3 } from '@qoruz/utils/cloudinaryUrlTransform';
import Image from 'next/image';
import React from 'react';
import { Container } from 'react-grid-system';

const CostCount = () => {
  return (
    <CalculatorContentSection>
      <Container className='container'>
        <CostCountStyle>
          <p className='sub-heading'>
            Influencer marketing is the trending marketing form right now.
            Brands are turning to influencers to help them reach their target
            audiences, but the question remains: how much does each influencer
            cost?
          </p>
          <p className='sub-heading'>
            Taking a wild guess or using influencer cost calculators would serve
            as a guide for the average cost but does not give you the actual
            cost.
          </p>
          <p className='sub-heading'>
            Every influencer works at different prices. The only way to know
            their actual price is from themselves.
          </p>
          <p className='sub-heading'>
            You needn’t reach out manually to figure out the cost of the
            influencer. Influencer marketing platforms do just that.
          </p>
          <p className='sub-heading'>
            With an influencer marketing platform, see the actual cost of
            working with a specific influencer and determine if they suit your
            marketing budget.
          </p>
          <p className='sub-heading'>
            The cost of working with influencers is a big part of the equation
            in influencer campaigns.
          </p>
          <p className='sub-heading'>
            Knowing the cost of working with influencers helps brands make more
            informed decisions in influencer marketing campaigns, control costs,
            build more transparent relationships, and maximize ROI.
          </p>
          <p className='sub-heading'>
            Influencer cost knowledge can help brands identify the most
            cost-effective influencers and types of campaigns for their goals
            and ensure they get the most value from their influencer
            partnerships.
          </p>
        </CostCountStyle>
        <CostCountStyle>
          <h2 className='heading'>Finding Influencer Cost</h2>
        </CostCountStyle>
        <CostCountStyle>
          <h2 className='tool-sub-heading border-title'>Traditional Methods</h2>
          <p className='tools-content'>
            Manual reaching out to influencers on social media platforms and
            asking for their cost takes time and resources away from other areas
            of your business. Brands have no way of knowing how much influencers
            charge in India unless they respond.
          </p>
        </CostCountStyle>
        <CostCountStyle>
          <h2 className='tool-sub-heading border-title'>
            Approaching Via Third-Party Vendors
          </h2>
          <p className='tools-content'>
            Affordability is a significant factor in influencer marketing.
            Affordability also addresses the fact that brands don’t want to
            overpay more than the actual cost for an influencer. Reaching out
            via third-party vendors, brands end up paying 5X fees than the
            actual cost.
          </p>
        </CostCountStyle>
        <CostCountStyle>
          <h2 className='tool-sub-heading border-title'>
            Other Cost Checker Tools
          </h2>
          <p className='tools-content'>
            One-shoe-fits-all isn’t the approach brands can take when finding
            influencer costs. Most of the Instagram influencer earnings
            calculators rely on a formula to know the influencer cost will not
            help narrow down the list of influencers you want to collaborate
            with based on your budget.
          </p>
          <p className='tools-content'>
            The influencer earnings calculator brings a system where brands can
            give the influencer criteria like the following numbers and
            engagement rate, and the tool suggests the approximate cost of the
            influencer.
          </p>

          <ul
            className='tools-content'
            style={{
              listStyleType: 'disc',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <p className='tools-content'>The problem with this structure is:</p>
            <li>It's not the actual cost of the influencer.</li>
            <li>
              The approximate cost is not going to help run the influencer
              marketing campaign.
            </li>
            <li>
              Brands end up in a dilemma (if the influencer would charge based
              on the approximate number provided by most tools).
            </li>
          </ul>
        </CostCountStyle>

        <CostCountStyle>
          <h2 className='heading'>Qoruz Platform</h2>
          <p className='tools-content'>
            Qoruz provides a “No Formula Model” for marketers to find the actual
            cost of an influencer for promoting products or services through
            their channels. Influencers themselves are usually the ones updating
            their deliverable cost. However, brands can request this information
            from influencers for the current charges.
          </p>
        </CostCountStyle>
        <CostCountStyle
          className='cost-image-parent'
          style={{ textAlign: 'center', marginTop: '$sm' }}
        >
          <Image
            src={joinS3('images/marketing-tools/cost.jpg')}
            alt='cost-image'
            className='cost-image'
            width={1080}
            height={1080}
            // style={{ width: '60%', height: '60%' }}
          />
        </CostCountStyle>

        <CostCountStyle>
          <ul
            className='tools-content mt-none'
            style={{
              listStyleType: 'disc',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <p className='tools-content'>
              Steps to find influencer cost on the platform:
            </p>
            <li>
              Enter the influencer name or find one from the curated lists
            </li>
            <li>Click on the influencer name and the cost section</li>
            <li>View the influencer cost</li>
          </ul>

          <p className='tools-content'>
            Finding influencer cost via the Qoruz platform is that easy. Brands
            save hours of manual work by finding the influencer cost within a
            few minutes.
          </p>
          <p className='tools-content'>
            The influencer themselves updates the deliverable costs. Brands can
            also request the updated cost from influencers via the platform and
            get notified without waiting for days.
          </p>
        </CostCountStyle>
        <CostCountStyle>
          <h2 className='heading'>Benefits of Knowing Influencer Cost</h2>
        </CostCountStyle>
        <CostCountStyle>
          <h2 className='tool-sub-heading border-title'>
            Deciding Factor to Carryout Campaigns
          </h2>
          <p className='tools-content'>
            Knowing the influencer cost helps brands make an informed decision
            about whether or not the price fits into their marketing budget. It
            saves a lot of the brand’s time in reaching out to influencers who
            don’t fit the budget. Shortlist and collaborate with influencers who
            fit your marketing budget.
          </p>
        </CostCountStyle>
        <CostCountStyle>
          <h2 className='tool-sub-heading border-title'>
            No More Overcharging
          </h2>
          <p className='tools-content'>
            Brands no longer need to be reliant on third-party vendors to
            overcharge or make up costs with commission fees and extra charges.
            Know exactly how much an influencer costs to collaborate, and plan
            the campaign budget accordingly. Brands can stop wasting money on
            overpriced campaigns, and start saving marketing budgets for the
            things that matter.
          </p>
        </CostCountStyle>
        <CostCountStyle>
          <h2 className='tool-sub-heading border-title'>Brands in the Know</h2>
          <p className='tools-content'>
            When brands don't have a clear picture of how much an influencer
            costs, there's really no way to make an informed decision about
            whether or not it's worth investing in. It's all about transparency.
            Knowing the actual cost of collaborating with an influencer helps
            brands be aware of the spending on influencers and getting what they
            pay for while sticking within the budget.
          </p>
        </CostCountStyle>
        <CostCountStyle>
          <h2 className='tool-sub-heading border-title'>Scalability</h2>
          <p className='tools-content'>
            Understanding the cost of working with different types of
            influencers can help brands plan and scale their influencer
            marketing efforts more effectively. Brands may decide to work with a
            mix of macro and micro-influencers or focus on building long-term
            relationships with a select group of influencers who offer the best
            balance of cost and value.
          </p>
        </CostCountStyle>
      </Container>
    </CalculatorContentSection>
  );
};

export default CostCount;
