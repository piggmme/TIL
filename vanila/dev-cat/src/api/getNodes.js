import { BASE_URL } from '../const/url.js';

/**
 * [
    {
          "id": "1",
          "name": "노란고양이",
          "type": "DIRECTORY",
          "filePath": null,
          "parent": null
      },
      {
          "id": "3",
          "name": "까만고양이",
          "type": "DIRECTORY",
          "filePath": null,
          "parent": null
      },
   .....
    ]  
 */
export const getNodes = async nodeId => {
  try {
    const response = await fetch(`${BASE_URL}${nodeId ? `/${nodeId}` : ''}`);
    if (!response.ok) throw new Error('bad server condition');
    const result = response.json();
    return result;
  } catch (e) {
    console.error('getNodes Error: ', e.message);
  }
};
