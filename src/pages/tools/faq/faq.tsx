import React from 'react';
import { Col, Container, Row } from 'react-grid-system';

import FaqStyled, {
  FaqContent,
  FaqList,
  FaqListItem,
  FaqTitle,
  Icon,
  Intro,
} from './faq.style';

const Faq = ({ data }: { data?: any }) => {
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
              {data?.map((item: any, index: any) => (
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
                    {item.content && <p className='details'>{item.content}</p>}
                    {item.content && (
                      <p className='details'>{item.concontent}</p>
                    )}
                    {!item.content && (
                      <>
                        <p>{item?.headContent}</p>
                        {item.manyList?.map((itemMini: any) => {
                          return (
                            <>
                              {' '}
                              <p className='details'>
                                <b>{itemMini.subheading} </b>
                                {itemMini.subcontent}
                              </p>
                            </>
                          );
                        })}
                      </>
                    )}
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
