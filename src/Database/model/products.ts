import { RowDataPacket } from 'mysql2';

export interface products extends RowDataPacket {
    Id: number;
    name : string;
    img : string;
    description : string;
    price : number;
    cate_id: number;
    cate_name:string;

};