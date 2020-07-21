import React from 'react';
import * as Sentry from '@sentry/browser';

type ErrorRetryProps = {
  fallback: (
    error: Error,
    feedback: () => void,
    retry: () => void,
  ) => React.ReactNode;
};

/**
 * This is a Generic, retryable error boundary that we'll use to create other custom error boundaries
 * It allows us send our error logs to Sentry with support for providing user feedback
 * It also supports retrying the action that caused the error
 */

export class ErrorBoundaryWithRetry extends React.Component<
  React.PropsWithChildren<ErrorRetryProps>,
  { error: Error | null; eventID?: string }
> {
  state = { error: null, eventID: '' };

  static getDerivedStateFromError(error: Error) {
    return { error: error };
  }

  retry = () => {
    this.setState({ error: null });
  };

  feedback = () => {
    Sentry.showReportDialog({ eventId: this.state.eventID });
  };

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    if (process.env.NODE_ENV === 'production') {
      Sentry.withScope((scope: any) => {
        scope.setExtras(errorInfo);
        const eventID = Sentry.captureException(error);
        this.setState({ eventID });
      });
    }
  }

  render() {
    const { children, fallback } = this.props;
    const { error } = this.state;

    if (error !== null) {
      if (typeof fallback === 'function') {
        // Have to case error to any here, cause typescript doesn't know yet.
        // There should be a PR tracking this, but I haven't found it.
        return fallback(error as any, this.feedback, this.retry);
      }

      return fallback;
    }

    //when there's not an error, render children untouched
    return children;
  }
}

function ErrorBoundary(props: React.PropsWithChildren<unknown>) {
  return (
    <ErrorBoundaryWithRetry
      fallback={(error, feedback) => (
        <div>
          <div className="error-message">
            <p>
              We're sorry - something's gone wrong and the page could not be
              loaded
            </p>
            <p>
              Our team has been notified, but click
              <button onClick={feedback}>here</button>
              to give us feedback about what you're trying to achieve
            </p>
          </div>
        </div>
      )}
    >
      {props.children}
    </ErrorBoundaryWithRetry>
  );
}

export default ErrorBoundary;

