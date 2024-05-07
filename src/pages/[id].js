import { useRouter } from "next/router";
import Link from "next/link";
import { products } from "@/lib/products";

export default function DetailsPage() {
  const router = useRouter();
  const { id } = router.query;
  const product = products.find((product) => product.id === id);

  if (!product) {
    return;
  }

  return (
    <>
      <h1>Details to id: {id}</h1>
      <h2>Name: {product.name}</h2>
      <h3>Details: {product.detail}</h3>
      <Link href="/">Back to Home</Link>
    </>
  );
}
