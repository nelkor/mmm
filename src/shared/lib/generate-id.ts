let i = 0

export const generateId = (prefix = '_') => `${prefix}-${i++}`
