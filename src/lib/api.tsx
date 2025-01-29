import AirOps from '@airops/airops-js';

const airopsClient = AirOps.identify({
  userId: import.meta.env.VITE_USER_ID,
  workspaceId: Number(import.meta.env.VITE_WORKSPACE_ID),
  hashedUserId: import.meta.env.VITE_USER_ID_HASH,
});

export const appId = import.meta.env.VITE_APP_ID;

export default airopsClient;
