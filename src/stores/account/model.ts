export interface AccountModel {
	isLoading: boolean;
	profile: any;
	access_token: string | null;
	refresh_token: string | null;
	extra_token: any;
	error: { isError: false; detail: null };
}
