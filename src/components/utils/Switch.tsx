//⚫️ ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
//               COMPONENTS > UTILS > SWITCH.TSX
//⚫️ ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
//                       IMPORTS
//⚫️ ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
import { ReactElement, ReactNode } from 'react';
//⚫️ ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞

/**
 * Props for Match component that handles individual conditional cases
 *
 * @template TMatchType - Type of the value being matched against
 */
type MatchProps<TMatchType> = {
  /** The condition to check */
  when: TMatchType | undefined | null | false;
  /** Content to render when condition is true */
  children: ReactNode | ((item: TMatchType) => ReactNode);
}
//⚫️ ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞

/** Type to identify a Match component VNode */
type MatchComponent<TMatchType> = ReactElement<MatchProps<TMatchType>>;

//⚫️ ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞

/** Type guard to ensure child is a Match component */
function isMatchComponent<TMatchType>(
  child: ReactNode,
): child is MatchComponent<TMatchType> {
  return (
    child != null &&
    typeof child === 'object' &&
    'type' in child &&
    child.type === Match
  );
}

//⚫️ ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞

/** Props for Switch component that manages multiple Match children */
type SwitchProps<TMatchType> = {
  /** Content to render when no Match conditions are true */
  fallback?: ReactNode;
  /** One or more Match components */
  children: MatchComponent<TMatchType> | Array<MatchComponent<TMatchType>>;
}

//⚫️ ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞

/**
 * Conditional component that renders based on a condition.
 * Must be used as a child of Switch component.
 *
 * @template TMatchType - Type of the value being matched
 */
export function Match<TMatchType>({
  when,
  children,
}: MatchProps<TMatchType>): ReactNode {
  if (!when) return null;
  
  return typeof children === 'function'
    ? children(when)
    : children;
}

//⚫️ ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞

// noinspection JSUnusedGlobalSymbols
/**
 * A type-safe conditional rendering system for mutually exclusive conditions.
 * Similar to a switch statement, renders the first Match with a truthy condition.
 *
 * @template TMatchType - Type of the values being matched
 * @example
 * // Basic routing example
 * <Switch fallback={<NotFound />}>
 *   <Match when={route === "home"}>
 *     <Home />
 *   </Match>
 *   <Match when={route === "settings"}>
 *     <Settings />
 *   </Match>
 * </Switch>
 *
 * @example
 * // With function children accessing the matched value
 * <Switch fallback={<GuestView />}>
 *   <Match when={user}>
 *     {(user) => <UserProfile data={user} />}
 *   </Match>
 *   <Match when={isLoading}>
 *     <LoadingSpinner />
 *   </Match>
 * </Switch>
 */
export function Switch<TMatchType>({
  fallback,
  children,
}: SwitchProps<TMatchType>): ReactNode {
  const childrenArray = ([] as Array<MatchComponent<TMatchType>>).concat(children);
  
  switch (true) {
    case childrenArray.length === 0: {
      return fallback || null;
    }
    
    case !childrenArray.some((child: ReactElement<MatchProps<TMatchType>>) => (
      isMatchComponent<TMatchType>(child)
    )): {
      return fallback || null;
    }
    
    case childrenArray.some((child: ReactElement<MatchProps<TMatchType>>) => (
      isMatchComponent<TMatchType>(child) && child.props.when
    )): {
      const matchedChild = childrenArray.find((child: ReactElement<MatchProps<TMatchType>>) => (
        isMatchComponent<TMatchType>(child) && child.props.when
      ));
      return matchedChild || null;
    }
    
    default:
      return fallback || null;
  }
}
//⚫️ ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞