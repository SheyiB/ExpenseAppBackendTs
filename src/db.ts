import { connect } from 'mongoose';

export const db = async() =>{
    await connect('mongodb://127.0.0.1:27017/spendingsApp');

    console.log(`Server Running on ${process.env.PORT}`)
}