import CardComp from "@/components/home/CardComp";

const Item = {
  name: "iphone",
  price: "1400",
  link: "link",
};
export default function Home() {
  return (
    <>
      {/*header  */}
      {/*usd  */}
      <div className="w-full">
        <CardComp name={Item.name} price={Item.price} link={Item.link} />
      </div>
    </>
  );
}
