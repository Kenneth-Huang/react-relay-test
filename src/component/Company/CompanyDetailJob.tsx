import React, {useEffect} from 'react'
import { graphql } from 'babel-plugin-relay/macro'
import {
  useRefetchableFragment
} from 'react-relay';

const query = graphql`
	fragment CompanyDetailJob_data on Query
	@refetchable(queryName: "CompanyDetailJobQuery"){
		job(id: $id) {
			title
			id
		}
	}
`
type CompanyDetailJobPropType = any
const CompanyDetailJob: React.FC<CompanyDetailJobPropType> = (props) => {
	const [data, refetch] = useRefetchableFragment(query, props.job);
	useEffect(() => {
		refetch({id:"rJKAbDd_z"})
	}, []);
	return (
		<div>
			{JSON.stringify(data)}
		</div>
	)
}

export default CompanyDetailJob
