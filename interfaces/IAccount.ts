import { Schema } from "mongoose";

interface IAccount extends Document {
    user: Schema.Types.ObjectId,
    account_type: string;
    balance: number;
}

export default IAccount;