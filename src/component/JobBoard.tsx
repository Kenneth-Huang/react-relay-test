import React from 'react'
import JobList from './JobList'
import { graphql } from 'babel-plugin-relay/macro'
import {
	useLazyLoadQuery
  } from 'react-relay';
import { JobBoardQuery } from './__generated__/JobBoardQuery.graphql'

const query = graphql`
	query JobBoardQuery {
		jobs{
			id
			title	
			company{
			id
			name
			}
			description
		}
	}
`;

const JobBoard = () => {
	const data = useLazyLoadQuery<JobBoardQuery>(query, {});

	return (
		<div>
			<h1 className="title">Job Board</h1>
			<JobList data={data} />
		</div>
	)
}

export default JobBoard
