type ClassValue = string | number | false | null | undefined | Record<string, boolean>;

/** Minimal className combinator — avoids pulling in a dependency for this. */
export function cn(...values: ClassValue[]): string {
  const classes: string[] = [];
  for (const value of values) {
    if (!value) continue;
    if (typeof value === 'string' || typeof value === 'number') {
      classes.push(String(value));
    } else {
      for (const [key, enabled] of Object.entries(value)) {
        if (enabled) classes.push(key);
      }
    }
  }
  return classes.join(' ');
}