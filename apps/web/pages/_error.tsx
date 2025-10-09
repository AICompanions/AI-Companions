import type { NextPageContext } from 'next';

function Error({ statusCode }: { statusCode?: number }) {
  return (
    <div style={{ padding: 24 }}>
      <h1>Error</h1>
      <p>{statusCode ? `An error ${statusCode} occurred` : 'An unknown error occurred'}</p>
    </div>
  );
}

function getStatusCode(err: unknown): number | undefined {
  if (typeof err === 'object' && err !== null && 'statusCode' in err) {
    const code = (err as Record<string, unknown>).statusCode;
    if (typeof code === 'number') return code;
  }
  return undefined;
}

Error.getInitialProps = ({ res, err }: NextPageContext) => {
  const statusCode = res?.statusCode ?? getStatusCode(err) ?? 404;
  return { statusCode };
};

export default Error;
