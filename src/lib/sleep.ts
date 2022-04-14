// Creates a delay in milliseconds before executing the next line
export const sleep = (ms: number) => new Promise(r => setTimeout(r, ms))
