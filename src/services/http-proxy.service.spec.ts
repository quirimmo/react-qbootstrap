import HTTPProxyService from './http-proxy.service';
import axios, { AxiosRequestConfig } from 'axios';

const fakeUrl: string = 'http://fake.url';

describe('HttpProxyService', () => {
	beforeEach(() => {
		jest.useFakeTimers();
	});

	afterEach(() => {
		jest.runOnlyPendingTimers();
		jest.clearAllMocks();
	});

	it('should be defined', () => {
		expect(HTTPProxyService).toBeDefined();
	});

	it('should define the attributes', () => {
		expect(HTTPProxyService.axios).toBeDefined();
		expect(HTTPProxyService.axios).toEqual(axios);
	});

	it('should define the public methods', () => {
		expect(typeof HTTPProxyService.get).toEqual('function');
		expect(typeof HTTPProxyService.post).toEqual('function');
		expect(typeof HTTPProxyService.put).toEqual('function');
		expect(typeof HTTPProxyService.delete).toEqual('function');
	});

	describe('get', () => {
		it('should call the axios.get method', () => {
			const getConfig: AxiosRequestConfig = {};
			const mockGet = jest.spyOn(axios, 'get').mockImplementation(() => {});
			HTTPProxyService.get(fakeUrl, getConfig);
			expect(mockGet).toHaveBeenCalledWith(fakeUrl, getConfig);
		});
	});

	describe('post', () => {
		it('should call the axios.post method', () => {
			const data: any = {};
			const mockPost = jest.spyOn(axios, 'post').mockImplementation(() => {});
			HTTPProxyService.post(fakeUrl, data);
			expect(mockPost).toHaveBeenCalledWith(fakeUrl, data);
		});
	});

	describe('put', () => {
		it('should call the axios.put method', () => {
			const data: any = {};
			const mockPut = jest.spyOn(axios, 'put').mockImplementation(() => {});
			HTTPProxyService.put(fakeUrl, data);
			expect(mockPut).toHaveBeenCalledWith(fakeUrl, data);
		});
	});

	describe('delete', () => {
		it('should call the axios.delete method', () => {
			const mockDelete = jest.spyOn(axios, 'delete').mockImplementation(() => {});
			HTTPProxyService.delete(fakeUrl);
			expect(mockDelete).toHaveBeenCalledWith(fakeUrl);
		});
	});
});
