
import{db} from '../dbConnection';
import{products} from '../model/products';

export const getallproducts = async (): Promise<products[]> => {
const [rows] = await db.query<products[]> ('SELECT * FROM products');
return rows;
};


