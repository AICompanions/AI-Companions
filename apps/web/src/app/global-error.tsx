'use client';

export default function GlobalError({ error, reset }: { error: unknown; reset: () => void }) {
  console.error(error);
  return (
    <html lang="en">
      <body style={{ padding: 24 }}>
        <h1>App crashed</h1>
        <button onClick={() => reset()}>Reload</button>
      </body>
    </html>
  );
}
