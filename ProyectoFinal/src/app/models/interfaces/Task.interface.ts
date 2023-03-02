export enum Levels{
    "Info",
    "Urgente",
    "Blocking"
}

export interface ITask{
    title:string;
    description?:string;
    completed:boolean;
    level:Levels;
}