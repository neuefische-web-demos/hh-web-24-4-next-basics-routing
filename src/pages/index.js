import Link from "next/link";
import { products } from "@/lib/products";

export default function Homepage() {
  return (
    <ul>
      {products.map((product) => {
        return (
          <li key={product.id}>
            {product.name} <Link href={`/${product.id}`}>Detailspage</Link>
          </li>
        );
      })}
    </ul>
  );
}
