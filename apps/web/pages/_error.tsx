import type { NextPageContext } from 'next';

function Error({ statusCode }: { statusCode?: number }) {
  return (
    <div style={{ padding: 24 }}>
      <h1>Error</h1>
      <p>{statusCode ? `An error ${statusCode} occurred` : 'An unknown error occurred'}</p>
    </div>
  );
}

// Keep it super-basic so prerender never trips over complex children
Error.getInitialProps = ({ res, err }: NextPageContext) => {
  const statusCode = res?.statusCode ?? (err as any)?.statusCode ?? 404;
  return { statusCode };
};

export default Error;
