interface InfoCard {
  icon: React.ComponentType<{ className?: string }>;
  iconColor: string;
  title: string;
  description: string;
}

interface InfoCardsProps {
  cards: InfoCard[];
}

export function InfoCards({ cards }: InfoCardsProps) {
  const getCardBackground = (iconColor: string) => {
    if (iconColor.includes("green")) return "bg-green-50 dark:bg-green-900/20";
    if (iconColor.includes("blue")) return "bg-blue-50 dark:bg-blue-900/20";
    return "bg-purple-50 dark:bg-purple-900/20";
  };

  return (
    <div className="mb-12 grid grid-cols-1 gap-6 md:grid-cols-3">
      {cards.map((card, index) => (
        <div
          key={index}
          className={`rounded-lg p-6 text-center ${getCardBackground(card.iconColor)}`}
        >
          <card.icon className={`mx-auto mb-3 h-8 w-8 ${card.iconColor}`} />
          <h3 className="mb-2 font-semibold text-gray-900 dark:text-white">
            {card.title}
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            {card.description}
          </p>
        </div>
      ))}
    </div>
  );
}
