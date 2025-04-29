import { RowDataPacket } from 'mysql2';

export interface products extends RowDataPacket {
    Id: number;
    pro_name : string;
    img : string;
    pro_description : string;
   pro_price : number;
    cate_id: number;
    cate_name:string;

};