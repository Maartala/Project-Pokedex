import { useLocation } from 'react-router-dom';

const DetailsPage = () => {

	const location = useLocation()
	console.log(location)

	return (
		<div>
			<p>{location.state.name}</p>
		</div>
	);
};

export default DetailsPage;