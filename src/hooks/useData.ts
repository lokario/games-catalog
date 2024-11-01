import { useEffect, useState } from "react";
import rawgClient, { CanceledError } from "../services/rawg-client";

interface FetchResponse<T> {
	count: number;
	results: T[];
}

function useData<T>(endpoint: string, params: object = {}, dependencies: unknown[] = []) {
	const [data, setData] = useState<T[]>([]);
	const [error, setError] = useState("");
	const [isLoading, setLoading] = useState(false);

	useEffect(() => {
		const controller = new AbortController();

		setLoading(true);
		rawgClient
			.get<FetchResponse<T>>(endpoint, { signal: controller.signal, params })
			.then(res => {
				setData(res.data.results);
				setLoading(false);
			})
			.catch(err => {
				if (err instanceof CanceledError) return;
				setError(err.message);
				setLoading(false);
			});

		return () => controller.abort();
	}, dependencies);

	return { data, error, isLoading };
}

export default useData;
