import axios from 'axios';



const key = process.env.REACT_APP_CLIENT_ID;
const baseUrl = process.env.REACT_APP_BASE_URL;
const photosUrl = process.env.REACT_APP_PHOTOS_URL;

interface RequestOptions {
    isProtected?: boolean;
    token: string;
}

export class UnsplashService {

    public static getData = async<T>(uri: string, options?: RequestOptions) => {
        try {
            const {token} = options;
            const requestOptions = {
                headers: {
                    Authorization: options && options.isProtected ? `` : `Bearer ${token}`
                }
            };
            const response = await axios.get<T>(baseUrl + uri, requestOptions);
            return response.data;

        } catch (e) {
            throw e;
        }
    };

    public static postData = async<T>(uri: string, body: any, options?: RequestOptions) => {

        try {
            const requestOptions = {};
            const response = await axios.post<T>(baseUrl + uri, requestOptions);
            return response.data;

        } catch (e) {
            throw e;
        }

    };

    public static getPhotos = async <T>() => {
        return await UnsplashService.getData<T>(photosUrl);
    };


}