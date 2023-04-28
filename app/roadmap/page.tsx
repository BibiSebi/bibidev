import process from 'process';
import { LinearClient, WorkflowStateConnection } from '@linear/sdk';
import { getWorkflowStateByIssue } from '@/helpers';

export const metadata = {
  title: 'Bibidev | Roadmap',
};

export default async function Page() {
  const apiKey = process.env.LINEAR_API_CLIENT_KEY;
  const projectId = process.env.LINEAR_PROJECT_ID;

  if (!apiKey || !projectId) {
    return <span>Nothing found</span>;
  }

  const linearClient = new LinearClient({
    apiKey,
  });

  const project = await linearClient.project(projectId);

  const states: WorkflowStateConnection = await linearClient.workflowStates();
  const roadmapIssues = await project.issues();

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
