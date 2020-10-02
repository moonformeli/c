import camel from 'camelcase';
import { snakeCase as snake } from 'snake-case';

const convertCase = <T extends object>(o: T, fn: Function): T => {
  return Object.keys(o).reduce<T>((_o, k) => {
    _o[fn(k)] = o[k];
    return _o;
  }, {} as T);
};

export const snakeCase = <T extends object>(o: T): T => {
  return convertCase(o, snake);
};

export const camelCase = <T extends object>(o: T): T => {
  return convertCase(o, camel);
};
