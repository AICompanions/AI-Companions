'use client';

export default function Error({ error, reset }: { error: unknown; reset: () => void }) {
  console.error(error);
  return (
    <div style={{ padding: 24 }}>
      <h1>Something went wrong</h1>
      <button onClick={() => reset()}>Try again</button>
    </div>
  );
}
