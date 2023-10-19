import React from 'react';
import { Col, Container, Row } from 'react-grid-system';

import FaqStyled, {
  FaqContent,
  FaqList,
  FaqListItem,
  FaqTitle,
  Icon,
  Intro,
} from './Faq.style';

const data = [
  {
    title: 'How to begin with influencer marketing for the first time?',
    content:
      'Qoruz is an ideal platform for those launching their first influencer Marketing campaign. With our hands-on approach, we assist you throughout the entire process and offer support at every step of execution.',
  },
  {
    title: 'Can I expect to collaborate with influencers who align with my category?',
    content:
      'Qoruz has a vast network of over 3 lac content influencers spanning across more than 100 categories. With a minimum of 300 influencers in each category, you can be assured of finding influencers that match your specific requirements.',
  },
  {
    title: 'What if I don’t like a specific influencer recommended by Qoruz?',
    content:
      'In the event that you are not satisfied with a particular content influencer recommended by Qoruz, you can simply reject their proposal and our platform will suggest alternate influencers until you find one that you are happy to work with.',
  },
  {
    title: 'What should I do if I cannot find an influencer on the platform?',
    content:
      "If you can't find an influencer on Qoruz's platform, don't worry. Contact your dedicated campaign manager and they will help onboard the influencer onto the platform and integrate them into your campaign seamlessly.",
  },
  {
    title: 'Is it possible to modify the content created by the influencer?',
    content:
      "Absolutely! If you are unhappy with the content shared by the influencer, Qoruz's team collaborates with them to make the necessary changes and then re-shares it with you for approval.",
  },
  {
    title: 'What is the cost of collaborating with influencers for campaigns on Qoruz?',
    content:
      'The cost of collaborating with a content influencer on Qoruz depends on their tier. On average, a nano or micro influencer charges around Rs. 4000, while a mid-tier influencer charges Rs. 30,000 and a macro influencer charges Rs. 60,000.',
  },
];

const Faq = () => {
  const [active, setActive] = React.useState(-1);
  return (
    <FaqStyled id='faq' className='faq wow fadeInUp'>
      <Container className='container'>
        <Row>
          <Col sm={12} lg={5}>
            <Intro className='faq-intro wow fadeInUp'>
              <h2>Frequently Asked Questions</h2>
              <p className='details'>
                Everything you need to know about the product and how it works.
                <b> Can't find an answer?</b>
              </p>
            </Intro>
          </Col>
          <Col sm={12} lg={7}>
            <FaqList className='faq-list'>
              {data.map((item, index) => (
                <FaqListItem
                  className='faq-list-item wow fadeInUp'
                  key={`faq-item-${index}`}
                >
                  <FaqTitle
                    className='faq-title'
                    onClick={() => {
                      const panel: any = document.getElementById(
                        `faq-content-${index}`
                      );
                      if (panel) {
                        if (panel.style.maxHeight) {
                          panel.style.maxHeight = null;
                        } else {
                          panel.style.maxHeight = panel.scrollHeight + 'px';
                        }
                      }
                      if (active !== -1) {
                        const prevPanel: any = document.getElementById(
                          `faq-content-${active}`
                        );
                        if (prevPanel) {
                          prevPanel.style.maxHeight = null;
                        }
                      }
                      if (active === index) {
                        setActive(-1);
                      } else {
                        setActive(index);
                      }
                    }}
                  >
                    {active === index ? (
                      <Icon className='icon active'>+</Icon>
                    ) : (
                      <Icon className='icon'>+</Icon>
                    )}
                    <h5 className={`${active === index ? 'title-active' : ''}`}>
                      {item.title}
                    </h5>
                  </FaqTitle>
                  <FaqContent
                    className='faq-content'
                    id={`faq-content-${index}`}
                  >
                    <p className='details'>{item.content}</p>
                  </FaqContent>
                </FaqListItem>
              ))}
            </FaqList>
          </Col>
        </Row>
      </Container>
    </FaqStyled>
  );
};

export default Faq;
