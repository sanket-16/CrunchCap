import React from 'react';
import HashLoader from 'react-spinners/HashLoader';

function Loading(loading) {
	return <HashLoader color={'#fff'} loading={loading} size={150}/>;
}

export default Loading;
