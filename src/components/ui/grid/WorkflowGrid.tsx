import { useCallback } from 'react';
import useGetWorkflows from '../../../hooks/useGetWorkflows';
import WorkflowHeader from './WorkflowHeader';
import WorkflowRow from './WorkflowRow';

export default function WorkflowGrid() {
  const { data, isLoading, isError, isSuccess } = useGetWorkflows(4);

  const editHandler = useCallback((id: number) => {
    console.log('Editing record: ', id);
  }, []);

  const deleteHandler = useCallback((id: number) => {
    console.log('Deleting record: ', id);
  }, []);

  const addTagHandler = useCallback((id: number) => {
    console.log('Adding tag to record: ', id);
  }, []);

  if (isError) {
    return (
      <div className="flex flex-col w-full p-8 items-start justify-center">
        <span className="text-lg mb-2">
          An error has occurred. Please reload the page.
        </span>
        <span className="text-sm text-gray-500">
          If the error persists, please get in touch with support to get
          assistance.
        </span>
      </div>
    );
  }

  if (isSuccess && !data) {
    return (
      <div className="flex flex-col w-full p-8 items-start justify-center">
        <span className="text-lg mb-2">
          No workflows found. Please create a workflow to get started.
        </span>
        <span className="text-sm text-gray-500">
          If you need help, please refer to the documentation or get in touch
          with support.
        </span>
      </div>
    );
  }

  // 🤝 For this asessment, we assume a fixed data structure
  return (
    <div className="flex w-full flex-col px-5 overflow-x-auto">
      {/* Header */}
      <WorkflowHeader />

      {/* Display the loading indicator within the grid to prevent blocking the user interface. */}
      {isLoading && (
        <div className="flex w-full p-8 items-center justify-center">
          Loading...
        </div>
      )}

      {/* Rows */}
      {!isLoading &&
        data!.map((workflowItem) => (
          <WorkflowRow
            key={workflowItem.id}
            item={workflowItem}
            onEdit={editHandler}
            onDelete={deleteHandler}
            onAddTag={addTagHandler}
          />
        ))}
    </div>
  );
}
