import snippetServices from "../Services/snippetServices";

export const CREATE_SNIPPET = "CREATE_SNIPPET"
export const DELETE_SNIPPET = "DELETE_SNIPPET"
export const FIND_ALL_SNIPPETS = "FIND_ALL_SNIPPETS"
export const FIND_ALL_PUBLIC_SNIPPETS = "FIND_ALL_PUBLIC_SNIPPETS"

export const createSnippet = (dispatch) =>
    snippetServices.createSnippet()
        .then(snippet => dispatch({
                                      type: CREATE_SNIPPET,
                                      snippet
                                  }
        ))
export const deleteSnippet = (dispatch, snippetId) =>
    snippetServices.deleteSnippet(snippetId)
        .then(snippet => dispatch({
                                      type: DELETE_SNIPPET,
                                      snippetId
                                  }
        ))


export const findAllSnippets = (dispatch) =>
    snippetServices.findAllSnippets()
        .then(snippets => dispatch({
                                       type: FIND_ALL_SNIPPETS,
                                       snippets: snippets
                                   }
        ))

    export const findAllPublicSnippets = (dispatch) =>
    snippetServices.findAllPublicSnippets()
        .then(snippets => dispatch({
                                       type: FIND_ALL_PUBLIC_SNIPPETS,
                                       snippets: snippets
                                   }
        ))

