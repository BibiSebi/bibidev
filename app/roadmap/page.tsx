import process from 'process';
import { LinearClient } from '@linear/sdk';
import { getWorkflowStateByIssue } from '@/helpers';

export const metadata = {
  title: 'Bibidev | Roadmap',
};

export default async function Page() {
  const apiKey = process.env.LINEAR_API_CLIENT_KEY;
  const teamId = process.env.LINEAR_TEAM_ID;

  if (!apiKey || !teamId) {
    return <span>Nothing found</span>;
  }

  const linearClient = new LinearClient({
    apiKey,
  });

  const team = await linearClient.team(teamId);
  const states = await team.states();

  const roadmapIssues = await team.issues({
    filter: {
      labels: {
        name: {
          eq: 'Roadmap',
        },
      },
    },
  });

  const mappedIssues = roadmapIssues.nodes.map((issue) => {
    const state = getWorkflowStateByIssue(issue, states);

    return {
      name: issue.title,
      id: issue.identifier,
      state: state?.name || '',
    };
  });

  return mappedIssues.map((issue) => (
    <div key={'issue' + issue.id}>
      <span>{issue.name}</span>
      <span>{issue.id}</span>
      <span>{issue.state}</span>
    </div>
  ));
}
