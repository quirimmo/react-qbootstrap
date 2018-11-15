import axios, { AxiosStatic, AxiosRequestConfig, AxiosPromise } from 'axios';

/**
 * Static class used for interfacing with your api.
 * It is a really generic class which provides few methods already implemented, like GET, PUT, POST and DELETE.
 * It uses axios in order to perform the HTTP requests, but you are free to change it with your favourite one.
 * @class HTTPProxyService
 */
class HTTPProxyService {
	/**
	 * Reference to the axios object of the axios library.
	 * @static
	 * @type {AxiosStatic}
	 * @memberof HTTPProxyService
	 */
	public static axios: AxiosStatic = axios;

	/**
	 * Perform a HTTP GET request to the given url with the given axios configuration,
	 * and return an AxiosPromise, which is a sub class of standard Promise class
	 * @static
	 * @param {string} url The url where to perform the GET request
	 * @param {AxiosRequestConfig} [config] The AxiosRequestConfig object to be used for the GET request
	 * @returns {AxiosPromise<any>}
	 * @memberof HTTPProxyService
	 */
	public static get(url: string, config?: AxiosRequestConfig): AxiosPromise<any> {
		return HTTPProxyService.axios.get(url, config);
	}
	/**
	 * Perform a HTTP POST request to the given url with the given data,
	 * and return an AxiosPromise, which is a sub class of standard Promise class
	 * @static
	 * @param {string} url The url where to perform the POST request
	 * @param {*} [data={}] Custom object with the data to be passed for the POST request
	 * @returns {AxiosPromise<any>}
	 * @memberof HTTPProxyService
	 */
	public static post(url: string, data: any = {}): AxiosPromise<any> {
		return HTTPProxyService.axios.post(url, data);
	}
	/**
	 * Perform a HTTP PUT request to the given url with the given data,
	 * and return an AxiosPromise, which is a sub class of standard Promise class
	 * @static
	 * @param {string} url The url where to perform the PUT request
	 * @param {*} [data={}] Custom object with the data to be passed for the PUT request
	 * @returns {AxiosPromise<any>}
	 * @memberof HTTPProxyService
	 */
	public static put(url: string, data: any = {}): AxiosPromise<any> {
		return HTTPProxyService.axios.put(url, data);
	}
	/**
	 * Perform a HTTP DELETE request to the given url with the given data,
	 * and return an AxiosPromise, which is a sub class of standard Promise class
	 * @static
	 * @param {string} url The url where to perform the DELETE request
	 * @returns {AxiosPromise<any>}
	 * @memberof HTTPProxyService
	 */
	public static delete(url: string): AxiosPromise<any> {
		return HTTPProxyService.axios.delete(url);
	}

	/**
	 * Being only a static class, we are keeping the constructor private in order to prevent to be called from outside
	 */
	private constructor() {}
}

export default HTTPProxyService;
