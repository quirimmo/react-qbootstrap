import axios, { AxiosStatic, AxiosRequestConfig, AxiosPromise } from 'axios';

class HTTPProxyService {
	public static axios: AxiosStatic = axios;

	public static get(url: string, config?: AxiosRequestConfig): AxiosPromise<any> {
		return HTTPProxyService.axios.get(url, config);
	}

	public static delete(url: string): AxiosPromise<any> {
		return HTTPProxyService.axios.delete(url);
	}

	public static post(url: string, data: any = {}): AxiosPromise<any> {
		return HTTPProxyService.axios.post(url, data);
	}

	public static put(url: string, data: any = {}): AxiosPromise<any> {
		return HTTPProxyService.axios.put(url, data);
	}
}

export default HTTPProxyService;
