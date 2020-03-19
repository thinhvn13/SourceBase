import Axios from 'axios';
import * as types from './../action/Authenticate/AuthenticateType'

class User 
{
    constructor(token) {
        this._token = token;
        this._header = {
            "Content-Type": "application/json",
            "Authorization": this._token,
        }
      }

    set_header(){
        this._token = localStorage.getItem('UserKey');
        this._header = {
          "Content-Type": "application/json",
          "Authorization": this._token,
      }
      return true;
    }
    
    get_request(requet_link, request_param){
        res = Axios.get( 
            requet_link,
            request_param,
            this._header
          )
        return res;
    }
    post_request(requet_link, request_param){
        res = Axios.post( 
            requet_link,
            request_param,
            this._header
          )
        return res;
    }
    put_request(requet_link, request_param){
        res = Axios.put( 
            requet_link,
            request_param,
            this._header
          )
        return res;
    }
    patch_request(requet_link, request_param){
        res = Axios.patch( 
            requet_link,
            request_param,
            this._header
          )
        return res;
    }
    delete_request(requet_link, request_param){
        res = Axios.delete( 
            requet_link,
            request_param,
            this._header
          )
        return res;
    }

};

export default User;