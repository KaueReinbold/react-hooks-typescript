const baseUrl = 'https://api.github.com';

async function GetUser(userName?: string) {
  const response = await fetch(`${baseUrl}/users/${userName}`, {
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + process.env.REACT_APP_GITHUB_TOKEN,
    },
  });

  const data = await response.json();

  return data;
}

async function GetRepositoriesFromUser(userName?: string) {
  const response = await fetch(`${baseUrl}/users/${userName}/repos`, {
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + process.env.REACT_APP_GITHUB_TOKEN,
    },
  });

  const data = await response.json();

  return data;
}

async function GetLanguageFromRepository(
  userName?: string,
  repositoryName?: string
) {
  const response = await fetch(
    `${baseUrl}/users/${userName}/${repositoryName}/languages`,
    {
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + process.env.REACT_APP_GITHUB_TOKEN,
      },
    }
  );

  const data = await response.json();

  return data;
}

const Api = {
  GetUser,
  GetRepositoriesFromUser,
  GetLanguageFromRepository,
};

export default Api;
