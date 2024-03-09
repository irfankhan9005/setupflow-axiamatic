// Mock API function to simulate saving selected tools to the backend
export const saveToolsToBackend = async () => {
  return new Promise<void>((resolve, reject) => {
    setTimeout(() => {
      const shouldSucceed = Math.random() > 0.2;
      if (shouldSucceed) {
        resolve();
      } else {
        reject(new Error("Failed to save selected tools to the backend"));
      }
    }, 1000);
  });
};
