import { AsyncStorage } from 'react-native';
import Storage from 'react-native-storage';


// Check https://www.npmjs.com/package/react-native-storage to see how use storage object.
export default function getStorage () {
    return new Storage({
        // maximum capacity, default 1000  
        size: 1000,
    
        // If not set, data would be lost after reload. 
        storageBackend: AsyncStorage,
        
        // expire time, default 1 day(1000 * 3600 * 24 milliseconds). 
        // can be null, which means never expire. 
        defaultExpires: 1000 * 3600 * 24,
        
        // cache data in the memory. default is true. 
        enableCache: true,
        
        // if data was not found in storage or expired, 
        // the corresponding sync method will be invoked and return  
        // the latest data. 
        sync : {
            // Example.
            // The name of the sync method must be the same of the data's key 
            // And the passed params will be an all-in-one object. 
            // You can use promise here.  
            // Or plain callback function with resolve/reject, like: 

            user(params) {
                /*
                storage.load({
                    key: 'user',
                    id: '1002'
                }).then(...)
                If there is no user 1002 stored currently, then storage.sync.user would be invoked to fetch remote data and returned.
                */
                let { id, resolve, reject, syncParams: { extraFetchOptions, someFlag } } = params;
                fetch('user/', {
                    method: 'GET',
                    body: 'id=' + id,
                    ...extraFetchOptions,
                }).then(response => {
                    return response.json();
                }).then(json => {
                    // console.log(json); 
                    if(json && json.user){
                        storage.save({
                            key: 'user',
                            id,
                            data: json.user
                        });
                        
                        if (someFlag) {
                        // do something for this extra param 
                        }
                        
                        // Call resolve() when succeed 
                        resolve && resolve(json.user);
                    }
                    else{
                        // Call reject() when failed 
                        reject && reject(new Error('data parse error'));
                    }
                }).catch(err => {
                    console.warn(err);
                    reject && reject(err);
                });
            }, 

            loginState(params){

            },
        }
    })
}