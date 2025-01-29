import { useQuery } from '@tanstack/react-query';
import { WorkflowItem } from '../components/ui/grid/grid';
import airopsClient, { appId } from '../lib/api';

export default function useGetWorkflows(version: number) {
  const options = {
    appId: appId,
    version,
    payload: {
      inputs: {
        count: 3,
      },
    },
  };

  return useQuery({
    queryKey: ['workflows', version],
    queryFn: async () => {
      const response = await airopsClient.apps.execute(options);
      const result = await response.result();

      const output = result?.output as Record<string, unknown>;
      return output.data as WorkflowItem[];
    },
  });
}
