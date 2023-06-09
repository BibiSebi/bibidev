import process from 'process';
import {
  LinearClient,
  WorkflowState,
  WorkflowStateConnection,
} from '@linear/sdk';
import { getIssuesForState } from '@/helpers';
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
  const mapState = (state: WorkflowState) => {
    return {
      name: state.name,
      id: state.id,
      color: state.color,
      position: state.position,
    };
  };

  const roadmap = states.nodes.reduce((acc: any[], state) => {
    if (
      state.type === 'started' ||
      state.type === 'completed' ||
      state.type === 'unstarted'
    ) {
      const issues = getIssuesForState(roadmapIssues, state.id);
      return [
        ...acc,
        {
          ...mapState(state),
          issues,
        },
      ];
    }

    return acc;
  }, []);

  const sortedRoadmap = roadmap.sort((a, b) =>
    a.position > b.position ? 1 : -1
  );

  return (
    <main className='relative flex w-screen flex-col gap-2 px-6 py-12 text-gray-800 lg:px-32'>
      <h1 className=' text-4xl font-semibold'>Roadmap</h1>

      <Kanban>
        {sortedRoadmap.map((value, idx) => (
          <KanbanCardList
            key={`kanban-list-${idx}`}
            title={value.name}
            numberOfItems={value.issues.length}
          >
            {value.issues.map((issue: any) => (
              <KanbanCard
                description={issue.description}
                key={`kanban-card-${idx}`}
                title={issue.title}
                id={issue.identifier}
                createdAt={issue.createdAt}
              />
            ))}
          </KanbanCardList>
        ))}
      </Kanban>
    </main>
  );
}
