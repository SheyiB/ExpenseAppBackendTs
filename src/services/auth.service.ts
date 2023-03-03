import {User, IUser, UserLogin} from '../models/user';

export class AuthService{
	signUp (body: IUser){
        return new Promise(async(resolve, reject) => {
            try{
                const user = await User.create(body);

                const token = user.getSignedJwtToken();

                return resolve({user, token});
            }
            catch (e){
                e.source = 'Sign-Up Service';
                return reject(e)
            }
        })
    }

    login (body: UserLogin){
        return new Promise(async(resolve, reject) => {
            try{
                
                const {email, password} = body;
                
                const user = await User.findOne({email: email}).select('+password');

               
                if (!user) reject('FALSE-INFO!');

 				const isMatch =  await user.matchPassword(password);
                console.log(isMatch)      
                if(!isMatch) reject({status: 401, message:'Invalid Inforamtion Supplied!'});

                user.password = undefined;

                const token = user.getSignedJwtToken();

                if(!token) reject ('Could not Sign In User');
                


                resolve({user, token})
            }
            catch(e){
                e.source = 'Get User Service';
                return reject(e)
            }
        })
    }


}

