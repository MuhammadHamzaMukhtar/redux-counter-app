import Counter from "../componenets/Counter";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Counter App</h1>
      <Counter />
    </main>
  );
}
