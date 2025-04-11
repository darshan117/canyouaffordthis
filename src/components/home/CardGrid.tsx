import { Card, CardContent } from "@/components/ui/card";

const cards = [
  { id: "1", title: "Card 1", disc: "Description 1", number: "001" },
  { id: "2", title: "Card 2", disc: "Description 2", number: "002" },
  { id: "3", title: "Card 3", disc: "Description 3", number: "003" },
  { id: "4", title: "Card 4", disc: "Description 4", number: "004" },
];

export default function CardGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {cards.map((card) => (
        <Card key={card.id}>
          <CardContent className="p-4 space-y-2">
            <h2 className="text-lg font-semibold">{card.title}</h2>
            <p className="text-sm text-muted-foreground">{card.disc}</p>
            <span className="text-xs text-gray-500">#{card.number}</span>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
