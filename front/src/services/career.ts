import { Career } from "../domain/entity/career";

export const exitEmptyCareer = (careers: Career[]) =>
  careers.some(c => isEmptyCareer(c));

export const isEmptyCareer = (career: Career) => {
  return Object.values(career).every(v => !v);
}