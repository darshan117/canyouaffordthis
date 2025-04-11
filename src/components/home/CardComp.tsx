import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

type Item = {
  name: string;
  price: string;
  link: string;
};

export default function CardComp({ name, price, link }: Item) {
  return (
    <>
      <Card className="w-fit rounded-none border-2 border-black">
        <Image
          src={"https://www.google.com"}
          width={40}
          height={40}
          alt="item image"
        />
        <CardHeader>
          <CardTitle>{name}</CardTitle>
          <CardDescription>{price}</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Add this later</p>
        </CardContent>
        <CardFooter>
          <p>Card somehthing somethingt Add</p>
        </CardFooter>
      </Card>
    </>
  );
}
