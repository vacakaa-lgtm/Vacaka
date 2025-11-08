import React from 'react';

interface PricingPlan {
  id: number;
  title: string;
  tag: string;
  titleTagColor: string;
  price: number | 'Custom';
  minutes: number | 'Custom';
  features: string[];
}

const PRICING_PLANS: PricingPlan[] = [
  { id: 1, title: 'Basic', tag: '(Create)', titleTagColor: '#e099ff', price: 299, minutes: 120, features: ['Dubb™', 'Sonic™'] },
  { id: 2, title: 'Plus', tag: '(Express)', titleTagColor: '#a1c0f9', price: 899, minutes: 500, features: ['Dubb™', 'Sonic™', 'Clone™'] },
  { id: 3, title: 'Pro', tag: '(Evolve)', titleTagColor: '#e799c4', price: 2499, minutes: 1200, features: ['Dubb™', 'Connect™', 'Clone™'] },
  { id: 4, title: 'Enterprise', tag: '(Vision)', titleTagColor: '#f7f4e9', price: 'Custom', minutes: 'Custom', features: ['All Products'] },
];

const PricingCard: React.FC<PricingPlan> = ({
  title,
  tag,
  titleTagColor,
  price,
  minutes,
  features,
}) => {
  const isCustom = price === 'Custom';
  const displayPrice: string = isCustom ? 'Custom' : `₹ ${price.toLocaleString('en-IN')}`;
  const displayMinutes: string = isCustom ? 'Custom' : `${minutes.toLocaleString()} minutes`;
  const buttonText: string = isCustom ? 'Contact Sales' : 'Buy Now';

  const renderTitle = (): React.ReactElement => (
    <h3 className="text-xl font-semibold mb-4 text-white" style={{color: titleTagColor}}>
      {title}
      <span className="text-sm ml-2" style={{color: titleTagColor}}>{tag}</span>
    </h3>
  );

  return (
    <div className="flex flex-col p-6 w-full lg:w-1/4 min-w-[280px] bg-gray-900 shadow-xl rounded-xl border border-gray-800 transition-transform duration-300 hover:scale-[1.02] hover:z-10 will-change-transform ">
      {renderTitle()}

      <div className="flex-grow">
        <p className={`text-5xl font-bold mb-6 ${isCustom ? 'text-white' : 'text-indigo-400'}`}>
          {displayPrice}
        </p>
        
        <p className="text-gray-400 mb-2">
          Included minutes: <span className="text-white font-medium">{displayMinutes}</span>
        </p>

        <div className="text-gray-400 text-base mb-8">
          <p className="text-white font-light">
            {features.join(' • ')}
          </p>
        </div>
      </div>

      <button className="w-fit mx-auto px-6 py-3 mt-4 text-white font-medium bg-gradient-to-r from-pink-400 to-purple-400 rounded-3xl shadow-lg hover:from-pink-500 hover:to-purple-500 transition duration-150">
        {buttonText}
      </button>
    </div>
  );
};

const PricingCardSection: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white font-sans p-4 sm:p-8">
      <header className="max-w-7xl mx-auto mb-12">
        <h1 className="text-5xl font-bold mb-4">Bundle Pricing</h1>
        <p className="text-lg text-gray-400">
          Simple plans for creators, studios, and enterprises.
        </p>
      </header>

      <main className="max-w-7xl mx-auto overflow-hidden px-4">
        <div className="
          grid grid-cols-1 gap-6 
          md:grid-cols-2 
          lg:flex lg:flex-row lg:flex-nowrap lg:gap-6 lg:overflow-x-auto
          py-4
        ">
          {PRICING_PLANS.map((plan: PricingPlan) => (
            <PricingCard key={plan.id} {...plan} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default PricingCardSection;