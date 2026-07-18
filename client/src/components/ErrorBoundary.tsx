import { Component, type ErrorInfo, type ReactNode } from 'react';

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  state: ErrorBoundaryState = { hasError: false };

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('SmartRoute AI — unhandled UI error:', error, errorInfo);
  }

  handleReset = () => {
    this.setState({ hasError: false });
    window.location.assign('/');
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-background px-6 text-center">
          <div className="mb-3 flex h-16 w-16 items-center justify-center rounded-md bg-primary">
            <div className="h-5 w-5 rounded-full bg-accent" />
          </div>
          <h1 className="mb-2 text-2xl font-extrabold tracking-tight text-ink">
            Something went wrong
          </h1>
          <p className="mb-7 max-w-sm text-sm text-muted">
            An unexpected error occurred while rendering this page. Try returning to the
            homepage.
          </p>
          <button
            onClick={this.handleReset}
            className="rounded-DEFAULT bg-primary px-6 py-3 text-sm font-bold text-background transition-colors hover:bg-primary-hover"
          >
            Back to Home
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}