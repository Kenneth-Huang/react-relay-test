import React, {useEffect} from 'react'
import { graphql } from 'babel-plugin-relay/macro'
import {
  useRefetchableFragment
} from 'react-relay';
import { CompanyDetailJobQuery } from './__generated__/CompanyDetailJobQuery.graphql'
import { CompanyDetailJob_data$key } from './__generated__/CompanyDetailJob_data.graphql'
const query = graphql`
	fragment CompanyDetailJob_data on Query
	@refetchable(queryName: "CompanyDetailJobQuery")
	@argumentDefinitions(id:{type: "ID!"}, isFetchable:{type: Boolean, defaultValue:true})
	# @include(if: isFetchable)
	{
		job(id: $id) {
			title
			id
		}
	}
`
type CompanyDetailJobPropsType = {
	job: CompanyDetailJob_data$key,
	jobs: [any]
};
// It is better to set PropsType properly

const CompanyDetailJob: React.FC<CompanyDetailJobPropsType> = (props) => {
	// const { jobs } = props;
	const [data, refetch] = useRefetchableFragment<CompanyDetailJobQuery, any>(query, props.job);
	
	const refetchJob = () => {
		refetch({ id: "rkz1GwOOM" });
	};
	useEffect(() => {
		refetch({ id: "rJKAbDd_z" , isFetchable: true});
	}, [refetch]);
	return (
		<div>
			{JSON.stringify(data, null, 2)}
			<button onClick={refetchJob}>Next Job</button>
		</div>
	)
}

export default CompanyDetailJob
