import SecondHeader from '@qoruz/pages/find-influencers/rootPage/rootHeader/rootHeader';
import RootHero from '@qoruz/pages/find-influencers/rootPage/rootHero/rootHero';
import RootPage from '@qoruz/pages/find-influencers/rootPage/rootPage';
import Footer from '@qoruz/pages/footer/footer';
import React from 'react';
import CuratedList from 'src/utils/CuratedList.json';

const Index = () => {
  const [filteredCards, setFilteredCards] = React.useState<any>(CuratedList);

  const handleSearch = (searchTerm: any) => {
    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    const filteredData = CuratedList.filter(
      (card) =>
        card.CuratedName.toLowerCase().includes(lowerCaseSearchTerm) ||
        card.CategoryName.toLowerCase().includes(lowerCaseSearchTerm)
    );
    setFilteredCards(filteredData);
  };
  return (
    <>
      <SecondHeader />
      <RootHero onSearch={handleSearch} />
      <RootPage cards={filteredCards} />
      <Footer />
    </>
  );
};

export default Index;
