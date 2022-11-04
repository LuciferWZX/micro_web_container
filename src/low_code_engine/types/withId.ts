export type WithId<T,P = string> = T & {id:P}
export type WithChosen<T,P = boolean> = T & {chosen?:P}