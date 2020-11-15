const SNIPPET_URL = "https://cs5610-project-java-server.herokuapp.com/api/snippets"
const CREATOR_URL = "https://cs5610-project-java-server.herokuapp.com/api/creators"

export const findAllSnippets = () =>
    fetch(SNIPPET_URL)
        .then(response => response.json());

export const findAllPublicSnippets = () =>
    fetch(`${SNIPPET_URL}/public`)
        .then(response => response.json());

// Not working yet.
export const searchAllPublicSnippets = () =>
    fetch(`${SNIPPET_URL}/snippets/public`)
        .then(response => response.json());

export const findSnippetsForCreator = (creatorId) =>
    fetch(`${CREATOR_URL}/${creatorId}/snippets`)
        .then(response => response.json());

export const createSnippet = () =>
    fetch(`${CREATOR_URL}/testCreator/snippets`, {
        method: "POST",
        body: JSON.stringify(
            {
                "gistId": "1",
                "creatorId": "alkhalifas",
                "dateCreated": "11/7/2020",
                "lastModified": "11/7/2020",
                "title": "This is how to import pandas",
                "description": "You can import pandas in python using the following command",
                "codeText": "import pandas as pd",
                "tags": "python, pandas, data science",
                "shareableURL": "www.codesnippers.com/alkhalifas/45678ghj567fg78",
                "publicPost": true,
                "recommended": true
            }),
        headers: {
            "content-type": "application/json"
        }
    })
        .then(response => response.json());

export const createSnippetForCreator = (creatorId, snippet) =>
    fetch(`${CREATOR_URL}/${creatorId}/snippets`,
          {
              method: "POST",
              body: JSON.stringify({snippet}),
              headers: {
                  "content-type": "application/json"
              }
          })
        .then(response => response.json());

export const updateSnippet = (snippetId, newSnippet) =>
    fetch(`${SNIPPET_URL}/${snippetId}`, {
        method: "PUT",
        body: JSON.stringify(newSnippet),
        headers: {
            "content-type": "application/json"
        }
    }).then(response => response.json());

export const deleteSnippet = (snippetId) =>
    fetch(`${SNIPPET_URL}/${snippetId}`, {
        method: "DELETE"
    })

export default {
    createSnippet,
    findAllSnippets,
    findAllPublicSnippets,
    deleteSnippet
}
