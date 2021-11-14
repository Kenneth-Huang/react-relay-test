import React from 'react'
import CompanyLink from './CompanyLink';
import { graphql } from 'babel-plugin-relay/macro'
import {
	useLazyLoadQuery
} from 'react-relay';
import { JobDetailsQuery } from './__generated__/JobDetailsQuery.graphql';

const query = graphql`
	query JobDetailsQuery($id: ID!){
		job(id:$id){
			id
			title
			description
			company{
				...CompanyLink_company
			}
		}
	}
`;

type JobDetailsProps = {
	match: {
		params:
		{
			jobId: any
		},
	}
}

const JobDetails = (props: JobDetailsProps) => {
	const {jobId} = props.match.params
	const data = useLazyLoadQuery<JobDetailsQuery>(query, {id: jobId});
	const { job } = data;
	return (
		<div>
			<h1 className="title">{job?.title}</h1>
			<h2 className="subtitle">
				<CompanyLink company = {job?.company}/>
			</h2>
			<div className="box">{job?.description}</div>
	  </div>
	)
}

export default JobDetails
