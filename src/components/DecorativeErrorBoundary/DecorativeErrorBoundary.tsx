import { Component, type ReactNode } from 'react'

type DecorativeErrorBoundaryProps = {
  children: ReactNode
}

type DecorativeErrorBoundaryState = {
  hasError: boolean
}

export class DecorativeErrorBoundary extends Component<
  DecorativeErrorBoundaryProps,
  DecorativeErrorBoundaryState
> {
  state: DecorativeErrorBoundaryState = { hasError: false }

  static getDerivedStateFromError(): DecorativeErrorBoundaryState {
    return { hasError: true }
  }

  render() {
    return this.state.hasError ? null : this.props.children
  }
}
