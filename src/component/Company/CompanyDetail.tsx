import React from 'react';
import { graphql } from 'babel-plugin-relay/macro'
import {
  useLazyLoadQuery
} from 'react-relay';
import CompanyDetailJob from './CompanyDetailJob'

type CompanyDetailProps = {
  match: {
    params:
    {
      companyId: any
    },
  }
}
const query = graphql`
  query CompanyDetailQuery($id: ID!, $jobID: ID!){
    company(id:$id){
      id
        name
        description
        jobs{
          id
          title
        }
      }
      ...CompanyDetailJob_data@arguments(id: $jobID)
    }
`

const CompanyDetail: React.FC<CompanyDetailProps> = (props) => {
      const { companyId } = props.match.params;

  const data = useLazyLoadQuery<any>(query, { id: companyId, jobID:"ry_1thlPt"});
  return (
    <div>
      <p>{JSON.stringify(data)}</p>
      <CompanyDetailJob jobs={data.company?.jobs} job={data}/>
      {/* jobs and job props has to be setted here otherwise a warning will be showed as bellow:*/}
      {/* Unexpected call to `refetch` while using a null fragment ref for fragment `CompanyDetailJob_data` in `useRefetchableFragment() */}
    </div>
  )
}

export default CompanyDetail
