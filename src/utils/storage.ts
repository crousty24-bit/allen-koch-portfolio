type StorageReader = {
  getItem: (key: string) => string | null
}

type StorageWriter = {
  setItem: (key: string, value: string) => void
}

export function readStoredPreference<Value extends string>(
  getStorage: () => StorageReader,
  key: string,
  isValidValue: (value: string) => value is Value,
  fallback: Value,
): Value {
  try {
    const value = getStorage().getItem(key)

    return value !== null && isValidValue(value) ? value : fallback
  } catch {
    return fallback
  }
}

export function writeStoredPreference(
  getStorage: () => StorageWriter,
  key: string,
  value: string,
) {
  try {
    getStorage().setItem(key, value)
  } catch {
    // Preferences remain usable for the current session without persistence.
  }
}
