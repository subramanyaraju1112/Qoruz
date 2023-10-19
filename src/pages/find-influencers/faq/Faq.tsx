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
    title: 'Why do companies use influencers?',
    content:
      'Influencers nurture strong, personal connections with their followers that brands cannot achieve today. The bigger the brand, the harder it is to be close and personable with your followers.',
    concontent:
      'Influencers have the ability to sway the purchasing decisions of their followers due to their expertise, charisma, or authority. By also letting followers into their lives, influencers manage to build powerful relationships based on trust.',
  },
  {
    title: 'How to start influencer marketing?',
    content:
      'Qoruz has a vast network of over 3 lac content influencers spanning across more than 100 categories. With a minimum of 300 influencers in each category, you can be assured of finding influencers that match your specific requirements.',
  },
  {
    title: 'How to reach out to influencers?',
    content:
      'In the event that you are not satisfied with a particular content influencer recommended by Qoruz, you can simply reject their proposal and our platform will suggest alternate influencers until you find one that you are happy to work with.',
  },
  {
    title: 'Is there a free trail available?',
    content:
      'If you can’t find an influencer on Qoruz’s platform, don’t worry. Contact your dedicated campaign manager and they will help onboard the influencer onto the platform and integrate them into your campaign seamlessly.',
  },
  {
    title: 'What does the free version include?',
    content:
      'Absolutely! If you are unhappy with the content shared by the influencer, Qoruz’s team collaborates with them to make the necessary changes and then re-shares it with you for approval.',
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
                    <p className='details'>{item.concontent}</p>
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
