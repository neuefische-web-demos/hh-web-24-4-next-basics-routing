import Link from "next/link";

export default function Egal({ brokkoli }) {
  return (
    <>
      <h1> Hallo Welt!</h1>
      <h2>{brokkoli}</h2>
      <Link href="/apfel">Apfel</Link>
      <hr />
      <a href="/apfel">Apfel old</a>
    </>
  );
}
