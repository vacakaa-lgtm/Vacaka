import React from 'react';

export interface InfoCardData {
  title: string;
  description: string;
  backgroundColor: string;
}

export interface InfoCardListProps {
  cards: InfoCardData[];
}

/**
 * A reusable component that renders multiple info cards from an array
 */
export const InfoCardList: React.FC<InfoCardListProps> = ({
  cards,
}) => {
  const cardStyle = (card: InfoCardData): React.CSSProperties => ({
    backgroundColor: card.backgroundColor,
    padding: '40px 50px',
    color: '#ffffff',
  });

  const titleStyle = (): React.CSSProperties => ({
    fontSize: '32px',
    fontWeight: 'bold',
    marginBottom: '20px',
    color: '#ffffff',
    letterSpacing: '1px',
  });

  const descriptionStyle: React.CSSProperties = {
    fontSize: '16px',
    lineHeight: '1.6',
    margin: 0,
  };

  return (
    <div className='flex flex-col gap-10 my-20'>
      {cards.map((card, index) => (
        <div key={index} style={cardStyle(card)}>
          <h2 style={titleStyle()}>{card.title}</h2>
          <p style={descriptionStyle}>{card.description}</p>
        </div>
      ))}
    </div>
  );
};