import process from 'process';
import { Issue, LinearClient, WorkflowStateConnection } from '@linear/sdk';
import { getWorkflowStateByIssue } from '@/helpers';
import Kanban from '@/app/roadmap/components/Kanban';
import KanbanCardList from '@/app/roadmap/components/KanbanCardList';
import KanbanCard from '@/app/roadmap/components/KanbanCard';

export const revalidate = 10;
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
    <main className='relative flex w-screen flex-col gap-2 px-6 py-12 text-gray-800 lg:px-32'>
      <h1 className=' text-4xl font-semibold'>Roadmap</h1>

      <Kanban>
        <KanbanCardList>
          <KanbanCard />
          <KanbanCard />
          <KanbanCard />
          <KanbanCard />
          <KanbanCard />
        </KanbanCardList>

        <KanbanCardList>
          <KanbanCard />
          <KanbanCard />
          <KanbanCard />
          <KanbanCard />
          <KanbanCard />
        </KanbanCardList>

        <KanbanCardList>
          <KanbanCard />
          <KanbanCard />
          <KanbanCard />
          <KanbanCard />
          <KanbanCard />
        </KanbanCardList>

        <KanbanCardList>
          <KanbanCard />
          <KanbanCard />
          <KanbanCard />
          <KanbanCard />
          <KanbanCard />
        </KanbanCardList>
      </Kanban>
    </main>
  );
}

const test = [
  {
    status: 'Done',
    type: 'done',
    issues: [
      {
        name: 'Design',
      },
    ],
  },
  {},
  {},
];
