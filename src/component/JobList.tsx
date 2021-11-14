import React from 'react'
import { Link } from 'react-router-dom';
import {JobBoardQueryResponse} from './__generated__/JobBoardQuery.graphql'
type JobListProps = {
	data: JobBoardQueryResponse
}


const JobList: React.FC<JobListProps> = ({ data }) => {
	const { jobs } = data;
	if (!jobs)
		return null;
	
	const renderJob= (job: any)=> {
			const title = job.company ? `${job.title} at ${job.company.name}` : job.title;
			return (
			  <li className="media" key={job.id}>
				<div className="media-content">
				  <Link to={`/jobs/${job.id}`}>{title}</Link>
				</div>
			  </li>
			);
		  }
	return (
	  <ul className="box">
		{jobs.map(renderJob)}
	  </ul>
	);

	
}

export default JobList
