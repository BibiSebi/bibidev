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
      stateColor: state?.color || '',
      type: state?.type || undefined,
    };
  });

  return (
    <main className='relative flex flex-col gap-2 px-6 py-12 text-gray-800 lg:px-32'>
      <h1 className='text-4xl font-semibold'>Roadmap</h1>

      <ul className='p-6'>
        {mappedIssues.map((issue) => (
          <li key={'issue' + issue.id}>
            {issue.type === 'done' ? (
              <span>checked</span>
            ) : (
              <span>not checked</span>
            )}
            <div className='flex gap-2'>
              <h2>{issue.id}</h2>
              <span className={`bg-[${issue.stateColor}] rounded`}>
                {issue.state}
              </span>
            </div>
            <span>{issue.name}</span>
          </li>
        ))}
      </ul>
    </main>
  );
}
