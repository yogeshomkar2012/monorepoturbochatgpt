export const resolveData = (serverData, schemaData) => {
  if (Array.isArray(schemaData)) {
    return Array.isArray(serverData) && serverData.length > 0
      ? serverData
      : schemaData;
  }
  if (typeof schemaData === "object" && schemaData !== null) {
    return serverData && Object.keys(serverData).length > 0
      ? serverData
      : schemaData;
  }
  return schemaData;
};
