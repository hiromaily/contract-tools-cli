import { ethers } from 'ethers';

export const encodeParams = (
  types: ReadonlyArray<string>,
  values: ReadonlyArray<any>,
  packed: boolean = false,
) => {
  if (!packed) {
    const abiCoder = new ethers.AbiCoder();
    return abiCoder.encode(types as any[], values as any[]);
  }

  return ethers.solidityPacked(types, values);
};

export const encodePackedParams = (types: ReadonlyArray<string>, values: ReadonlyArray<any>) =>
  encodeParams(types, values, true);
