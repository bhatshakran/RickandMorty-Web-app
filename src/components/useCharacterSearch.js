import { useEffect, useState } from 'react';
import axios from 'axios';
import _ from 'lodash';

const useCharacterSearch = (query, pageNumber) => {
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);
	const [characters, setCharacters] = useState([]);
	const [hasMore, setHasMore] = useState(false);

	useEffect(() => {
		setCharacters([]);
	}, [query]);

	useEffect(() => {
		setLoading(true);
		setError(false);
		let cancel;
		axios({
			method: 'GET',
			url: `https://rickandmortyapi.com/api/character`,
			params: { page: pageNumber, name: query },
			cancelToken: new axios.CancelToken(c => (cancel = c)),
		})
			.then(res => {
				setCharacters(prevChar => {
					return [
						...prevChar,
						...res.data.results.map(char => JSON.stringify(char)),
					];
				});

				setHasMore(res.data.info.next !== null ? true : false);
				setLoading(false);
			})
			.catch(e => {
				if (axios.isCancel(e)) return;
				setError(true);
			});
		return () => cancel();
	}, [query, pageNumber]);
	return { loading, error, characters, hasMore };
};

export default useCharacterSearch;
