import React from 'react'
import {Link} from 'react-router-dom'
import { graphql } from 'babel-plugin-relay/macro'
import {
	useFragment,
} from 'react-relay';
import { CompanyLink_company$key } from './__generated__/CompanyLink_company.graphql';

const query = graphql`
	fragment CompanyLink_company on Company{
		id
		name
	}
`

const CompanyLink = (props: any) => {
	const data = useFragment<CompanyLink_company$key>(query, props.company);
	return (
		<>
			<Link to={`/companies/${data.id}`}>{data.name}</Link>
		</>
	)
}

export default CompanyLink
