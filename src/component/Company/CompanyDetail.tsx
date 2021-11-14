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
  query CompanyDetailQuery($id: ID!){
    company(id:$id){
      id
        name
        description
        jobs{
          id
          title
        }
      }
      ...CompanyDetailJob_data
    }
`

const CompanyDetail: React.FC<CompanyDetailProps> = (props) => {
      const { companyId } = props.match.params;

  const data = useLazyLoadQuery<any>(query, { id: companyId });

  return (
    <div>
      <p>{JSON.stringify(data)}</p>
      <CompanyDetailJob/>
    </div>
  )
}

export default CompanyDetail


// export class CompanyDetail extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {company: {}};
//   }

//   async componentDidMount() {
//     const { companyId } = this.props.match.params;
//     const company = await fetchCompanyById(companyId);
//     this.setState({ company });
//   }

//   render() {
//     const { company } = this.state;
//     console.log('company:', company)
//     if (!company)
//       return null;
//     return (
//       <div>
//         <h1 className="title">{company.name}</h1>
//         <div className="box">{company.description}</div>
//         <h1 className="title is-5">Job at {company.name}</h1>
//         <JobList jobs={company.jobs}/>

//       </div>
//     );
//   }
// }
