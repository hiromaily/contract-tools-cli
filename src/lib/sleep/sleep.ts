// eslint-disable-next-line no-promise-executor-return
export const sleep = (ms: number) => new Promise((res) => setTimeout(res, ms));
